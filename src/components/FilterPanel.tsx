import clsx from "clsx";

export const FilterPanel = () => {
  const selectStyle = clsx(
    "w-60",
    "px-4",
    "py-2",
    "border",
    "border-gray-300",
    "rounded-md shadow-sm",
    "text-sm",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-red-500"
  );

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
      {/*==== Genre Filter ====*/}
      <select className={selectStyle} defaultValue="">
        <option value="" disabled>
          Select Genre
        </option>
      </select>

      {/*==== Year Filter ====*/}
      <select className={selectStyle} defaultValue="">
        <option value="" disabled>
          Select Release Year
        </option>
      </select>
    </div>
  );
};
