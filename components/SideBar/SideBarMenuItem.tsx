import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import SideBarMenu from "./SideBarMenu";

const SideBarMenuItemStyleBase = "flex p-4 cursor-pointer items-center";
const SideBarMenuItemExpand = "ml-auto";

interface SideBarDataItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName?: string;
  subMenu?: SideBarDataItem[];
}

interface SideBarMenuItemProp {
  index: number;
  item: SideBarDataItem;
  path: string;
}

function SideBarMenuItem({ index, item, path }: SideBarMenuItemProp) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (item.subMenu) {
    return (
      <li>
        <div
          className={`${
            router.pathname === item.path
              ? "text-white bg-primary text-white"
              : "text-gray-800 hover:text-black"
          } ${SideBarMenuItemStyleBase} `}
          onClick={handleClick}
        >
          <div className="mr-4">{item.icon}</div>
          <span>{item.title}</span>
          {/* <span>{path}</span> */}
          {item.subMenu ? (
            <span className={SideBarMenuItemExpand}>
              {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className={`${isOpen ? "" : "hidden"}  ml-2`}>
          {item.subMenu ? (
            <SideBarMenu sideMenuItems={item.subMenu} path={path} />
          ) : (
            ""
          )}
        </div>
      </li>
    );
  }

  return (
    <Link
      key={index}
      href={(path === "/" ? "" : path) + item.path}
      as={item.path}
      passHref
    >
      <li>
        <div
          className={`${
            router.pathname === item.path
              ? "text-white bg-primary text-white"
              : "text-gray-600 hover:text-black"
          } ${SideBarMenuItemStyleBase} `}
          onClick={handleClick}
        >
          {item.icon ? <div className="mr-4">{item.icon}</div> : ""}
          <span>{item.title}</span>
          {/* <span>{path}</span> */}
          {item.subMenu ? (
            <span className={SideBarMenuItemExpand}>
              {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className={`${isOpen ? "" : "hidden"} ml-4`}>
          {item.subMenu ? (
            <SideBarMenu sideMenuItems={item.subMenu} path={path} />
          ) : (
            ""
          )}
        </div>
      </li>
    </Link>
  );
}

export default SideBarMenuItem;
