# database.py
from pymongo import MongoClient
from app.config import MONGODB_URL

client = MongoClient(MONGODB_URL)

database = client.TravelApp

collection_user = database["users"]
collection_applicant = database["applicant"]
notices_collection = database["notices"] 
collection_personal_info = database["personal_info"]
collection_travel_history = database["travel_history"]
