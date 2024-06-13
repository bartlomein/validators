export type ChainT = "osmosis" | "juno" | "hub" | "evmos";

export const fetchValidatorData = async (chain: ChainT) => {
  const response = await fetch(
    `https://skip-select.s3.amazonaws.com/${chain}/validators.json`,
    {
      method: "GET",
    }
  );
  const data = await response.json();

  const { validator_infos } = data;

  return validator_infos;
};
