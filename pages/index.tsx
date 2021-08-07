import Layout from "../components/Layout";
import Filter from "../components/Filter";
import TrackingTable from "../components/TrackingTable";

export default function Home() {
  return (
    <Layout>
      <Filter />
      <TrackingTable />
    </Layout>
  );
}
