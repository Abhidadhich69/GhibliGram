import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import artworkRoutes from "./routes/artwork.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({origin:"https://ghiblimatic.vercel.app"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/artworks", artworkRoutes);

// Connect to database
connectDB();

export default app;
