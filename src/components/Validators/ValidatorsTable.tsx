import React from "react";
import ValidatorsTableHeader from "./ValidatorsTableHeader";
import ValidatorsTableItem from "./ValidatorsTableItem";
import { ValidatorsDataT } from "@/api/api";
import { SortByT, SortDirT } from "./ValidatorsCard";

type ValidatorsTableP = {
  data: ValidatorsDataT[];
  handleHeaderClick: (dir: SortDirT, type: SortByT) => void;
  sortDir: SortDirT;
  filterSearch: string;
};

const ValidatorsTable = ({
  data,
  handleHeaderClick,
  sortDir,
  filterSearch,
}: ValidatorsTableP) => {
  return (
    <div>
      <ValidatorsTableHeader
        handleHeaderClick={handleHeaderClick}
        sortDir={sortDir}
      />
      {data.map((validator, index) => {
        if (validator.Name.toLowerCase().includes(filterSearch.toLowerCase())) {
          return (
            <div
              className="grid auto-cols-auto  lg:grid-cols-4 md:grid-cols-2 p-4 auto-cols-max gap-8 m-auto"
              key={index}
            >
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
