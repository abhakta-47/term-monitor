import React from "react";

import Content from "./Content";
import styles from "../styles/TrackingTable.module.css";

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

function TrackingTable() {
  // let []
  return (
    <Content
      compClassName="tracking-table"
      mainHeader="The terms you are tracking"
      subHeader="The data will refresh every 5 min"
    >
      <table className="w-full">
        <thead>
          <tr>
            <td className="py-4 px-5">Keywords</td>
            <td className="py-4 px-5">Goal</td>
            <td className="py-4 px-5">Matches</td>
            <td className="py-4 px-5">Search Status</td>
            <td className="py-4 px-5">Delete keyword</td>
          </tr>
        </thead>
        <tbody>
          {getData().map((item) => (
            <tr key={item.id}>
              <td className="py-4 px-5">{item.keyword}</td>
              <td className="py-4 px-5">{item.goal}</td>
              <td className="py-4 px-5">{item.matches}</td>
              <td className="py-4 px-5">{item.search_status} Status</td>
              <td className="py-4 px-5">Delete keyword</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  );
}

export default TrackingTable;
