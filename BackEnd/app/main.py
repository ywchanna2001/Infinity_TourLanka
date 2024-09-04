# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

from fastapi.security import OAuth2PasswordBearer

app = FastAPI()

# origins = [
#     "http://localhost:5173/",  
      
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173/"],
#     allow_credentials=True,
#     allow_methods=["GET", "POST", "PUT", "DELETE"],  
#     allow_headers=["*"],  
# )

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows requests from your frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)


app.include_router(router)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
