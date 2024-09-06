#config.py
import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config( 
    cloud_name = "dmbvfxw2v", 
    api_key = "944344461526228", 
    api_secret = "tPQYFNeUL3_89m42YcP8vV_7TwU", # Click 'View API Keys' above to copy your API secret
    secure=True
)

MONGODB_URL = "mongodb+srv://oshen:oshen@cluster0.h2my8yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
SECRET_KEY = "Travelapp" 
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 180 

EMAILJS_SERVICE_ID = "service_1tolmgk"
EMAILJS_TEMPLATE_ID = "template_6twf1vl"
EMAILJS_USER_ID = "ZVekm6kosrJv4FbaA"