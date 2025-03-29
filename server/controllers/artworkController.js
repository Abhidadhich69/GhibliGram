import Artwork from "../models/Artwork.js";

export const uploadArtwork = async (req, res) => {
  try {
    const { instaId } = req.body;

    if (!instaId) {
      return res.status(400).json({ message: "instaId is required!" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const newArtwork = new Artwork({
      instaId,
      imageUrl: req.file.path, // Adjust if Cloudinary returns req.file.url
    });

    await newArtwork.save();

    res.status(201).json({ message: "Upload successful", artwork: newArtwork });
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Fetch all artworks
export const getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find().sort({ createdAt: -1 }); // Sort by latest
    res.status(200).json(artworks);
  } catch (error) {
    console.error("Fetching artworks failed:", error);
    res.status(500).json({ error: "Server error" });
  }
};
