import React from "react";
import { fetchValidatorData, ChainT } from "@/api/api";

import { QueryClient } from "@tanstack/react-query";
const Validator = async ({ params }: ChainT) => {
  const queryClient = new QueryClient();

  const { name } = params;

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

  console.log("data", data);
  console.log("error", error);

  return <div>TEST2</div>;
};

export default Validator;
