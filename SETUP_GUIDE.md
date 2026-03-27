# 📋 SETUP & GITHUB GUIDE — Secret Notes App

## ⚡ Quick Start (Run Locally in 5 Steps)

---

### Step 1 — Install Node.js
Download and install from: https://nodejs.org/
Choose the **LTS version** (recommended).

Verify installation:
```
node --version
npm --version
```

---

### Step 2 — Get MongoDB Ready

**Option A: MongoDB Atlas (Free Cloud — Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a free cluster (M0)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like):
   `mongodb+srv://username:password@cluster.mongodb.net/...`

**Option B: Local MongoDB**
1. Download from https://www.mongodb.com/try/download/community
2. Install and start the service
3. Your URI will be: `mongodb://localhost:27017/secretnotes`

---

### Step 3 — Set Up the Project

```bash
# 1. Go into the project folder
cd Secret-Notes-App

# 2. Install all packages
npm install

# 3. Create your .env file
copy .env.example .env        # Windows
cp .env.example .env          # Mac / Linux

# 4. Open .env in a text editor and fill in:
#    - MONGO_URI (from Step 2)
#    - JWT_SECRET (any long random string)
#    - EMAIL_USER & EMAIL_PASS (optional, for email features)
```

---

### Step 4 — Run the Server

```bash
npm start
```

You should see:
```
Server running on port 8000
MongoDB connected ✔
```

Open your browser or Postman and test:
```
http://localhost:8000
```

---

### Step 5 — Test the API

Use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) (VS Code extension):

1. Register a user:
   - POST `http://localhost:8000/api/signup`
   - Body (JSON): `{ "name": "Rohan", "email": "rohan@email.com", "password": "Test@123" }`

2. Login:
   - POST `http://localhost:8000/api/signin`
   - Body (JSON): `{ "email": "rohan@email.com", "password": "Test@123" }`
   - Copy the `token` from the response

3. Use protected routes:
   - Add header: `Authorization: Bearer <your_token_here>`

---

## 📤 Upload to GitHub (Step-by-Step)

### If GitHub repo already exists (just push changes):

```bash
# Step 1: Check what files changed
git status

# Step 2: Stage all changes
git add .

# Step 3: Write a commit message
git commit -m "feat: add new features and update project"

# Step 4: Push to GitHub
git push origin main
```

---

### If starting fresh (first-time upload):

```bash
# Step 1: Initialize git in your project folder
git init

# Step 2: Add all files
git add .

# Step 3: First commit
git commit -m "initial commit: Secret Notes App"

# Step 4: Connect to your GitHub repo
git remote add origin https://github.com/Rohan-1707/Secret-Notes-App.git

# Step 5: Set branch name and push
git branch -M main
git push -u origin main
```

---

## ⚠️ IMPORTANT — Fix the .env Security Issue

Your `.env` file is currently visible on GitHub. This exposes your database password and secret keys!

**Fix it immediately:**

```bash
# 1. Remove .env from git tracking
git rm --cached .env

# 2. Make sure .gitignore has .env listed (already done if you replaced it)

# 3. Commit the fix
git add .gitignore
git commit -m "security: remove .env from tracking"

# 4. Push the fix
git push origin main
```

Then go to GitHub repo → Settings → Secrets → change your passwords on all services!

---

## 🚀 Deploy for Free (Render.com)

1. Push code to GitHub (see above)
2. Go to https://render.com → Sign up free
3. New → Web Service → Connect GitHub → Select your repo
4. Fill in:
   - **Name:** secret-notes-app
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Under **Environment Variables**, add all your `.env` values
6. Click **Create Web Service**
7. Wait ~2 minutes → Your app is live! 🎉

Your public URL will be:
```
https://secret-notes-app.onrender.com
```

---

## 🐛 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `Cannot connect to MongoDB` | Check MONGO_URI in .env, whitelist your IP in Atlas |
| `JWT malformed` | Make sure you're sending `Bearer <token>` in headers |
| `nodemon: command not found` | Run `npm install -g nodemon` |
| `Port already in use` | Change PORT in .env to 8001 or kill the process |
| `Module not found` | Run `npm install` again |

---

*Good luck with your final year project, Rohan! 🚀*
