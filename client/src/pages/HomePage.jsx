import { useEffect, useState } from "react";
import api from "../services/api.jsx";
import ArtworkCard from "../components/ArtworkCard"; // ✅ Import Component

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uniqueInstaCount, setUniqueInstaCount] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await api.get("/api/artworks"); // Fetch artworks
        setImages(res.data);

        // Extract unique Insta IDs and count them
        const uniqueIds = new Set(res.data.map((art) => art.instaId).filter(Boolean));
        setUniqueInstaCount(uniqueIds.size);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black p-6">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">🎨 Art Gallery</h2>
      <p className="text-gray-400 mb-4">Total Unique Insta IDs: <span className="font-bold text-blue-400">{uniqueInstaCount}</span></p>

      {loading ? (
        <p className="text-gray-400 text-center">Loading images...</p>
      ) : images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4">
          {images.map((artwork) => (
            <ArtworkCard key={artwork._id} artwork={artwork} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center">No artworks uploaded yet.</p>
      )}
    </div>
  );
};

export default HomePage;
