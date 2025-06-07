import React from "react";
import { SearchBar } from "../components/SearchBar";

interface SearchViewProps {
  onSearch: (query: string) => void;
  onDiscover: () => void;
}

export const SearchView: React.FC<SearchViewProps> = ({
  onSearch,
  onDiscover,
}) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4">
    <header className="flex justify-center items-center flex-col text-center mb-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans">
        <span className="text-black">Film</span>
        <span className="text-red-600">Seek</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 mt-2">
        Search Less,{" "}
        <span className="italic font-semibold text-black">Watch More!</span>
      </p>
    </header>
    <SearchBar onSearch={onSearch} />
    <div className="mt-6 text-center">
      <p className="text-gray-600 mb-2">
        Not sure what to search for? 🤔 <br />
        Let us surprise you. 👇
      </p>
      <button
        onClick={onDiscover}
        className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full shadow-md hover:bg-yellow-500 transition cursor-pointer"
      >
        🎲 Discover Random Movies
      </button>
    </div>
  </div>
);
