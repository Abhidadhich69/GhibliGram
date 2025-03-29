import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUpload } from "react-icons/fa";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-lg text-white px-4 py-3 flex items-center justify-between z-50 shadow-lg border-b border-gray-700">
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-blue-400">
        GhibliGram
      </h1>

      {/* 🔍 Search Bar */}
      <div
        className={`relative flex items-center transition-all duration-300 ease-in-out ${
          isFocused ? "w-64 sm:w-80" : "w-40 sm:w-56"
        }`}
      >
        <FaSearch className="absolute left-3 text-gray-400 text-sm" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search usernames..."
          className="pl-10 pr-4 py-2 w-full bg-gray-800 text-white rounded-full outline-none border border-gray-600 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>

      {/* 📤 Upload Button */}
      <button
        onClick={() => navigate("/upload")}
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium shadow-md transition-transform transform hover:scale-105 active:scale-95"
      >
        <FaUpload className="text-white" />
        <span className="hidden sm:inline">Upload</span>
      </button>
    </header>
  );
};

export default Header;
