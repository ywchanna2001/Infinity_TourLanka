# models.py
from pydantic import BaseModel,Field
from typing import List, Optional, Dict

from datetime import date, datetime

class User_login(BaseModel):
    email: str
    password: str
    
class User(BaseModel):
    user_email: str
    user_pw: str
    user_name: str

class PersonalInfo(BaseModel):
    prefix: str
    firstName: str
    middleName: Optional[str] = None
    lastName: str
    dateOfBirth: str
    religion: str
    gender: str
    maritalStatus: str
    countryOfBirth: str
    cityOfBirth: str
    presentAddress: str
    countryOfResidence: str
    postalCode: str
    mobileNumber: str
    email: str  
    educationLevel: str
    fieldOfStudy: str
    occupation: str
    companyName: Optional[str] = None
    companyAddress: Optional[str] = None
    fathersName: str
    fathersCountryOfBirth: Optional[str] = None
    fathersNationality: Optional[str] = None
    mothersName: str
    mothersCountryOfBirth: Optional[str] = None
    mothersNationality: Optional[str] = None

class TravelHistory(BaseModel):
    passportType: str
    issuingCountry: str
    nationality: str
    passportNumber: str
    placeOfIssue: str
    dateOfIssue: str
    dateOfExpire: str
    nationalityAcquisition: str
    portOfEntry: str
    portOfDeparture: str
    visitingCities: str
    expectedArrivalDate: str
    expectedDepartureDate: str
    emergencyContactName: str
    emergencyAddress: str
    emergencyMobileNumber:str

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