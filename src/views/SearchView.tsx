import React from "react";
import { SearchBar } from "../components/SearchBar";
import { FilterPanel } from "../components/FilterPanel";

interface SearchViewProps {
  genres: string[];
  years: number[];
  selectedGenre: string;
  selectedYear: number | "";
  onGenreChange: (genre: string) => void;
  onYearChange: (year: number | "") => void;
  onSearch: (query: string) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({
  genres,
  years,
  selectedGenre,
  selectedYear,
  onGenreChange,
  onYearChange,
  onSearch,
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
    <FilterPanel
      genres={genres}
      years={years}
      selectedGenre={selectedGenre}
      selectedYear={selectedYear}
      onGenreChange={onGenreChange}
      onYearChange={onYearChange}
    />
  </div>
);
