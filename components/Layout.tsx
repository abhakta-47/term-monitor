import React, { Children, ReactChild } from "react";
import Head from "next/head";
import Header from "./Header";
import Sidebar from "./SideBar/Sidebar";

interface LyoutProps {
  children: ReactChild[] | ReactChild;
}

function Layout({ children }: LyoutProps) {
  return (
    <>
      <Head>
        <title>TermMonitor</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen font-poppins">
        <Header />
        <div className="flex flex-grow bg-backGround">
          <Sidebar />
          <main className="p-12 col flex-grow">{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
