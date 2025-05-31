import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { FilterPanel } from "../components/FilterPanel";
import { Header } from "../components/Header";
import { MovieGrid } from "../components/MovieGrid";

// Mock data for testing
const movieData = [
  {
    title: "The Last Stand",
    releaseDate: "March 15, 2022",
    genres: ["Action", "Thriller"],
    overview:
      "An ex-cop turns vigilante to save his city from a rising tide of crime and corruption.",
    posterUrl: "https://core-faucet.surge.sh/images/cypter_nft.webp",
  },
  {
    title: "Adventure Awaits",
    releaseDate: "July 22, 2022",
    genres: ["Animation", "Family"],
    overview:
      "Join a group of friends as they embark on a magical journey through unknown lands.",
    posterUrl: "https://core-faucet.surge.sh/images/bento_pro_20.jpg",
  },
  {
    title: "Love in the Air",
    releaseDate: "February 10, 2022",
    genres: ["Romance", "Drama"],
    overview:
      "A heartfelt story about finding love and connection in the most unexpected places.",
    posterUrl: "https://core-faucet.surge.sh/images/rising_sun_1.jpg",
  },
  // ... more movies
];

export const Home: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "">("");
  const [view, setView] = useState<"search" | "result">("search");
  const genres = ["Action", "Comedy", "Drama", "Horror", "Romance"];
  const years = [2022, 2023, 2024, 2025];

  return (
    <>
      {view === "search" && (
        <>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4">
            <header className="flex justify-center items-center flex-col">
              <h1 className="text-6xl font-bold">
                Film<span className="text-red-600">Seek</span>
              </h1>
              <p className="italic text-2xl md:text-3xl my-1 mb-4">
                Search Less, Watch More!
              </p>
            </header>
            <SearchBar
              onSearch={(query) => {
                console.log("Searching:", query);
                setView("result");
              }}
            />
            <FilterPanel
              genres={genres}
              years={years}
              selectedGenre={selectedGenre}
              selectedYear={selectedYear}
              onGenreChange={setSelectedGenre}
              onYearChange={setSelectedYear}
            />
          </div>
        </>
      )}

      {view === "result" && (
        <>
          <Header onBackToSearch={() => setView("search")} />
          <FilterPanel
            genres={genres}
            years={years}
            selectedGenre={selectedGenre}
            selectedYear={selectedYear}
            onGenreChange={setSelectedGenre}
            onYearChange={setSelectedYear}
          />
          <MovieGrid movies={movieData} />
        </>
      )}
    </>
  );
};
