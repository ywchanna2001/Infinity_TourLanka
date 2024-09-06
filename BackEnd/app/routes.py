#routes.py
from fastapi import APIRouter, Depends ,UploadFile, HTTPException ,BackgroundTasks
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from app.models import User_login, User,ApplicationCollection,PersonalInfo,TravelHistory,Update_personal_info_approve_satats
from app.config import ACCESS_TOKEN_EXPIRE_MINUTES, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID
import app.services
from app.utils import get_current_user
from typing import List
import cloudinary.uploader
import httpx

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@router.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    return await app.services.login_user(form_data, ACCESS_TOKEN_EXPIRE_MINUTES)

@router.post("/signup")
async def create_user(user: User):
    return app.services.create_new_user(user)

@router.post("/login")
async def login(user_login: User_login ):
    return app.services.login_user_manual(user_login, ACCESS_TOKEN_EXPIRE_MINUTES)

@router.post("/personal-info")
def get_personal_info(request_data: PersonalInfo , current_user: User = Depends(get_current_user)):
    return app.services.get_personal_info(request_data, current_user)

@router.post("/travel-info")
def create_travel_history(request_data: TravelHistory ,current_user: User = Depends(get_current_user)):
    return app.services.create_travel_history(request_data,current_user)

@router.get("/requested-applicants")
def get_applicants_requested(current_user: User = Depends(get_current_user)):
    return app.services.get_requested_applicants(current_user)

@router.get("/apprvoed-applicants")
def get_applicants_approved(current_user: User = Depends(get_current_user)):
    return app.services.get_approved_applicants(current_user)

@router.get("/rejected-applicants")
def get_applicants_rejected(current_user: User = Depends(get_current_user)):
    return app.services.get_rejected_applicants(current_user)

@router.get("/check-applicant/{name}/")
def check_applicant(name: str):
    return app.services.check_applicant_by(name)

@router.post("/upload-images/")
async def upload_image(passportPhoto: UploadFile,bioPagePhoto: UploadFile, current_user: User = Depends(get_current_user)):
    return await app.services.upload_image(passportPhoto,bioPagePhoto, current_user)

@router.put("/update_personal_info_visa_approve_status/{personal_info_id}")
def update_personal_info_visa_approve_status(personal_info_id: str , newStatus_data:Update_personal_info_approve_satats, current_user: User = Depends(get_current_user)):
    return app.services.update_personal_info_visa_approve_status(personal_info_id,newStatus_data,current_user)

@router.get("/applicant/{user_id}")
def get_applicant(user_id: str , current_user: User = Depends(get_current_user)):
    return app.services.get_applicant_details(user_id,current_user)

@router.get("/send_email{user_id}")
def send_mail(user_id: str ,current_user: User = Depends(get_current_user)):
    return app.services.send_visa_application(user_id,current_user)
