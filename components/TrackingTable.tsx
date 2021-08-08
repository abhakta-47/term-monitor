import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Content from "./Content";

let getData = () => [
  {
    id: 1,
    keyword: "Blockchain",
    goal: "technology",
    matches: 18,
    search_status: "Done",
  },
  {
    id: 2,
    keyword: "ReactJs",
    goal: "technology",
    matches: 18,
    search_status: "Done",
  },
  {
    id: 3,
    keyword: "NextJs",
    goal: "technology",
    matches: 18,
    search_status: "Done",
  },
  {
    id: 4,
    keyword: "Typescript",
    goal: "technology",
    matches: 18,
    search_status: "Done",
  },
  {
    id: 5,
    keyword: "Javascript",
    goal: "technology",
    matches: 18,
    search_status: "Done",
  },
  {
    id: 6,
    keyword: "Django",
    goal: "technology",
    matches: 18,
    search_status: "Done",
  },
];

const tdHeadStyle = "py-4 px-5 text-center";
const tdStyle = "py-4 px-5 text-center";

function TrackingTable() {
  return (
    <Content
      compClassName="tracking-table"
      mainHeader="The terms you are tracking"
      subHeader="The data will refresh every 5 min"
    >
      <table className="w-full">
        <thead>
          <tr className="font-semibold text-gray-700 text-sm">
            <td className={`py-4 px-5`}>Keywords</td>
            <td></td>
            <td className={`${tdHeadStyle}`}>Goal</td>
            <td className={`${tdHeadStyle}`}>Matches</td>
            <td className={`${tdHeadStyle}`}>Search Status</td>
            <td className={`${tdHeadStyle}`}>Delete keyword</td>
          </tr>
        </thead>
        <tbody className="font-roboto text-gray-700 text-sm">
          {getData().map((item) => (
            <tr
              key={item.id}
              className="border-t border-grey-200 hover:bg-gray-100"
            >
              <td className="py-4 px-5">{item.keyword}</td>
              <td className="px-16 text-gray-800">
                <BiSearchAlt2 />
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
                  <div className="h-5 w-5 rounded-full bg-gray-400"></div>
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
