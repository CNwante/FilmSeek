const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export type Genre = {
  id: number;
  name: string;
};

export const getGenres = async (): Promise<Genre[]> => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.genres;
};

export const fetchMovies = async (
  query: string,
  selectedGenre: string,
  selectedYear: number | "",
  genres: Genre[]
): Promise<any[]> => {
  const selectedGenreId = genres.find((g) => g.name === selectedGenre)?.id;

  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    include_adult: "false",
  });

  let results: any[] = [];

  if (query) {
    const url = `${BASE_URL}/search/movie`;
    params.append("query", query);

    const response = await fetch(`${url}?${params.toString()}`);
    const data = await response.json();
    results = data.results || [];

    // Client-side filtering
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
    const url = `${BASE_URL}/discover/movie`;
    if (selectedYear)
      params.append("primary_release_year", selectedYear.toString());
    if (selectedGenreId)
      params.append("with_genres", selectedGenreId.toString());
    params.append("sort_by", "popularity.desc");

    const response = await fetch(`${url}?${params.toString()}`);
    const data = await response.json();
    results = data.results || [];
  }

  return results.map((movie: any) => ({
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
};
