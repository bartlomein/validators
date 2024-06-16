import React from "react";
import { fetchValidatorData, ChainT } from "@/api/api";
import ValidatorsCard from "@/components/Validators/ValidatorsCard";
import ValidatorStats from "@/components/Validators/ValidatorStats";
import { returnStatTotals } from "./utils";
import Error from "@/components/Error/Error";

import { QueryClient } from "@tanstack/react-query";

type ValidatorPageP = {
  params: {
    name: ChainT;
  };
};

const Validator = async ({ params }: ValidatorPageP) => {
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
      {statTotals && data ? (
        <div className="flex justify-between mx-24 my-8 flex-wrap">
          <ValidatorsCard name={name as string} data={data} />

          <ValidatorStats
            name={name}
            totalBundles={statTotals?.bundles}
            totalMEV={statTotals?.TotalMEVRevenue}
            delagateMEV={statTotals?.TotalMEVShared}
          />
        </div>
      ) : null}
      {error ? <Error name={name} errorMsg={error as Error} /> : null}
    </div>
  );
};

export default Validator;
