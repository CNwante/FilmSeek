export const FilterPanel = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
      {/*==== Genre Filter ====*/}
      <select
        className="w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        defaultValue=""
      >
        <option value="" disabled>
          Select Genre
        </option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        {/* Add more genres as needed */}
      </select>

      {/*==== Year Filter ====*/}
      <select
        className="w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        defaultValue=""
      >
        <option value="" disabled>
          Select Release Year
        </option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        {/* Add more years as needed */}
      </select>
    </div>
  );
};
