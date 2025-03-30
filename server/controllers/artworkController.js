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
    const heightOptions = [500, 400, 450, 350, 425, 375];

    const artworks = await Artwork.find().sort({ createdAt: -1 });

    // Format the response to match the required structure
    const formattedArtworks = artworks.map((artwork, index) => ({
      id: index + 1, // Assign a unique sequential ID
      image: artwork.image, // Fetch image from the database
      height: heightOptions[Math.floor(Math.random() * heightOptions.length)], // Random height
      insta: artwork.insta || "unknown", // Dynamic insta, fallback to "unknown" if missing
    }));

    res.status(200).json(formattedArtworks);
  } catch (error) {
    console.error("Fetching artworks failed:", error);
    res.status(500).json({ error: "Server error" });
  }
};
