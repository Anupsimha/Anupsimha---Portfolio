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

const allowedOrigins = [
    "http://localhost:5173", // dev
    "https://anupsimha-portfolio-frontend.onrender.com" // production
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        } else {
        callback(new Error("CORS Not Allowed"));
        }
    },
    methods: ["GET", "POST"],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/contact", contactRoutes);

// Start the server
app.listen(PORT, () => {
    connectDB();
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
