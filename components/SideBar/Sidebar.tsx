import React from "react";
import { useRouter } from "next//router";
import { SidebarData } from "./SidebarData";
import SideBarMenu from "./SideBarMenu";

function Sidebar() {
  const route = useRouter();
  return (
    <>
      <div className="bg-white">
        <nav className="w-60">
          <SideBarMenu sideMenuItems={SidebarData} path="" />
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
