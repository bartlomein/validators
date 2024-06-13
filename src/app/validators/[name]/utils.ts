import { ValidatorsDataT } from "@/api/api";

export const returnStatTotals = (data: ValidatorsDataT[] | undefined) => {
  if (!data) {
    return null;
  }
  let totalRevenue = 0;
  let totalShared = 0;
  let totalBundles = 0;

  for (const item of data) {
    totalRevenue += item.TotalMEVRevenue;
    totalShared += item.TotalMEVShared;
    totalBundles += item.bundles;
  }

  return {
    TotalMEVRevenue: totalRevenue,
    TotalMEVShared: totalShared,
    bundles: totalBundles,
  };
};
