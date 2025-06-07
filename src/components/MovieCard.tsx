import React from "react";
import clsx from "clsx";

export interface MovieCardProps {
  posterUrl: string;
  title: string;
  genres: string[];
  release_date: string;
  overview: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  posterUrl,
  title,
  genres,
  release_date,
  overview,
}) => {
  const paragraphStyles = "text-sm text-gray-500 mb-1";

  const truncateText = (text: string): string => {
    const maxLength = 150;
    return text.length > maxLength
      ? text.slice(0, maxLength).concat("...")
      : text;
  };

  return (
    <div className="bg-red-50 rounded-md shadow-md overflow-hidden flex flex-col h-full max-w-[350px] hover:shadow-red-500 cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105">
      <img
        src={posterUrl}
        alt={`Movie poster`}
        className="w-full h-96 object-cover p-4 rounded-3xl"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {genres && genres.length > 0 && (
          <p className={clsx(paragraphStyles)}>Genre: {genres.join(", ")}</p>
        )}

        <p className={clsx(paragraphStyles)}>Release Date: {release_date}</p>

        <p className="text-sm text-gray-900 flex-grow text-[1rem] mt-1">
          {truncateText(overview)}
        </p>
      </div>
    </div>
  );
};
