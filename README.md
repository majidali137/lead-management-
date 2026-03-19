# 🚀 Lead Management System (Full Stack)

A simple full-stack project using:
Node.js + Express + MongoDB (Backend)
Next.js + TypeScript + Tailwind (Frontend)

# 📁 Project Structure

lead-management-system/
├── backend/
└── frontend/

# ⚙️ HOW TO RUN PROJECT

## 1️⃣ BACKEND

cd backend

```bash
npm install
```

Create .env file:
PORT=8000
MONGO_URI=your_mongodb_connection_string

Run backend:

```bash
npm run dev
```

Backend runs on:
http://localhost:8000

---

## 2️⃣ FRONTEND

cd frontend

```bash
npm install
```

Create .env.local file:
NEXT_PUBLIC_API_URL=http://localhost:8000/api

Run frontend:

```bash
npm run dev
```

Frontend runs on:
http://localhost:3000

---

# 📡 API ENDPOINTS

POST /api/leads
GET /api/leads

---

# 📊 DATABASE FIELDS

- name (string)
- email (string, unique)
- status (New | Engaged | Proposal Sent | Closed-Won | Closed-Lost)
- createdAt (timestamp)

---

# ✨ FEATURES

- Add leads
- View leads
- Full API integration
- MongoDB database

---

# 🧠 TECH STACK

Backend:

- Node.js
- Express
- MongoDB
- Mongoose

Frontend:

- Next.js
- TypeScript
- Tailwind CSS
