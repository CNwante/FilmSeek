import React, { useEffect, useState } from "react";
import { SearchView } from "../views/SearchView";
import { ResultView } from "../views/ResultView";
import { getGenres, fetchMovies } from "../services/moviApi";
import type { Genre } from "../services/moviApi";

export const Home: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "">("");
  const [view, setView] = useState<"search" | "result">("search");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadGenres = async () => {
    try {
      const genreList = await getGenres();
      setGenres(genreList);
    } catch (err) {
      console.error("Failed to load genres:", err);
    }
  };

  const loadMovies = async () => {
    if (view !== "result") return;
    setLoading(true);
    try {
      const movieList = await fetchMovies(query, selectedGenre, selectedYear, genres);
      setMovies(movieList);
    } catch (err) {
      console.error("Failed to load movies:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery: string) => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery === "") {
      alert("Please enter a movie name to search.");
      return;
    }

    setQuery(trimmedQuery);
    setView("result");
  };

  const handleDiscover = () => {
    setQuery("");
    setView("result");
  };

  useEffect(() => {
    loadGenres();
    const currentYear = new Date().getFullYear();
    setYears(Array.from({ length: 15 }, (_, i) => currentYear - i));
  }, []);

  useEffect(() => {
    loadMovies();
  }, [view, query, selectedGenre, selectedYear]);

  return (
    <div className="bg-gray-100">
      {view === "search" && (
        <SearchView onSearch={handleSearch} onDiscover={handleDiscover} />
      )}

      {view === "result" && (
        <ResultView
          genres={genres.map((g) => g.name)}
          years={years}
          selectedGenre={selectedGenre}
          selectedYear={selectedYear}
          onGenreChange={setSelectedGenre}
          onYearChange={setSelectedYear}
          onBackToSearch={() => setView("search")}
          movies={movies}
          loading={loading}
        />
      )}
    </div>
  );
};
