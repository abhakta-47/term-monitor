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
    </Content>
  );
}

export default Filter;
