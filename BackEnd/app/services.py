# services.py
from typing import List, Optional, Dict
from app.database import collection_user,collection_applicant,collection_personal_info,collection_travel_history
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

    last_user = collection_user.find_one(sort=[("_id", -1)])
    last_id = last_user["user_id"] if last_user else "U000"
    last_seq = int(last_id[1:])
    new_seq = last_seq + 1
    user_id = f"U{new_seq:03d}"
    user_data["user_id"] = user_id
    user_data["user_type"] = "user"

    # Insert user data into MongoDB
    inserted_user = collection_user.insert_one(user_data)

    return {"message": "User created successfully"}

def login_user_manual(user_login, ACCESS_TOKEN_EXPIRE_MINUTES):
    existing_user = collection_user.find_one(
        {"user_email": user_login.email}, 
        {"_id": 0, "user_email": 1, "user_pw": 1}
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

    return {"access_token": access_token , "user_email": user_login.email}

def get_personal_info(request_data, current_user):
    existing_user = collection_personal_info.find_one({"user_email": current_user.get("user_email")})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    last_info = collection_personal_info.find_one(sort=[("_id", -1)])
    last_id = last_info["personal_info_id"] if last_info else "L000"
    last_seq = int(last_id[1:])
    new_seq = last_seq + 1
    personal_info_id = f"L{new_seq:03d}"

    data = {
        "user_email": current_user.get("user_email"),
        "user_id": current_user.get("user_id"),
        "personal_info_id" : personal_info_id,
        "prefix": request_data.prefix,
        "firstName": request_data.firstName,
        "middleName": request_data.middleName,
        "lastName": request_data.lastName,
        "dateOfBirth": request_data.dateOfBirth,
        "religion": request_data.religion,
        "gender": request_data.gender,
        "maritalStatus": request_data.maritalStatus,
        "countryOfBirth": request_data.countryOfBirth,
        "cityOfBirth": request_data.cityOfBirth,
        "presentAddress": request_data.presentAddress,
        "countryOfResidence": request_data.countryOfResidence,
        "postalCode": request_data.postalCode,
        "mobileNumber": request_data.mobileNumber,
        "email": request_data.email,
        "educationLevel": request_data.educationLevel,
        "fieldOfStudy": request_data.fieldOfStudy,
        "occupation": request_data.occupation,
        "companyName": request_data.companyName,
        "companyAddress": request_data.companyAddress,
        "fathersName": request_data.fathersName,
        "fathersCountryOfBirth": request_data.fathersCountryOfBirth,
        "fathersNationality": request_data.fathersNationality,
        "mothersName": request_data.mothersName,
        "mothersCountryOfBirth": request_data.mothersCountryOfBirth,
        "mothersNationality": request_data.mothersNationality,
        "visa_approve_status": "Pending"
    }
    collection_personal_info.insert_one(data)
    return {"message": "Personal info created successfully"}
    
    
def create_travel_history(request_data,current_user):
    existing_user = collection_personal_info.find_one({"user_email": current_user.get("user_email")})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    last_travel_info = collection_travel_history.find_one(sort=[("_id", -1)])
    last_id = last_travel_info["travel_id"] if last_travel_info else "T000"
    last_seq = int(last_id[1:])
    new_seq = last_seq + 1
    travel_id = f"T{new_seq:03d}"
    
    data = {
        "user_email": current_user.get("user_email"),
        "travel_id" : travel_id,
        "passportType": request_data.passportType,
        "issuingCountry": request_data.issuingCountry,
        "nationality": request_data.nationality,
        "passportNumber": request_data.passportNumber,
        "placeOfIssue": request_data.placeOfIssue,
        "dateOfIssue": request_data.dateOfIssue,
        "dateOfExpire": request_data.dateOfExpire,
        "nationalityAcquisition": request_data.nationalityAcquisition,
        "portOfEntry": request_data.portOfEntry,
        "portOfDeparture": request_data.portOfDeparture,
        "visitingCities": request_data.visitingCities,
        "expectedArrivalDate": request_data.expectedArrivalDate,
        "expectedDepartureDate": request_data.expectedDepartureDate,
        "emergencyContactName": request_data.emergencyContactName,
        "emergencyAddress": request_data.emergencyAddress,
        "emergencyMobileNumber": request_data.emergencyMobileNumber
    }
    collection_travel_history.insert_one(data)
    return {"message": "Travel history created successfully"}

def get_requested_applicants(current_user):
    if current_user.get("user_type") != "admin":
        raise HTTPException(status_code=403, detail="Unauthorized, only admin can view information")
    print("Current user:", current_user.get("user_type"))
    excluded_statuses = ["Approved", "Deny"]
    
    applicant = []
    for aplication in collection_personal_info.find({"visa_approve_status": {"$nin": excluded_statuses}}):

        applicant_data = {
            "user_id": aplication["user_id"],
            "personal_info_id": aplication["personal_info_id"],
            "firstName": aplication["firstName"],
            "lastName": aplication["lastName"],
            "risky_status": "pending",
        }
        applicant.append(applicant_data)
    return applicant

def get_approved_applicants(current_user):
    if current_user.get("user_type") != "admin":
        raise HTTPException(status_code=403, detail="Unauthorized, only admin can view information")
    print("Current user:", current_user.get("user_type"))
    applicant = []
    for aplication in collection_personal_info.find({"visa_approve_status": "Approved"}):
        applicant_data = {
            "user_id": aplication["user_id"],
            "personal_info_id": aplication["personal_info_id"],
            "firstName": aplication["firstName"],
            "lastName": aplication["lastName"],
            "risky_status": "No",
            "visa_approve_status": aplication["visa_approve_status"]
        }
        applicant.append(applicant_data)
    return applicant

def get_rejected_applicants(current_user):
    if current_user.get("user_type") != "admin":
        raise HTTPException(status_code=403, detail="Unauthorized, only admin can view information")
    print("Current user:", current_user.get("user_type"))
    applicant = []
    for aplication in collection_personal_info.find({"visa_approve_status": "Deny"}):
        applicant_data = {
            "user_id": aplication["user_id"],
            "personal_info_id": aplication["personal_info_id"],
            "firstName": aplication["firstName"],
            "lastName": aplication["lastName"],
            "risky_status": "Yes",
            "visa_approve_status": aplication["visa_approve_status"]
        }
        applicant.append(applicant_data)
    return applicant

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
    
def update_personal_info_visa_approve_status(personal_info_id: str , newStatus_data, current_user: User):
    if current_user.get("user_type") != "admin":
        raise HTTPException(status_code=403, detail="Unauthorized, only admin can approve visa")
    existing_info = collection_personal_info.find_one({"personal_info_id": personal_info_id})

    if not existing_info:
        raise HTTPException(status_code=404, detail="Personal info not found")
    
    collection_personal_info.update_one({"personal_info_id": personal_info_id}, {"$set": {"visa_approve_status": newStatus_data.new_status}})
    return {"message": "Visa approved successfully"}



def get_applicant_details(user_id: str, current_user: User):
    if current_user.get("user_type") != "admin":
        raise HTTPException(status_code=403, detail="Unauthorized, only admin can view information")
    
    application = collection_personal_info.find_one({"user_id": user_id})
    if not application:
        raise HTTPException(status_code=404, detail="Applicant not found")
    
    applicant_data = {
        "user_id": application["user_id"],
        "personal_info_id": application["personal_info_id"],
        "prefix": application.get("prefix", ""),
        "firstName": application.get("firstName", ""),
        "middleName": application.get("middleName", ""),
        "lastName": application.get("lastName", ""),
        "dateOfBirth": application.get("dateOfBirth", ""),
        "gender": application.get("gender", ""),
        "religion": application.get("religion", ""),
        "maritalStatus": application.get("maritalStatus", ""),
        "countryOfBirth": application.get("countryOfBirth", ""),
        "cityOfBirth": application.get("cityOfBirth", ""),
        "presentAddress": application.get("presentAddress", ""),
        "countryOfResidence": application.get("countryOfResidence", ""),
        "postalCode": application.get("postalCode", ""),
        "mobileNumber": application.get("mobileNumber", ""),
        "email": application.get("email", ""),
        "educationLevel": application.get("educationLevel", ""),
        "fieldOfStudy": application.get("fieldOfStudy", ""),
        "occupation": application.get("occupation", ""),
        "companyName": application.get("companyName", ""),
        "companyAddress": application.get("companyAddress", ""),
        "fathersName": application.get("fathersName", ""),
        "fathersCountryOfBirth": application.get("fathersCountryOfBirth", ""),
        "fathersNationality": application.get("fathersNationality", ""),
        "mothersName": application.get("mothersName", ""),
        "mothersCountryOfBirth": application.get("mothersCountryOfBirth", ""),
        "mothersNationality": application.get("mothersNationality", ""),
        "visa_approve_status": application.get("visa_approve_status", ""),
    }

    return applicant_data
