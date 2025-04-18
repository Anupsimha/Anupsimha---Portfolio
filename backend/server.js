import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/dbConfig.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cors({
    origin: process.env.CLIENT_URL || "*", // Example: "https://your-app.onrender.com"
    methods: ["GET", "POST"],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/contact", contactRoutes);

// Serve frontend (React build)
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    connectDB();
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
