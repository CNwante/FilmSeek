export const SearchBar = () => {
  return (
    <form className="flex justify-center w-full mt-20">
      <input
        type="text"
        placeholder="Search for movies..."
        className="w-full max-w-2xl px-6 py-3 rounded-full shadow-md border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
      />
    </form>
  );
};
