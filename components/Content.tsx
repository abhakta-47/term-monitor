import React from "react";
import styles from "../styles/Content.module.css";

function Content({ mainHeader, subHeader, children, compClassName }) {
  return (
    <div className={`${compClassName} ${styles.content}`}>
      <div className={styles.contentHeader}>
        <div className={styles.mainHeader}>{mainHeader}</div>
        <div className={styles.subHeader}>{subHeader}</div>
      </div>
      <div className={styles.mainContent}>{children}</div>
    </div>
  );
}

export default Content;
