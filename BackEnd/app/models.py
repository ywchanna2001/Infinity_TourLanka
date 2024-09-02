# models.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

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
    
