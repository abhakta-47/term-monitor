import React from "react";
import styles from "./../styles/Header.module.css";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.brandLogo}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className={styles.brandName}>
          Term<span>Monitor</span>
        </div>
      </div>
      <div className={styles.headerContent}>
        <div className={styles.keyWords}>KEYWORDS</div>
        <div className={`${styles.searchBar} flex items-center`}>
          <input type="text" name="submit1" id="submit1" />
          <button>
            SUBMIT <BsArrowRight fontFamily="bold" fontSize="1rem" />
          </button>
        </div>
        <div className={`${styles.account} flex items-center justify-center`}>
          A
        </div>
      </div>
    </div>
  );
}

export default Header;
