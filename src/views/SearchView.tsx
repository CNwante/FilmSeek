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
    <header className="flex justify-center items-center flex-col">
      <h1 className="text-6xl font-bold">
        Film<span className="text-red-600">Seek</span>
      </h1>
      <p className="italic text-2xl md:text-3xl my-1 mb-4">
        Search Less, Watch More!
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
        🎲 Discover a Random Movie
      </button>
    </div>
  </div>
);
