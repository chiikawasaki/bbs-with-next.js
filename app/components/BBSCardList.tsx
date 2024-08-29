import React from "react";
import BBSCard from "./BBSCard";
import { BBSData } from "../types/types";

const BBSCardList = ({ bbsAllData }: { bbsAllData: BBSData }) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
    </div>
  );
};

export default BBSCardList;
