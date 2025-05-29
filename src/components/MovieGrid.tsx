import React from "react";
import { MovieCard } from "./MovieCard";
import type { MovieCardProps } from "./MovieCard";

interface MovieGridProps {
  movies: MovieCardProps[];
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-gray-500 text-center py-8">No movies found</div>
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
