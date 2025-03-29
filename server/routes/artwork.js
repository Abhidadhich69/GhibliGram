import express from "express";
import upload from "../config/multer.js";
import { uploadArtwork, getArtworks } from "../controllers/artworkController.js";

const router = express.Router();

// ✅ Upload artwork (with image & instaId)
router.post("/upload", upload.single("image"), uploadArtwork);

// ✅ Get all artworks for the gallery
router.get("/", getArtworks);

export default router;
