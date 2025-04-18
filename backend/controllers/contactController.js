import dotenv from "dotenv";
dotenv.config();

import transporter from "../config/mailConfig.js";
import Message from "../models/Message.js";

export const sendMessage = async (req , res) => {

    const { name, email, subject , message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    if (/[\r\n]/.test(subject)) {
        return res.status(400).json({ success: false, message: "Invalid subject line." });
    }    

    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0); 
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1); 
        
        const messageCount = await Message.countDocuments({
            email,
            createdAt: { $gte: today, $lt: tomorrow },
        });

        if (messageCount >= 3) {
            return res.status(429).json({ success: false, message: "Daily message limit reached (3 per day)." });
        }

        // Store in MongoDB
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();

        // Send Email
        let mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: subject.slice(0, 78),
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Message sent & stored successfully!" });

    } catch (error) {
        console.error("Error in contactController.js :", error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
};
