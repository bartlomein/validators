import React from "react";
import { fetchValidatorData, ChainT } from "@/api/api";
import ValidatorsCard from "@/components/Validators/ValidatorsCard";
import ValidatorStats from "@/components/Validators/ValidatorStats";
import { returnStatTotals } from "./utils";

import { QueryClient } from "@tanstack/react-query";
const Validator = async ({ params }: ChainT) => {
  const queryClient = new QueryClient();

  const name = params?.name;

  let data;
  let error;

  try {
    data = await queryClient.fetchQuery({
      queryKey: [name],
      queryFn: () => fetchValidatorData(name),
    });
  } catch (e) {
    error = e;
  }
  const statTotals = returnStatTotals(data);

  return (
    <div>
      {data ? (
        <div className="flex justify-between mx-24 my-8">
          <ValidatorsCard name={name as string} data={data} />

          <ValidatorStats
            name={name}
            totalBundles={statTotals?.bundles}
            totalMEV={statTotals?.TotalMEVRevenue}
            delagateMEV={statTotals?.TotalMEVShared}
          />
        </div>
      ) : null}
      {error ? (
        <div className="text-center	text-red-600 p-8">
          {JSON.stringify((error as Error)?.message)}
        </div>
      ) : null}
    </div>
  );
};

export default Validator;
