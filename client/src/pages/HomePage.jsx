import React, { useEffect, useState } from "react";
import ArtworkCard from "../components/ArtworkCard.jsx";
import api from "../services/api.jsx";

const HomePage = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    api.get("/api/artworks").then((res) => setArtworks(res.data));
  }, []);

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork._id} artwork={artwork} />
      ))}
    </div>
  );
};

export default HomePage;