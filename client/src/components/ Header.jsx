import React from "react";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white px-4 py-3 flex items-center justify-between z-50 shadow-md">
      {/* Logo with icon */}
      <div className="flex items-center space-x-2">
        <h1 className="text-lg sm:text-xl font-semibold">GhibliGram</h1>
      </div>

      {/* Upload Button (Responsive size) */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
        Upload
      </button>
    </header>
  );
};

export default Header;
