import React from "react";
import { MovieCard } from "./MovieCard";
import type { MovieCardProps } from "./MovieCard";
import spinner from "../assets/spinner.webp";
import oops from "../assets/oops.jpg";
import TMDB_logo from "../assets/TMDB_logo.svg"

export interface MovieGridProps {
  movies: MovieCardProps[];
  loading: Boolean;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, loading }) => {
  if (loading)
    return (
      <div className="flex items-center justify-center h-full w-screen mt-[25dvh]">
        <img
          src={spinner}
          className="w-16 md:w-20 lg:w-24 bg-gray-200 rounded-full"
          alt="Loading spinner"
        />
      </div>
    );

    if (!movies || movies.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh] px-4">
          <img
            src={oops}
            alt="No movies found"
            className="w-48 md:w-60 mb-6 opacity-80"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
            No movies found
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md">
            We couldn’t find any movies matching your selection. Try changing the genre or year or search again.
          </p>
        </div>
      );
    }


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4 p-4 pb-24">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <footer className="fixed bottom-0 left-0 w-full text-center text-xs text-gray-900 bg-white p-4 shadow-md z-50">
        This product uses the{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          TMDB API
        </a>{" "}
        but is not endorsed or certified by
        <img src={TMDB_logo} alt="TMDB" className="w-44 mt-3.5 m-auto" />
      </footer>
    </>
  );
};
