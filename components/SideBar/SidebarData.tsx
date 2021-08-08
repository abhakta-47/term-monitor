import React from "react";
import { IoMdPeople } from "react-icons/io";
import {
  AiFillHome,
  AiOutlineCreditCard,
  AiTwotoneSetting,
} from "react-icons/ai";

interface SideBarDataItem {
  title: string;
  path: string;
  icon?: JSX.Element;
  cName?: string;
  subMenu?: SideBarDataItem[];
}

export const SidebarData: SideBarDataItem[] = [
  {
    title: "Add keywords",
    path: "/",
    icon: <AiFillHome fontSize="1.5rem" />,
    cName: "nav-text",
  },
  {
    title: "Matches",
    path: "/matches",
    icon: <IoMdPeople fontSize="1.5rem" />,
    cName: "nav-text",
  },
  {
    title: "Manage sources",
    path: "/manage",
    icon: <AiOutlineCreditCard fontSize="1.5rem" />,
    cName: "nav-text",
  },
  {
    title: "Integration",
    path: "/integration",
    icon: <AiOutlineCreditCard fontSize="1.5rem" />,
    cName: "nav-text",
  },
  {
    title: "Alerts",
    path: "/alerts",
    icon: <AiOutlineCreditCard fontSize="1.5rem" />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiTwotoneSetting fontSize="1.5rem" />,
    cName: "nav-text",
    subMenu: [
      {
        title: "Billing",
        path: "/billing",
        cName: "nav-text",
      },
    ],
  },
];
