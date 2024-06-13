import React from "react";
import { SortByT, SortDirT } from "./ValidatorsCard";

type ValidatorHeaderTableP = {
  handleHeaderClick: (dir: SortDirT, type: SortByT) => void;
  sortDir: SortDirT;
};

type HeaderItemsT = {
  label: string;
  id: SortByT;
};
const HEADER_ITEMS: HeaderItemsT[] = [
  { label: "Validator", id: "Name" },
  { label: "MEV Rev Total", id: "TotalMEVRevenue" },
  { label: "MEV Rev Shared", id: "TotalMEVShared" },
  { label: "Bundles", id: "bundles" },
];

const ValidatorsTableHeader = ({
  handleHeaderClick,
  sortDir,
}: ValidatorHeaderTableP) => {
  return (
    <div className="grid auto-cols-auto lg:grid-cols-4 md:grid-cols-2 auto-cols-max gap-4 m-auto">
      {HEADER_ITEMS.map((item, index) => {
        return (
          <div
            className={`${index === 0 ? `text-left` : `text-right`} px-4`}
            key={index}
            onClick={() =>
              handleHeaderClick(
                sortDir === "DESC" || sortDir === null ? "ASC" : "DESC",
                item.id
              )
            }
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default ValidatorsTableHeader;
