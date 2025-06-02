import React from "react";
import { MovieCard } from "./MovieCard";
import type { MovieCardProps } from "./MovieCard";

export interface MovieGridProps {
  movies: MovieCardProps[];
  loading: Boolean;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, loading }) => {
  if (loading)
    return (
      <div className="flex items-center justify-center h-full w-screen mt-[25dvh]">
        <img
          src="src/assets/spinner.webp"
          className="w-16 md:w-20 lg:w-24 bg-gray-200 rounded-full"
          alt="Loading spinner"
        />
      </div>
    );

  if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center h-full w-screen">
        <img
          src="src/assets/not_found.png"
          className="bg-gray-200 rounded-full"
          alt="Loading spinner"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4 p-4">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
};
