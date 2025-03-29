import React from "react";

const ArtworkCard = ({ artwork }) => {
  console.log("Artwork Data:", artwork); // Debugging

  return (
    <div className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-black">
      {/* Clickable Image */}
      <a href={`https://instagram.com/${artwork.instaId}`} target="_blank" rel="noopener noreferrer">
        <img
          src={artwork.imageUrl || "/default-placeholder.jpg"}
          alt="Artwork"
          className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
      </a>

      {/* Watermark (Only if instaId exists) */}
      {artwork.instaId && (
        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-sm px-3 py-1 rounded-lg">
          @{artwork.instaId}
        </div>
      )}

      {/* Card Footer */}
      <div className="p-3 text-center">
        <p className="text-white font-semibold group-hover:text-gray-300 transition-colors duration-300">
          <span className="font-bold">@{artwork.instaId}</span>
        </p>
      </div>
    </div>
  );
};

export default ArtworkCard;
