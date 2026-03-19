# 🚀 Lead Management System (Full Stack)

A simple full-stack project using:
Node.js + Express + MongoDB (Backend)
Next.js + TypeScript + Tailwind (Frontend)

---

# 📁 Project Structure

lead-management-system/
├── backend/
└── frontend/

---

# ⚙️ HOW TO RUN PROJECT (STEP BY STEP)

---

## 1️⃣ START BACKEND

### 📌 Step 1: Open backend folder
cd backend

### 📌 Step 2: Install dependencies
npm install

### 📌 Step 3: Create .env file
PORT=8000
MONGO_URI=your_mongodb_connection_string

### 📌 Step 4: Run backend server
npm run dev

👉 Backend will run on:
http://localhost:8000

---

## 2️⃣ START FRONTEND

### 📌 Step 1: Open frontend folder
cd frontend

### 📌 Step 2: Install dependencies
npm install

### 📌 Step 3: Create .env.local file
NEXT_PUBLIC_API_URL=http://localhost:8000/api

### 📌 Step 4: Run frontend
npm run dev

👉 Frontend will run on:
http://localhost:3000

---

# 📡 API ENDPOINTS

## ➕ Create Lead
POST /api/leads

## 📄 Get All Leads
GET /api/leads

---

# 📊 DATABASE (MongoDB Schema)

- name (string, required)
- email (string, required, unique)
- status (New | Engaged | Proposal Sent | Closed-Won | Closed-Lost)
- createdAt (timestamp)

---

# ✨ FEATURES

- Add new leads
- View all leads
- Clean UI dashboard
- Real-time updates
- Full-stack API integration
- MongoDB database

---

# 🧠 TECH STACK

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

## Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Axios

