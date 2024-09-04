# services.py
from typing import List, Optional, Dict
from app.database import collection_user,collection_applicant
from app.models import User,ApplicationCollection
from app.utils import hash_password, verify_password, create_access_token,authenticate_user,get_notice_by_name
from datetime import timedelta
from fastapi import HTTPException,UploadFile
from bson import ObjectId
from pymongo import DESCENDING
import httpx
from app.config import  EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import cloudinary.uploader

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

async def login_user(form_data, access_token_expire_minutes):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token_expires = timedelta(minutes=access_token_expire_minutes)
    access_token = create_access_token(data={"email": user['user_email']}, expires_delta=access_token_expires)
    print(access_token)
    return {"access_token": access_token,"token_type": "bearer"}

def create_new_user(user:User):
    existing_user = collection_user.find_one({"user_email": user.user_email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the password before storing in the database
    hashed_password = hash_password(user.user_pw)
    
    # Modify user data to include hashed password
    user_data = user.dict()
    user_data["user_pw"] = hashed_password

    # Insert user data into MongoDB
    inserted_user = collection_user.insert_one(user_data)

    return {"message": "User created successfully"}

def login_user_manual(user_login, ACCESS_TOKEN_EXPIRE_MINUTES):
    existing_user = collection_user.find_one(
        {"user_email": user_login.email}, 
        {"_id": 0, "user_email": 1, "user_pw": 1, "user_type": 1}
    )
    if not existing_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    user_pw = existing_user["user_pw"]  

    if not verify_password(user_login.password, user_pw):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"email": user_login.email}, expires_delta=access_token_expires
    )

    return {"access_token": access_token}

def create_new_aplicant(BaseModel):
    last_vacancy = collection_applicant.find_one(sort=[("_id", -1)])
    last_id = last_vacancy["application_id"] if last_vacancy else "A000"
    last_seq = int(last_id[1:])
    new_seq = last_seq + 1
    application_id = f"A{new_seq:03d}"
    
        
    data = {
        "application_id": application_id,
        "user_id": BaseModel.user_id,
        "user_name": BaseModel.user_name,
        "risky": BaseModel.risky,
        "status": "Pending"

    }
    collection_applicant.insert_one(data)
    
    return {"message": "Applicant created successfully"}

def get_requested_applicants():
    applicants = []
    for applicant in collection_applicant.find():
        applicant_data = {
            "application_id": applicant["application_id"],
            "user_name": applicant["user_name"],
            "risky": applicant["risky"],
            "status": applicant["status"]
                      
        }
        applicants.append(applicant_data)
    return applicants

def get_approved_applicants():
    applicants = []
    for applicant in collection_applicant.find({"status": "Approved"}):
        applicant_data = {
            "application_id": applicant["application_id"],
            "user_name": applicant["user_name"],
            "risky": applicant["risky"],
            "status": applicant["status"]
        }
        applicants.append(applicant_data)
    return applicants

def get_rejected_applicants():  
    applicants = []
    for applicant in collection_applicant.find({"status": "Rejected"}):
        applicant_data = {
            "application_id": applicant["application_id"],
            "user_name": applicant["user_name"],
            "risky": applicant["risky"],
            "status": applicant["status"]
        }
        applicants.append(applicant_data)
    return applicants

def check_applicant_by(name: str):
    notice = get_notice_by_name(name)
    if notice:
        return {"risk": True, "notice": notice}
    return {"risk": False, "message": "No matching notice found"}

async def upload_image(file: UploadFile):
    allowed_extensions = {'png', 'jpg', 'jpeg'}
    file_extension = file.filename.split('.')[-1]

    if file_extension.lower() not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Only PNG and JPG files are allowed.")

    try:
        # Upload the image to Cloudinary
        result = cloudinary.uploader.upload(await file.read(), public_id=file.filename.split('.')[0])

        # Get the secure URL of the uploaded image
        image_url = result.get("secure_url")

        if not image_url:
            raise HTTPException(status_code=500, detail="Failed to upload image to Cloudinary.")

        return {"message": "Image uploaded successfully", "image_url": image_url}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image upload failed: {str(e)}")




