# TraveApp Project

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

Navigate to Project Directory: Open your terminal or command prompt and navigate to the directory where your Python project and virtual environment are located.

1) first you need to create virtual environment using this code : python -m venv .venv

2) Activate Virtual Environment using: .venv\Scripts\activate      For Windows .\venv\bin\activate # For Linux/Mac

3) You ned to install requirements.txt file using this code : pip install -r requirements.txt

4) run the program using: uvicorn app.main:app --reload

Now you run the backend server.

# Usage
Open your browser and navigate to http://localhost:8000 to access the application.
navigate the http://localhost:8000/docs  you can see your endpoints.