import React, { useState } from "react";
import api from "../services/api.jsx";

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await api.post("/api/artworks/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Upload Success:", res.data);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload image.");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Upload Image</h2>
      <form onSubmit={handleUpload} className="flex flex-col space-y-4">
        <input type="file" onChange={handleFileChange} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
