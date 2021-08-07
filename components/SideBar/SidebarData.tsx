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
  icon: JSX.Element;
  cName?: string;
  subMenu?: SideBarDataItem[];
}

export const SidebarData: SideBarDataItem[] = [
  {
    title: "Add keywords",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Matches",
    path: "/matches",
    icon: <IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Manage Resources",
    path: "/manage",
    icon: <AiOutlineCreditCard />,
    cName: "nav-text",
  },
  {
    title: "Integration",
    path: "/integration",
    icon: <AiOutlineCreditCard />,
    cName: "nav-text",
  },
  {
    title: "Alerts",
    path: "/alerts",
    icon: <AiOutlineCreditCard />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiTwotoneSetting />,
    cName: "nav-text",
    subMenu: [
      {
        title: "Billing",
        path: "/billing",
        icon: <AiOutlineCreditCard />,
        cName: "nav-text",
      },
    ],
  },
];
