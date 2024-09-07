# TraveApp Project Backend

This is a Travelapp project using fastapi and mongodb for backend.

Setup
Clone the repository.
Create and activate a virtual environment.
Install dependencies using pip install -r requirements.txt.
Database congiguration
Local MongoDB
If you prefer to use a local MongoDB instance, follow these steps:

Install MongoDB on your machine by downloading it from the official MongoDB website and following the installation instructions for your operating system.

Start the MongoDB service on your machine.

In your project's backend directory, navigate a file named database.py and makesure mongodb url define as follows:

# database.py

MONGODB_URL = "mongodb://localhost:27017"
Then you want to go the mongodb compass and connet with locally.you should need to create database named "TravelApp".

MongoDB Cluster
If you want to use a MongoDB cluster, follow these steps:

Sign up for a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas.

Create a new cluster and configure it according to your needs.

In your project's backend directory, navigate a file named database.py and add the following string:

# database.py

MONGODB_URL = "mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
Replace <username>, <password>, <cluster-url>, and <database-name> with your MongoDB Atlas credentials and cluster details.

Then you want to go the mongodb atlas using above link and establsh the connection.then you should need to godatabase section and create database named "TravelApp.

# How to run

Navigate to Project Directory: Open your terminal or command prompt and navigate to the directory where our Python project located.
  type: cd Backend
 
 Then 

1) first you need to create virtual environment using this code : python -m venv .venv

2) Activate Virtual Environment using: 
      # For Windows : .venv\Scripts\activate    
      # For Linux/Mac : .\venv\bin\activate

3) You need to install requirements.txt file  : 
      # using this code : pip install -r requirements.txt

4) run the program using: 
      # using this code : uvicorn app.main:app --reload

Now you run can the backend server.

# Usage
Open your browser and navigate to http://localhost:8000 to access the application.
navigate the http://localhost:8000/docs  you can see your endpoints.




## TraveApp Project Frontend

# How to run

Navigate to Project Directory: Open your terminal or command prompt and navigate to the directory where our Python project located.
  type: cd Frontend
 
 Then 

 1) install libraries using this code : npm i or npm install

 2) run the project using this code : npm run dev

# Login Page
![Screenshot (968)](https://github.com/user-attachments/assets/4df3b01b-08a8-4895-bdfd-b1b9cfb5b672)

# Signup page
![Screenshot (978)](https://github.com/user-attachments/assets/9e755a28-051f-4513-a28d-7f79413cb8a1)

# Home page
![Screenshot (972)](https://github.com/user-attachments/assets/780da4c4-0c3a-4078-9a00-e9e95149dad1)

# Visa Processsing Home page
![Screenshot (973)](https://github.com/user-attachments/assets/2e53083a-6c29-47e7-af3e-c20f0e12d29c)

# Pament Successfull page
![Screenshot (974)](https://github.com/user-attachments/assets/47049da8-5c32-4937-827d-bf1ec00c7c40)

# Admin dashboard page
![Screenshot (969)](https://github.com/user-attachments/assets/88520722-7b01-4250-b38f-60584e83ae01)

# visa approvel section
![Screenshot (971)](https://github.com/user-attachments/assets/c1400303-5960-4152-99d0-00f50da86b99)

# Applicant details windo
![Screenshot (977)](https://github.com/user-attachments/assets/6398303f-1c4a-40a7-b465-a160f64890b1)
