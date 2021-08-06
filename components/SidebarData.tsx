import React from "react";
import { IoMdPeople } from "react-icons/io";
import { AiFillHome, AiOutlineCreditCard } from "react-icons/ai";

interface SidebarDataOne {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
}

export const SidebarData: SidebarDataOne[] = [
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
];
