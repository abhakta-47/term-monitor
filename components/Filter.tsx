import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function Filter() {
  return (
    <div
      className={`flex items-center bg-white text-gray-500 focus-within:text-gray-900`}
    >
      <div className="mr-8">
        <BiSearchAlt2 size="1.5rem" />
      </div>
      <input
        type="text"
        name="search"
        id="filter-search"
        placeholder="Enter yout filters here"
      />
      <button className="ml-auto px-4 py-3 text-xl rounded-lg bg-primary text-white">
        SAVE FILTERS
      </button>
    </div>
  );
}

export default Filter;
