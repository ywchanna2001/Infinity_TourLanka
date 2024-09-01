# utils.py
import bcrypt
import jwt
from jwt import PyJWTError, decode as jwt_decode, encode as jwt_encode
from fastapi import Depends
from datetime import datetime, timedelta
from fastapi import HTTPException
from app.config import SECRET_KEY, ALGORITHM
from app.database import collection_user
from fastapi.security import OAuth2PasswordBearer


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
    except PyJWTError:
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

