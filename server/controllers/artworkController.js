import Artwork from "../models/Artwork.js";

// Upload image
export const uploadImage = async (req, res) => {
    try {
        const { instaId } = req.body;
        const imageUrl = `/uploads/${req.file.filename}`;

        const newArtwork = new Artwork({ imageUrl, instaId });
        await newArtwork.save();

        res.status(201).json({ message: "Image uploaded successfully!", artwork: newArtwork });
    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({ error: "Error uploading image" });
    }
};

// Get all images
export const getAllImages = async (req, res) => {
    try {
        const artworks = await Artwork.find();
        res.status(200).json(artworks);
    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({ error: "Error fetching images" });
    }
};
