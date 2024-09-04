# utils.py
import bcrypt
import jwt
from fastapi import Depends
from datetime import datetime, timedelta
from fastapi import HTTPException
from app.config import SECRET_KEY, ALGORITHM
from app.database import collection_user, notices_collection
from app.models import InterpolNotice
from pymongo.collection import Collection
from fastapi.security import OAuth2PasswordBearer
from typing import List, Optional, Dict
import cloudinary
import cloudinary.uploader



def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def create_refresh_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def decode_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except (jwt.InvalidTokenError, jwt.InvalidSignatureError):
        raise HTTPException(status_code=401, detail="Invalid token")
    
def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    encoded_password = password.encode("utf-8")
    hashed = bcrypt.hashpw(encoded_password, salt)
    return hashed.decode("utf-8")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    encoded_plain_password = plain_password.encode("utf-8")
    encoded_hashed_password = hashed_password.encode("utf-8")
    return bcrypt.checkpw(encoded_plain_password, encoded_hashed_password)


def decode_access_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("email")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return email
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


async def authenticate_user(email: str, password: str):
    existing_user = collection_user.find_one({"user_email": email})
    if not existing_user or not verify_password(password, existing_user["user_pw"]):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    return existing_user


async def authenticate_user_exist(email: str):
    existing_user = collection_user.find_one({"user_email": email}, {"_id": 0, "user_email": 1, "user_type": 1})
    if not existing_user:
        raise HTTPException(status_code=401, detail="Incorrect email")
    return existing_user

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    print("Received Token:", token)
    try:
        payload = decode_access_token(token)
        if payload is None:
            raise credentials_exception
    except:
        raise credentials_exception
    user = await authenticate_user_exist(email=payload)
    if user is None:
        raise credentials_exception
    return user


# def create_notice(notice):
#     if isinstance(notice.date_of_birth, datetime.date):
#         notice.date_of_birth = datetime.combine(notice.date_of_birth, datetime.min.time())
    
#     notices_collection.insert_one(notice.dict(by_alias=True))

def get_notice_by_name(name: str, collection: Collection = notices_collection) -> Optional[InterpolNotice]:
    notice_data = collection.find_one({"name": name})
    if notice_data:
        return InterpolNotice(**notice_data)
    return None

# def get_all_notices(collection: Collection = notices_collection) -> List[InterpolNotice]:
#     notices = []
#     for document in collection.find():
#         notices.append(InterpolNotice(**document))
#     return notices


def upload_pdf(file):
    allowed_extensions = {'pdf'}
    file_extension = file.filename.split('.')[-1]

    if file_extension.lower() not in allowed_extensions:
        raise Exception("Only PDF files are allowed.")

    # Upload the PDF to Cloudinary
    result = cloudinary.uploader.upload(file.read(), resource_type="raw", public_id=file.filename.split('.')[0])

    # Get the secure URL of the uploaded PDF
    pdf_url = result.get("secure_url")

    if not pdf_url:
        raise Exception("Failed to upload PDF to Cloudinary.")

    return {"message": "PDF uploaded successfully", "pdf_url": pdf_url}


# @router.post("/upload-pdf/")
# async def upload_pdf(file: UploadFile):
#     allowed_extensions = {'pdf'}
#     file_extension = file.filename.split('.')[-1]

#     if file_extension.lower() not in allowed_extensions:
#         raise HTTPException(status_code=400, detail="Only PDF files are allowed.")

#     # Upload the PDF to Cloudinary
#     result = cloudinary.uploader.upload(await file.read(), resource_type="raw", public_id=file.filename.split('.')[0])

#     # Get the secure URL of the uploaded PDF
#     pdf_url = result.get("secure_url")

#     if not pdf_url:
#         raise HTTPException(status_code=500, detail="Failed to upload PDF to Cloudinary.")

#     return {"message": "PDF uploaded successfully", "pdf_url": pdf_url}