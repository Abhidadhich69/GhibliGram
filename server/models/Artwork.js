import mongoose from "mongoose";

const ArtworkSchema = new mongoose.Schema(
    {
        imageUrl: { type: String, required: true },
        instaId: { type: String, required: true },
        views: { type: Number, default: 0 },
    },
    { timestamps: true }
);

const Artwork = mongoose.model("Artwork", ArtworkSchema);

export default Artwork;
