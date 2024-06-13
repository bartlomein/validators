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
  console.log("sortTyo", sortType);
  if (sortType === "Name") {
    if (sortDir === "ASC") {
      return [...data].sort((a, b) => a.Name.localeCompare(b.Name));
    }
    return [...data].sort((a, b) => b.Name.localeCompare(a.Name));
  }

  if (sortDir === "ASC") {
    return [...data].sort((a, b) => b?.[sortType] - a?.[sortType]);
  }
  return [...data].sort((a, b) => a?.[sortType] - b?.[sortType]);
};
