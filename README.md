# Node Auth Practice Project 🔐

This is a **Node.js authentication practice project** created to understand backend concepts like authentication, authorization, JWT, middleware, and MongoDB.

The project is built only for **learning and practice purposes**.

---

## 🚀 Features
- User Signup
- User Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes
- Role-based authorization (if implemented)
- MongoDB integration using Mongoose

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

---

## 📁 Project Structure
node-auth/
│
├── config/ # Database configuration
├── controllers/ # Business logic (signup, signin)
├── middleware/ # Auth & role middleware
├── models/ # Mongoose schemas
├── routes/ # API routes
├── .env.example # Environment variables example
├── app.js # Main app file
├── package.json
└── README.md

## 2️⃣ Install dependencies
npm install

## 3️⃣ Setup environment variables

Create a .env file in the root directory and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


⚠️ Never push your .env file to GitHub.

## 4️⃣ Run the project
npm start


Server will start at:

http://localhost:3000

## 📌 API Endpoints
Method	Endpoint	Description
POST	/signup	Register a new user
POST	/signin	Login user
GET	/me	Protected route (requires token)
🔐 Authentication Flow (Simple Explanation)

User signs up or logs in

Server generates a JWT

Token is sent to client

Client sends token in headers

Middleware verifies token

Access is granted or denied

## 📚 Purpose of This Project
This project is created to:
Learn Node.js backend development
Understand REST APIs
Practice authentication & authorization
Learn JWT and middleware concepts

## 👤 Author 
Ahmad Ayaz
GitHub: https://github.com/ahmadayaz2022
