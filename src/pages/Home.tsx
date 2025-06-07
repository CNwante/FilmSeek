import React, { useEffect, useState } from "react";
import { SearchView } from "../views/SearchView";
import { ResultView } from "../views/ResultView";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

type Genre = {
  id: number;
  name: string;
};

export const Home: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "">("");
  const [view, setView] = useState<"search" | "result">("search");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getGenres = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setGenres(data.genres); // Full genre objects: { id, name }
    } catch (err) {
      console.error("Failed to fetch genres:", err);
    }
  };

  const fetchMovies = async () => {
    if (view !== "result") return;
    setLoading(true);

    const selectedGenreId = genres.find((g) => g.name === selectedGenre)?.id;

    let url = "";
    let params = new URLSearchParams({
      api_key: API_KEY,
      language: "en-US",
      include_adult: "false",
    });

    try {
      let results: any[] = [];

      if (query) {
        // Use search endpoint
        url = `${BASE_URL}/search/movie`;
        params.append("query", query);

        const response = await fetch(`${url}?${params.toString()}`);
        const data = await response.json();
        results = data.results || [];

        // Apply client-side filters
        if (selectedGenreId) {
          results = results.filter((movie: any) =>
            movie.genre_ids.includes(selectedGenreId)
          );
        }

        if (selectedYear) {
          results = results.filter((movie: any) =>
            movie.release_date?.startsWith(selectedYear.toString())
          );
        }
      } else {
        // Use discover endpoint with filters
        url = `${BASE_URL}/discover/movie`;
        if (selectedYear)
          params.append("primary_release_year", selectedYear.toString());
        if (selectedGenreId)
          params.append("with_genres", selectedGenreId.toString());
        params.append("sort_by", "popularity.desc");

        const response = await fetch(`${url}?${params.toString()}`);
        const data = await response.json();
        results = data.results || [];
      }

      // Transform to MovieCardProps format
      const mappedMovies = results.map((movie: any) => ({
        posterUrl: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://placehold.co/500x750?text=No+Image",
        title: movie.title,
        genres: movie.genre_ids.map(
          (id: number) => genres.find((g) => g.id === id)?.name || "Unknown"
        ),
        release_date: movie.release_date,
        overview: movie.overview,
      }));

      setMovies(mappedMovies);
    } catch (err) {
      console.error("Failed to fetch movies:", err);
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

    setQuery(searchQuery);
    setView("result");
  };

  const handleDiscover = () => {
    setQuery("");
    setView("result");
  }

  useEffect(() => {
    getGenres();

    const currentYear = new Date().getFullYear();
    setYears(Array.from({ length: 15 }, (_, i) => currentYear - i));
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [view, query, selectedGenre, selectedYear]);

  return (
    <>
      {view === "search" && (
        <SearchView
          onSearch={handleSearch}
          onDiscover={handleDiscover}
        />
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
    </>
  );
};
