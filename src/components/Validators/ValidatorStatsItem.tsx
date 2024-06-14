import React, { ReactNode } from "react";
import { formatStat } from "./utils";

type ValidatorStatItemP = {
  icon: ReactNode;
  text: string;
  number: number;
};

const ValidatorStatsItem = ({ icon, text, number }: ValidatorStatItemP) => {
  return (
    <div>
      <div className="p-1">{icon}</div>
      <div className="text-slate-400 text-lg py-1">{text}</div>
      <div className="text-slate-200 py-2 text-xl">
        {formatStat("en-US", "USD", number)}
      </div>
    </div>
  );
};

export default ValidatorStatsItem;
