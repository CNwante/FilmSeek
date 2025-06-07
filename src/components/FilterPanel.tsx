import React from "react";
import clsx from "clsx";

interface FilterPanelProps {
  genres: string[];
  years: number[];
  selectedGenre: string;
  selectedYear: number | "";
  onGenreChange: (genre: string) => void;
  onYearChange: (year: number | "") => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  genres,
  years,
  selectedGenre,
  selectedYear,
  onGenreChange,
  onYearChange,
}) => {
  const selectStyle = "w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500";

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
      {/*==== Genre Filter ====*/}
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className={clsx(selectStyle)}
      >
        <option value="" disabled>
          Select Genre
        </option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/*==== Year Filter ====*/}
      <select
        value={selectedYear}
        onChange={(e) =>
          onYearChange(e.target.value ? parseInt(e.target.value) : "")
        }
        className={clsx(selectStyle)}
      >
        <option value="">Select Release Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};
