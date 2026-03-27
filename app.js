const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const app = express();

// ── Middleware ──────────────────────────────────────────────
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ── Routes ──────────────────────────────────────────────────
const authRoutes     = require("./routes/auth");
const noteRoutes     = require("./routes/notes");
const passwordRoutes = require("./routes/passwords");

app.use("/api/auth",      authRoutes);
app.use("/api/notes",     noteRoutes);
app.use("/api/passwords", passwordRoutes);

// ── Serve frontend ──────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "dashboard.html"));
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "notes.html"));
});
app.get("/passwords", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "passwords.html"));
});

// ── 404 Handler ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ── Global Error Handler ────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

// ── Database + Server ───────────────────────────────────────
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/secretnotes";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
