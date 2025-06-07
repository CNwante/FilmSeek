import React from "react";
import clsx from "clsx";
import logo from "../assets/logo.png";

interface HeaderProps {
  onBackToSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBackToSearch }) => {
  const fontSizes = "text-lg sm:text-xl md:text-2xl";

  return (
    <header className="bg-white shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 p-4">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="FilmSeek logo"
            className="w-10 sm:w-12 md:w-14"
          />
          <span
            className={clsx(
              fontSizes,
              "font-extrabold tracking-tight text-black"
            )}
          >
            Film<span className="text-red-600">Seek</span>
          </span>
        </div>

        {/* Navigation Button */}
        <nav>
          <button
            onClick={onBackToSearch}
            className={clsx(
              fontSizes,
              "text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded transition"
            )}
          >
            Search Movies
          </button>
        </nav>
      </div>
    </header>
  );
};
