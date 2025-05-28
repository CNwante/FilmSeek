import React from "react";

interface MovieCardProps {
  posterUrl: string;
  title: string;
  genres: string[];
  releaseDate: string;
  overview: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  posterUrl,
  title,
  genres,
  releaseDate,
  overview,
}) => {
  const truncateText = (text: string): string => {
    const maxLength = 150;
    return text.length > maxLength
      ? text.slice(0, maxLength).concat("...")
      : text;
  };

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full max-w-[350px] hover:shadow-red-500 transition-all cursor-pointer ml-4 mt-4">
      <img
        src={posterUrl}
        alt={`Movie poster`}
        className="w-full h-48 object-cover p-4 rounded-3xl"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {genres && genres.length > 0 && (
          <p className="text-sm text-gray-500 mb-2">
            Genre: {genres.join(", ")}
          </p>
        )}
        <p className="text-sm text-gray-500 mb-1">
          Release Date: {releaseDate}
        </p>

        <p className="text-sm text-gray-900 flex-grow text-[1rem]">
          {truncateText(overview)}
        </p>
      </div>
    </div>
  );
};
