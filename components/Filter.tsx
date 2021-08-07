import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Content from "./Content";

function Filter() {
  return (
    <Content
      compClassName="filter"
      mainHeader={[
        "Add another keyword",
        <span key="1" className="mx-4 px-4 py-1 bg-primary text-white">
          1/3
        </span>,
        <span key="2" className="text-base">
          UPGRADE
        </span>,
      ]}
      subHeader="advanced search"
    >
      <div
        className={`flex items-center bg-white text-gray-500 focus-within:text-gray-900`}
      >
        <label className="mr-8 flex">
          <BiSearchAlt2 size="1.5rem" />
          <input
            type="text"
            name="search2"
            id="filter-search"
            placeholder="Enter yout filters here"
            className="ml-2 px-2 focus:ring-2 focus:ring-pink-800"
          />
        </label>
        <button className="ml-auto px-4 py-3 text-xl rounded-lg bg-primary text-white">
          SAVE FILTERS
        </button>
      </div>
    </Content>
  );
}

export default Filter;
