import Layout from "../components/Layout";
import Filter from "../components/Filter";
import TrackingTable from "../components/TrackingTable";
import { buttonPrimary } from "../styles/componentStyles";

export default function Home() {
  return (
    <Layout>
      <Filter />
      <TrackingTable />
      <div className="flex justify-center">
        <button className={`${buttonPrimary}`}>VIEW RESULTS</button>
      </div>
    </Layout>
  );
}
