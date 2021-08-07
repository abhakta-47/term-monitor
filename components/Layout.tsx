import React, { Children, ReactChild } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LyoutProps {
  children: ReactChild[];
}

function Layout({ children }: LyoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow bg-backGround">
        <Sidebar />
        <main className="p-12 col flex-grow">
          {children.map((child) => (
            <>{child}</>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Layout;
