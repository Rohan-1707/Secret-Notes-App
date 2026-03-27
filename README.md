# 🔐 Secret Notes App

<div align="center">

![Secret Notes](https://img.shields.io/badge/Secret%20Notes-Password%20Vault-blueviolet?style=for-the-badge&logo=shield&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge&logo=jsonwebtokens)
![Firebase](https://img.shields.io/badge/Deploy-Firebase-yellow?style=for-the-badge&logo=firebase)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

**A secure, full-featured password manager and digital vault.**  
Store passwords, manage confidential notes, and keep your data safe — all in one place.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Setup](#-getting-started) • [API Docs](#-api-reference) • [Deploy](#-deployment)

</div>

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🔑 **Password Manager** | Securely store and retrieve all your passwords |
| 📝 **Secret Notes** | Encrypted personal notes that only you can access |
| 📁 **File Vault** | Upload and store confidential files securely |
| 🔐 **JWT Authentication** | Stateless, secure token-based authentication |
| 🔒 **bcrypt Encryption** | Industry-standard password hashing |
| 📧 **Email Notifications** | Get alerts via nodemailer integration |
| 🔧 **Password Generator** | Auto-generate strong, random passwords |
| 🌐 **CORS-Enabled REST API** | Ready to integrate with any frontend |

---

## 🛠 Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Auth:** JWT (`express-jwt` + `jsonwebtoken`)
- **Security:** bcryptjs, cookie-parser
- **File Uploads:** Formidable
- **Email:** Nodemailer
- **Dev Tool:** Nodemon

### Infrastructure
- **Deployment:** Firebase Hosting / Cloud Functions
- **Environment:** dotenv

---

## 📁 Project Structure

```
Secret-Notes-App/
├── app.js                  # Main Express application entry point
├── .env.example            # Environment variable template (copy → .env)
├── .gitignore              # Git ignore rules (keeps .env safe!)
├── firebase.json           # Firebase hosting/functions config
├── .firebaserc             # Firebase project alias
├── package.json            # Dependencies & scripts
└── README.md               # You are here 📍
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local install or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier)
- [Git](https://git-scm.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rohan-1707/Secret-Notes-App.git
cd Secret-Notes-App
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

```bash
# Copy the template
cp .env.example .env
```

Now open `.env` and fill in your values:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/secretnotes

# JWT Secret (use a long random string)
JWT_SECRET=your_super_secret_jwt_key_here

# Email Configuration (for nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# App Port
PORT=8000
```

> ⚠️ **Never commit your `.env` file!** It is already listed in `.gitignore`.

---

### 4️⃣ Run the App

**Development mode** (with auto-reload):
```bash
npm start
```

The server will start at:
```
http://localhost:8000
```

---

## 📡 API Reference

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/api/signup` | Register a new user | ❌ |
| `POST` | `/api/signin` | Login and receive JWT token | ❌ |
| `GET` | `/api/signout` | Logout / clear session | ✅ |

### Notes / Vault Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/api/notes` | Get all notes for user | ✅ |
| `POST` | `/api/notes/create` | Create a new note | ✅ |
| `PUT` | `/api/notes/:noteId` | Update a note | ✅ |
| `DELETE` | `/api/notes/:noteId` | Delete a note | ✅ |

### Password Manager Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/api/passwords` | Get all saved passwords | ✅ |
| `POST` | `/api/passwords/save` | Save a new password entry | ✅ |
| `DELETE` | `/api/passwords/:id` | Delete a password entry | ✅ |
| `GET` | `/api/generate-password` | Generate a strong password | ✅ |

> 🔐 **Protected routes** require an `Authorization: Bearer <token>` header.

---

## 🌍 Deployment

### Deploy to Firebase

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize (if first time):**
   ```bash
   firebase init
   ```

4. **Deploy:**
   ```bash
   firebase deploy
   ```

### Deploy to Render (Free Alternative)

1. Push your code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo
4. Set Build Command: `npm install`
5. Set Start Command: `npm start`
6. Add all `.env` variables under **Environment**
7. Click **Deploy** 🚀

---

## 🔒 Security Best Practices

- ✅ `.env` file is in `.gitignore` — secrets stay local
- ✅ Passwords are hashed using **bcryptjs** (never stored in plain text)
- ✅ JWT tokens expire and are validated on every request
- ✅ Input is validated with **express-validator**
- ⚠️ Always use **HTTPS** in production
- ⚠️ Rotate your `JWT_SECRET` periodically

---

## 📤 Uploading to GitHub (Step-by-Step)

If you've made local changes and want to push to GitHub:

```bash
# Check what changed
git status

# Stage all your changes
git add .

# Commit with a message
git commit -m "feat: update project with new features"

# Push to GitHub
git push origin main
```

> **First time pushing a new repo?**
> ```bash
> git init
> git remote add origin https://github.com/Rohan-1707/Secret-Notes-App.git
> git branch -M main
> git push -u origin main
> ```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Rohan** — Final Year Project  
[![GitHub](https://img.shields.io/badge/GitHub-Rohan--1707-black?logo=github)](https://github.com/Rohan-1707)

---

<div align="center">
⭐ If this project helped you, please give it a star on GitHub! ⭐
</div>
