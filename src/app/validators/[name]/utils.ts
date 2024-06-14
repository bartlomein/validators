import { ValidatorsDataT } from "@/api/api";

export const returnStatTotals = (data: ValidatorsDataT[] | undefined) => {
  if (!data) {
    return null;
  }
  let totalRevenue = 0;
  let totalShared = 0;
  let totalBundles = 0;

  for (const item of data) {
    totalRevenue += item.TotalMEVRevenue || 0;
    totalShared += item.TotalMEVShared || 0;
    totalBundles += item.bundles || 0;
  }

  return {
    TotalMEVRevenue: totalRevenue,
    TotalMEVShared: totalShared,
    bundles: totalBundles,
  };
};
