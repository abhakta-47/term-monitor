import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>TermMonitor</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/globals.css" />
      </Head>
      <Header />
      <Sidebar />
    </div>
  );
}
