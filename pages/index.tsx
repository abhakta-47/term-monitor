import Layout from "../components/Layout";
import Filter from "../components/Filter";
import TrackingTable from "../components/TrackingTable";

export default function Home() {
  return (
    <Layout>
      <Filter />
      <TrackingTable />
      <div className="flex justify-center">
        <div className="px-4 py-3 text-xl rounded-lg bg-primary text-white">
          VIEW RESULTS
        </div>
      </div>
    </Layout>
  );
}
