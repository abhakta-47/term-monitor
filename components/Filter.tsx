import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import styles from "../styles/Filter.module.css";

function Filter() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.searchIcon}>
        <BiSearchAlt2 size="1.5rem" />
      </div>
      <input
        type="text"
        name="search"
        id="filter-search"
        placeholder="Enter yout filters here"
      />
      <button>SAVE FILTERS</button>
    </div>
  );
}

export default Filter;
