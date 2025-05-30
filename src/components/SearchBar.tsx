import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="w-full max-w-2xl px-6 py-3 rounded-full shadow-md border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
      />
    </form>
  );
};
