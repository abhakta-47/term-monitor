import React from "react";
import { MdDelete, MdSearch } from "react-icons/md";

import Content from "./Content";

const tdHeadStyle = "py-4 px-5 text-center";
const tdStyle = "py-4 px-5 text-center";

interface tableDataItem {
  id: number;
  keyword: string;
  goal: string;
  matches: number;
  search_status: string;
  [key: string]: any;
}
interface TrackingTableProps {
  tableData: tableDataItem[];
}

function TrackingTable({ tableData }: TrackingTableProps) {
  return (
    <Content
      compClassName="tracking-table"
      mainHeader="The terms you are tracking"
      subHeader="The data will refresh every 5 min"
    >
      <table className="w-full bg-white px-5 py-5 shadow">
        <thead>
          <tr className="font-semibold text-black-700 text-sm">
            <td className={`py-4 px-5`}>Keywords</td>
            <td></td>
            <td className={`${tdHeadStyle}`}>Goal</td>
            <td className={`${tdHeadStyle}`}>Matches</td>
            <td className={`${tdHeadStyle}`}>Search Status</td>
            <td className={`${tdHeadStyle}`}>Delete keyword</td>
          </tr>
        </thead>
        <tbody className="font-roboto text-black-700 text-sm">
          {tableData.map((item) => (
            <tr
              key={item.id}
              className="border-t border-grey-200 hover:bg-black-100"
            >
              <td className="py-4 px-5">{item.keyword}</td>
              <td className="px-16 text-black-800">
                <MdSearch fontSize="1.5rem" />
              </td>
              <td className={`${tdStyle}`}>
                {item.goal
                  .split(" ")
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </td>
              <td className={`${tdStyle}`}>{item.matches}</td>
              <td className={`${tdStyle}`}>{item.search_status}</td>
              <td className={``}>
                <div className="flex justify-center">
                  <MdDelete fontSize="1.5rem" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  );
}

export default TrackingTable;
