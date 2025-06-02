import React from "react";
import clsx from "clsx";
import logo from "../assets/logo.png";

interface HeaderProps {
  onBackToSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBackToSearch }) => {
  const fontSizes = "text-xl sm:text-2xl md:text-3xl";

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="FilmSeek logo" className="w-14" />
        <span className={clsx(fontSizes, "font-bold text-red-600")}>
          FilmSeek
        </span>
      </div>
      <nav className="space-x-4">
        <button
          onClick={onBackToSearch}
          className={clsx(
            fontSizes,
            "text-gray-600 hover:text-blue-500 cursor-pointer"
          )}
        >
          Search Movies 🔍
        </button>
      </nav>
    </header>
  );
};
