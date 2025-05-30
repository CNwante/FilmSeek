import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="src/assets/logo.png" alt="FilmSeek logo" className="w-14" />
        <span className="text-3xl font-bold text-red-600">FilmSeek</span>
      </div>
      <nav className="space-x-4">
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer text-2xl">
          Search Movies 🔍
        </span>
      </nav>
    </header>
  );
};
