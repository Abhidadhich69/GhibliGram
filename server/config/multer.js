import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

// Configure Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "artworks", // Cloudinary folder name
    allowed_formats: ["jpeg", "jpg", "png"], // Allowed formats
  },
});

const upload = multer({ storage });

export default upload;
