import React from "react";

const ArtworkCard = ({ artwork }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={artwork.imageUrl} alt="Artwork" className="w-full h-48 object-cover" />
      <p className="text-gray-700 mt-2">Uploaded by: {artwork.instaId}</p>
    </div>
  );
};

export default ArtworkCard;
