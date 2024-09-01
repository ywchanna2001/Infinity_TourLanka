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
