import React from "react";
import { formatStat } from "./utils";

type ValidatorStatsP = {
  name: string;
  totalBundles: number | undefined;
  delagateMEV: number | undefined;
  totalMEV: number | undefined;
};

const ValidatorStats = ({
  name,
  totalBundles,
  delagateMEV,
  totalMEV,
}: ValidatorStatsP) => {
  return (
    <div className="p-24 rounded-md	border border-slate-500 ">
      <div className="text-2xl capitalize">{`${name} validator stats`}</div>
      <div>Number of bundles</div>
      <div>{totalBundles?.toLocaleString()}</div>
      <div>MEV captured for delegates</div>
      <div>{formatStat("en-US", "USD", delagateMEV)}</div>
      <div>Total MEV captured</div>
      <div>{formatStat("en-US", "USD", totalMEV)}</div>
    </div>
  );
};

export default ValidatorStats;
