import React from "react";
import ValidatorsTableHeader from "./ValidatorsTableHeader";
import ValidatorsTableItem from "./ValidatorsTableItem";
import { ValidatorsDataT } from "@/api/api";
import { SortByT, SortDirT } from "./ValidatorsCard";

type ValidatorsTableP = {
  data: ValidatorsDataT[];
  handleHeaderClick: (dir: SortDirT, type: SortByT) => void;
  sortDir: SortDirT | null;
  filterSearch: string;
};

const ValidatorsTable = ({
  data,
  handleHeaderClick,
  sortDir,
  filterSearch,
}: ValidatorsTableP) => {
  return (
    <div className=" bg-slate-900 p-6 rounded-md">
      <ValidatorsTableHeader
        handleHeaderClick={handleHeaderClick}
        sortDir={sortDir}
      />
      {data.map((validator, index) => {
        if (validator.Name.toLowerCase().includes(filterSearch.toLowerCase())) {
          return (
            <div
              className="grid grid-cols-[0.2fr_1fr_1fr_1fr_1fr] py-3 gap-4 m-auto"
              key={index}
            >
              <ValidatorsTableItem content={index + 1} isText />
              <ValidatorsTableItem content={validator.Name} isText />
              <ValidatorsTableItem content={validator.TotalMEVRevenue} />
              <ValidatorsTableItem content={validator.TotalMEVShared} />
              <ValidatorsTableItem content={validator.bundles} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ValidatorsTable;
