# 🔐 SecretNotes v2.0

A modern, full-stack **password manager and secret notes vault** built with Node.js, Express, MongoDB, and a clean dark-themed frontend.

---

## 📁 Project Structure

```
SecretNotes/
├── app.js                     ← Main server entry point
├── package.json
├── .env.example               ← Copy this to .env
├── .gitignore
│
├── routes/
│   ├── auth.js
│   ├── notes.js
│   └── passwords.js
│
├── controllers/
│   ├── authController.js
│   ├── notesController.js
│   └── passwordController.js
│
├── models/
│   ├── User.js
│   ├── Note.js
│   └── Password.js
│
├── middlewares/
│   └── auth.js
│
└── public/                    ← Frontend (HTML + CSS + JS)
    ├── index.html             ← Login / Register page
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── pages/
        ├── dashboard.html
        ├── notes.html
        └── passwords.html
```

---

## 🚀 How to Run

### Step 1 — Install required software (one time only)
- **Node.js**: https://nodejs.org  (download LTS version)
- **Git**: https://git-scm.com/download/win

### Step 2 — Clone and setup
```bash
git clone https://github.com/Rohan-1707/Secret-Notes-App.git
cd Secret-Notes-App
npm install --legacy-peer-deps
```

### Step 3 — Configure environment
```bash
copy .env.example .env
```
Open `.env` with Notepad and fill in:
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/secretnotes
JWT_SECRET=any_long_random_string_here
PORT=8000
```

### Step 4 — Run
```bash
npm start
```
Open browser → **http://localhost:8000**

---

## 🌟 Features

| Feature | Description |
|---------|-------------|
| 🔐 Auth | JWT login/register with bcrypt password hashing |
| 📝 Notes | Create, edit, delete, pin, tag and color-code notes |
| 🔑 Passwords | Save passwords by category with show/hide/copy |
| ⚡ Generator | Built-in strong password generator |
| 🎨 Modern UI | Dark theme, responsive, toast notifications |
| 🔍 Search | Real-time search across notes and passwords |

---

## 📡 API Endpoints

### Auth
| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/auth/register | Create account |
| POST | /api/auth/login | Login |
| GET  | /api/auth/logout | Logout |
| GET  | /api/auth/me | Get profile |

### Notes (requires login)
| Method | URL | Description |
|--------|-----|-------------|
| GET    | /api/notes | Get all notes |
| POST   | /api/notes | Create note |
| PUT    | /api/notes/:id | Update note |
| DELETE | /api/notes/:id | Delete note |

### Passwords (requires login)
| Method | URL | Description |
|--------|-----|-------------|
| GET    | /api/passwords | Get all passwords |
| POST   | /api/passwords | Save password |
| PUT    | /api/passwords/:id | Update password |
| DELETE | /api/passwords/:id | Delete password |
| GET    | /api/passwords/generate | Generate strong password |

---

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Auth**: JWT + bcryptjs
- **Frontend**: Vanilla HTML/CSS/JS (dark theme)
- **Dev tool**: Nodemon

---

*Final Year Project — Rohan*
