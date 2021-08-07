import React from "react";
import Link from "next/link";
import { useRouter } from "next//router";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const route = useRouter();
  return (
    <>
      <div className="bg-white">
        <nav className="w-60">
          <ul className={`flex flex-col list-none m-0 p-0`}>
            {SidebarData.map((item, index) => {
              return (
                <Link key={index} href={item.path} as={item.path} passHref>
                  <li
                    className={`${
                      route.pathname === item.path
                        ? // index === 0
                          "text-white bg-primary text-white"
                        : "text-blackLighter hover:text-black"
                    } flex p-4 cursor-pointer`}
                  >
                    <>
                      <div className="mr-4">{item.icon}</div>
                      <span>{item.title}</span>
                    </>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
