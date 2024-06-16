import React from "react";
import { AiOutlineDollar } from "react-icons/ai";

import ValidatorStatsItem from "./ValidatorStatsItem";

type ValidatorStatsP = {
  name: string;
  totalBundles: number;
  delagateMEV: number;
  totalMEV: number;
};

const ValidatorStats = ({
  name,
  totalBundles,
  delagateMEV,
  totalMEV,
}: ValidatorStatsP) => {
  const items = [
    {
      icon: <AiOutlineDollar size={"30"} />,
      text: "Number of bundles",
      number: totalBundles,
    },
    {
      icon: <AiOutlineDollar size={"30"} />,
      text: "Mev captured for delegates",
      number: delagateMEV,
    },
    {
      icon: <AiOutlineDollar size={"30"} />,
      text: "Total MEV captured",
      number: totalMEV,
    },
  ];

  return (
    <div className="p-24 rounded-md	border border-slate-500 height-400 h-full my-4">
      <div className="text-2xl capitalize">
        <span className="capitalize">{name}</span>
        {` validator stats`}
      </div>
      {items.map((statItem, index) => (
        <ValidatorStatsItem
          key={index}
          icon={statItem.icon}
          text={statItem.text}
          number={statItem.number}
        />
      ))}
    </div>
  );
};

export default ValidatorStats;
