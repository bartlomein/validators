import { ValidatorsDataT } from "@/api/api";
import { SortByT, SortDirT } from "./ValidatorsCard";

export const handleSort = (
  sortDir: SortDirT | null,
  sortType: SortByT | null,
  data: ValidatorsDataT[]
) => {
  if (!sortDir || !sortType) {
    return [...data];
  }

  if (sortType === "Name") {
    if (sortDir === "ASC") {
      return [...data].sort((a, b) =>
        a.Name.trimStart().localeCompare(b.Name.trimStart())
      );
    }
    return [...data].sort((a, b) =>
      b.Name.trimStart().localeCompare(a.Name.trimStart())
    );
  }

  if (sortDir === "ASC") {
    return [...data].sort((a, b) => a?.[sortType] - b?.[sortType]);
  }
  return [...data].sort((a, b) => b?.[sortType] - a?.[sortType]);
};

type LanguageT = "en-US";
type CurrencyT = "USD" | "EUR" | "JPY";

export const formatStat = (
  language: LanguageT,
  currency: CurrencyT,
  number: number
) => {
  return new Intl.NumberFormat(language, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(number);
};
