import Layout from "../components/Layout";
import Filter from "../components/Filter";
import TrackingTable from "../components/TrackingTable";
import { buttonPrimary } from "../styles/componentStyles";

function Home({ tableData }) {
  return (
    <Layout>
      <Filter />
      <TrackingTable tableData={tableData} />
      <div className="flex justify-center">
        <button className={`${buttonPrimary}`}>VIEW RESULTS</button>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const rawData = await fetch(
    "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
  );
  const tableData = await rawData.json();
  return {
    props: {
      tableData: tableData.data,
    },
  };
}

export default Home;
