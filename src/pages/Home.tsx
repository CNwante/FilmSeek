import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { FilterPanel } from "../components/FilterPanel";

export const Home: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "">("");
  const genres = ["Action", "Comedy", "Drama", "Horror", "Romance"];
  const years = [2022, 2023, 2024, 2025];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4">
      <header className="flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold">
          Film<span className="text-red-600">Seek</span>
        </h1>
        <p className="italic text-2xl md:text-3xl my-1 mb-4">
          Search Less, Watch More!
        </p>
      </header>
      <SearchBar onSearch={(query) => console.log("Searching:", query)} />
      <FilterPanel
        genres={genres}
        years={years}
        selectedGenre={selectedGenre}
        selectedYear={selectedYear}
        onGenreChange={setSelectedGenre}
        onYearChange={setSelectedYear}
      />
    </div>
  );
};
