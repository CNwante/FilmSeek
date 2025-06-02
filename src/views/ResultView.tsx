import React from "react";
import { Header } from "../components/Header";
import { FilterPanel } from "../components/FilterPanel";
import { MovieGrid } from "../components/MovieGrid";
import type { MovieCardProps } from "../components/MovieCard";

interface ResultViewProps {
  genres: string[];
  years: number[];
  selectedGenre: string;
  selectedYear: number | "";
  onGenreChange: (genre: string) => void;
  onYearChange: (year: number | "") => void;
  onBackToSearch: () => void;
  movies: MovieCardProps[];
  loading: Boolean;
}

export const ResultView: React.FC<ResultViewProps> = ({
  genres,
  years,
  selectedGenre,
  selectedYear,
  onGenreChange,
  onYearChange,
  onBackToSearch,
  movies,
  loading,
}) => (
  <>
    <Header onBackToSearch={onBackToSearch} />
    <FilterPanel
      genres={genres}
      years={years}
      selectedGenre={selectedGenre}
      selectedYear={selectedYear}
      onGenreChange={onGenreChange}
      onYearChange={onYearChange}
    />
    <MovieGrid movies={movies} loading={loading} />
  </>
);
