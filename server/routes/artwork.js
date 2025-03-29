import express from "express";
import upload from "../config/multer.js";
import { uploadImage, getAllImages } from "../controllers/artworkController.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
router.get("/", getAllImages);

export default router;
