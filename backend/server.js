import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/dbConfig.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = 3000 || process.env.PORT;

const __dirname = path.resolve();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/contact", contactRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*" , (req , res) => {
    res.sendFile(path.join(__dirname, "frontend" , "dist" , "index.html"));
})

// Start server
app.listen(PORT, () => {
    connectDB();
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
