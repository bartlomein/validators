"use client";
import React, { useState, useMemo } from "react";
import ValidatorsHeader from "./ValidatorsHeader";
import ValidatorsTable from "./ValidatorsTable";
import { handleSort } from "./utils";

export type SortDirT = "ASC" | "DESC";
export type SortByT = "Name" | "TotalMEVRevenue" | "TotalMEVShared" | "bundles";
import { ValidatorsDataT } from "@/api/api";

type ValidatorsCardP = {
  name: string;
  data: ValidatorsDataT[];
};

const ValidatorsCard = ({ name, data }: ValidatorsCardP) => {
  const [sortDir, setSortDir] = useState<SortDirT | null>(null);
  const [sortType, setSortType] = useState<SortByT | null>(null);
  const [filterSearch, setFilterSearch] = useState<string>("");

  const handleHeaderClick = (dir: SortDirT, type: SortByT) => {
    setSortDir(dir);
    setSortType(type);
  };

  const tableData = useMemo(
    () => handleSort(sortDir, sortType, data),
    [sortDir, sortType]
  );

  return (
    <div className="w-3/5 my-4" data-testid="validator-card">
      <ValidatorsHeader name={name} setFilterSearch={setFilterSearch} />
      <ValidatorsTable
        filterSearch={filterSearch}
        data={tableData}
        handleHeaderClick={handleHeaderClick}
        sortDir={sortDir}
        sortType={sortType}
      />
    </div>
  );
};

export default ValidatorsCard;
