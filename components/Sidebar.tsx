import React from "react";
import Link from "next/link";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <>
      <div className="bg-white">
        <nav className="w-60">
          <ul className={`flex flex-col list-none m-0 p-0`}>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    index === 0
                      ? "text-white bg-primary text-white"
                      : "text-black2 hover:text-black"
                  }
                >
                  <a href="#" className="flex p-4">
                    <div className="mr-4">{item.icon}</div>
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
