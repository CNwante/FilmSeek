import React from "react";
import clsx from "clsx";

export const Header: React.FC = () => {
  const fontSizes = "text-xl sm:text-2xl md:text-3xl";

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="src/assets/logo.png" alt="FilmSeek logo" className="w-14" />
        <span className={clsx(fontSizes, "font-bold text-red-600")}>
          FilmSeek
        </span>
      </div>
      <nav className="space-x-4">
        <span
          className={clsx(
            fontSizes,
            "text-gray-600 hover:text-blue-500 cursor-pointer"
          )}
        >
          Search Movies 🔍
        </span>
      </nav>
    </header>
  );
};
