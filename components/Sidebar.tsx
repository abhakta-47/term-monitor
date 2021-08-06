import React from "react";
import Link from "next/link";
import { SidebarData } from "./SidebarData";
import styles from "../styles/Sidebar.module.css";

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <nav className={styles.sideMenu}>
          <ul className={`${styles.sideMenuItems} list-none m-0 p-0`}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={index === 0 ? styles.active : ""}>
                  <a href="#" className="flex p-4">
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
