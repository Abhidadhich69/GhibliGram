import React, { useState } from "react";
import api from "../services/api.jsx";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
    const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [instaId, setInstaId] = useState(""); // ✅ Store instaId from user input
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setMessage(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!instaId.trim()) {
      setMessage({ type: "error", text: "⚠️ Please enter your Instagram ID!" });
      return;
    }

    if (!file) {
      setMessage({ type: "error", text: "⚠️ Please select an image!" });
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("instaId", instaId.trim()); // ✅ Use user-provided instaId

    try {
      setLoading(true);
      const res = await api.post("/api/artworks/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage({ type: "success", text: "✅ Image uploaded successfully!" });
      setFile(null);
      setPreview("");
      setInstaId(""); // ✅ Reset instaId after upload
      setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 1000);
    } catch (error) {
      console.error("Upload failed:", error);
      setMessage({ type: "error", text: "❌ Upload failed! Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-extrabold text-white mb-4 text-center">📤 Upload Image</h2>

      {message && (
        <div
          className={`p-3 rounded-md text-center font-semibold ${
            message.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleUpload} className="flex flex-col space-y-4">
        {/* ✅ Input Field for instaId */}
        <input
          type="text"
          value={instaId}
          onChange={(e) => setInstaId(e.target.value)}
          placeholder="Enter your Instagram ID"
          className="p-2 border rounded-lg w-full text-black"
        />

        <label className="flex items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-800/30 hover:bg-gray-700/50 transition">
          <input type="file" onChange={handleFileChange} className="hidden" />
          {preview ? (
            <img src={preview} alt="Preview" className="h-full w-full object-cover rounded-lg" />
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <span className="text-gray-300">Drag & Drop or Click to Upload</span>
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0L8 12m4-4v12"
                ></path>
              </svg>
            </div>
          )}
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
          }`}
        >
          {loading ? "⏳ Uploading..." : "🚀 Upload Now"}
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
