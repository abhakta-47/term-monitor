import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Content from "./Content";
import { buttonPrimary } from "../styles/componentStyles";
function Filter() {
  return (
    <Content
      compClassName="filter"
      mainHeader={[
        "Add another keyword",
        <span
          key="1"
          className="mx-4 px-4 py-1 bg-primary text-white text-sm font-roboto font-medium items-center"
        >
          1/3
        </span>,
        <span
          key="2"
          className="text-sm font-roboto font-medium cursor-pointer"
        >
          UPGRADE
        </span>,
      ]}
      subHeader="Advance search"
    >
      <div
        className={`flex bg-white px-5 py-5 items-center bg-white text-black-700 focus-within:text-black-900`}
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
        <button className={`${buttonPrimary} ml-auto`}>SAVE FILTERS</button>
      </div>
    </Content>
  );
}

export default Filter;
