import Head from "next/head";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Filter from "../components/Filter";
import TrackingTable from "../components/TrackingTable";

export default function Home() {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>TermMonitor</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="/globals.css" /> */}
      </Head>

      <Layout>
        <Filter />
        <TrackingTable />
      </Layout>
    </>
  );
}
