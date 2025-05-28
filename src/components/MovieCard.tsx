
export const MovieCard = () => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full max-w-[350px] hover:shadow-red-500 transition-all cursor-pointer ml-4 mt-4">
      <img
        src={"https://core-faucet.surge.sh/images/bento_pro_20.jpg"}
        alt={`Movie poster`}
        className="w-full h-48 object-cover p-4 rounded-3xl"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">The Funny Chuks</h3>
        <p className="text-sm text-gray-500 mb-1">
          Release Date: 2025
        </p>
          <p className="text-sm text-gray-500 mb-2">
            Genre: Comedy
          </p>

        <p className="text-sm text-gray-900 flex-grow text-[1rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};
