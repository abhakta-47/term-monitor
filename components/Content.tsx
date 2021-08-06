import React, { ReactElement } from "react";
import styles from "../styles/Content.module.css";

interface ContentProp {
  mainHeader: string | (string | ReactElement)[];
  subHeader?: string | (string | ReactElement)[];
  children: JSX.Element;
  compClassName?: string;
}

function Content({
  mainHeader,
  subHeader,
  children,
  compClassName,
}: ContentProp) {
  return (
    <div className={`${compClassName} ${styles.content}`}>
      <div className={styles.contentHeader}>
        <div className={styles.mainHeader}>{mainHeader}</div>
        {subHeader ? <div className={styles.subHeader}>{subHeader}</div> : ""}
      </div>
      <div className={styles.mainContent}>{children}</div>
    </div>
  );
}

export default Content;
