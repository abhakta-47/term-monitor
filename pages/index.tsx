import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Filter from "../components/Filter";
import TrackingTable from "../components/TrackingTable";

export default function Home() {
  return (
    // <div className={styles.container}>
    <div className="flex flex-col h-screen">
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
      <div className="flex flex-grow">
        <Sidebar />
        <div className="p-12 col flex-grow">
          <Content
            compClassName="filter"
            mainHeader={[
              "Add another keyword",
              <span>1/3</span>,
              <span>UPGRADE</span>,
            ]}
            subHeader="advanced search"
          >
            <Filter />
          </Content>

          <Content
            compClassName="tracking-table"
            mainHeader="The terms you are tracking"
            subHeader="The data will refresh every 5 min"
          >
            <TrackingTable />
          </Content>
        </div>
      </div>
    </div>
  );
}
