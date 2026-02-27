# Job Portal & Networking Platform – Full Stack Web Application

> A full-featured full-stack Job Portal and Networking platform built using React and Django REST Framework. The platform includes job posting, applications, user connections, private & group messaging, notifications, and token-based authentication. Deployed in production environment.

---

## 🚀 Live Demo

Frontend: https://jobportal-frontend-1-4q5e.onrender.com  
Backend API: https://your-backend-url.onrender.com  

---

## 📌 Overview

This is a full-stack web application that combines job portal functionality with social networking features.

Employers can post and manage job listings, while job seekers can browse and apply for jobs. The platform also supports private messaging, group chats, user connections, and notifications.

The backend is designed using Django REST Framework with ViewSets and Routers to provide a structured and scalable RESTful API. Authentication is handled using token-based authentication for secure API communication.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- Bootstrap / CSS

### Backend
- Django
- Django REST Framework
- DRF ViewSets & Routers
- Token Authentication
- SQLite
- RESTful API Architecture

---

## 🔐 Authentication & Authorization

- User Registration
- Login with Token Authentication
- Token-protected API endpoints
- Role-based access control
- Secure communication between frontend and backend

---

## ✨ Core Features

### 👤 User Management
- User registration & profile management
- Role-based users (Employer / Job Seeker)

### 💼 Job Portal Features
- Create job postings
- Update/Delete job postings
- Browse all job listings
- Apply for jobs
- View job applications

### 🤝 Networking Features
- User connections system
- Manage connection requests

### 💬 Messaging System
- Private one-to-one chat
- Group chat functionality
- Group member management
- Message storage using REST APIs
- Token-protected chat endpoints

### 🔔 Notifications
- Notification system for user interactions
- API-based notification retrieval

---

## 📡 API Endpoints

### 🔐 Authentication
- POST /api/token-auth/

### 👤 Users & Profiles
- /api/users/
- /api/user-profiles/

### 💼 Job Management
- /api/job-posts/
- /api/applications/

### 🤝 Connections
- /api/connections/

### 💬 Chats
- /api/chats/
- /api/group-chats/
- /api/group-members/
- /api/group-messages/

### 🔔 Notifications
- /api/notifications/

---

## ⚙️ Installation & Setup

### Backend Setup

```bash
git clone https://github.com/akhil429359/jobportal-frontend.git
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### Frontend Setup
```bash
git clone https://github.com/akhil429359/jobportal-frontend.git
cd frontend
npm install
npm run dev
