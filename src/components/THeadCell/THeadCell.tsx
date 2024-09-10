import { useState } from "react";
import { Columns, Filter } from "../../types/types";

const THeadCell = ({
  cellName,
  filter,
  handleFilterChange,
}: {
  cellName: Columns;
  filter: Filter;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <th scope="col" className="relative border-b border-gray-300 bg-slate-200">
      <div className="relative flex flex-col items-start p-2">
        <div className="w-full flex items-center justify-between mb-2">
          <span className="block mr-5 font-semibold">
            {cellName.toUpperCase()}
          </span>
          <button
            onClick={toggleVisibility}
            className="block text-lg px-3 rounded-full hover:bg-slate-300"
          >
            &#x22EE;
          </button>
        </div>
        <div
          className={`absolute z-10 -top-10 w-full transition-all duration-300 ease-in-out transform ${
            isSearchVisible ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
          } overflow-hidden bg-slate-300 rounded-md p-2 `}
        >
          <input
            type="text"
            name={cellName}
            placeholder={`Search by ${cellName}`}
            value={filter[cellName]}
            onChange={handleFilterChange}
            autoComplete="off"
            autoFocus={true}
            className="block w-full font-normal text-sm border border-slate-200 placeholder-slate-200 p-1 rounded-md shadow-sm"
          />
        </div>
      </div>
    </th>
  );
};

export default THeadCell;
