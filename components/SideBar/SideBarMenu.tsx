import React from "react";
import { useRouter } from "next/router";

import SideBarMenuItem from "./SideBarMenuItem";

interface SideBarDataItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName?: string;
  subMenu?: SideBarDataItem[];
}

interface SideBarMenuProps {
  sideMenuItems: SideBarDataItem[];
  path: string;
}

export default function SideBarMenu({ sideMenuItems, path }: SideBarMenuProps) {
  const router = useRouter();
  return (
    <ul className={`flex flex-col list-none m-0 p-0`}>
      {sideMenuItems.map((item, index) => (
        <SideBarMenuItem
          key={index}
          index={index}
          item={item}
          path={path + (item.path === "/" ? "" : item.path)}
        />
      ))}
    </ul>
  );
}
