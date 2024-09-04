#routes.py
from fastapi import APIRouter, Depends ,UploadFile, HTTPException ,BackgroundTasks
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from app.models import User_login, User,ApplicationCollection,InterpolNotice,EmailRequest
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

@router.post("/users")
async def create_user(user: User):
    return app.services.create_new_user(user)

@router.post("/login")
async def login(user_login: User_login ):
    return app.services.login_user_manual(user_login, ACCESS_TOKEN_EXPIRE_MINUTES)


@router.post("/create_vacancy")
def create_applicant(BaseModel: ApplicationCollection):
    return app.services.create_new_aplicant( BaseModel )

@router.get("/requested-applicants", response_model=List[dict])
def get_applicants_requested():
    applicants = app.services.get_requested_applicants()
    return applicants

@router.get("/apprvoed-applicants", response_model=List[dict])
def get_applicants_approved():
    applicants = app.services.get_approved_applicants()
    return applicants

@router.get("/rejected-applicants", response_model=List[dict])
def get_applicants_rejected():
    applicants = app.services.get_rejected_applicants()
    return applicants

@router.get("/check-applicant/{name}/")
def check_applicant(name: str):
    return app.services.check_applicant_by(name)

@router.post("/upload-image/")
async def upload_image(file: UploadFile):
    return await app.services.upload_image(file)
