# models.py
from pydantic import BaseModel,Field
from typing import List, Optional, Dict

from datetime import date, datetime

class User_login(BaseModel):
    email: str
    password: str
    
class User(BaseModel):
    name:str
    user_email:str
    user_pw:str

class PersonalInfo(BaseModel):
    prefix:str
    fName: str
    mName : str
    lName: str
    gender: str
    dob : str 
    religion : str
    countryOfBirth : str
    cityOfBirth : str 
    nationality : str
    address : str 

class ApplicationCollection(BaseModel):
    application_id: str
    user_id: str
    user_name: str
    risky: str
    
class InterpolNotice(BaseModel):
    notice_id: str
    name: str
    date_of_birth: date

    class Config:
        json_encoders = {
            date: lambda v: datetime.combine(v, datetime.min.time())
        }
class EmailRequest(BaseModel):
    to_email: str
    subject: str
    message: str