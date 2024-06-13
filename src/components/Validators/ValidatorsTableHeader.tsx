import React from "react";
import { SortByT, SortDirT } from "./ValidatorsCard";

type ValidatorHeaderTableP = {
  handleHeaderClick: (dir: SortDirT, type: SortByT) => void;
  sortDir: SortDirT | null;
};

type HeaderItemsT = {
  label: string;
  id: SortByT | null;
};
const HEADER_ITEMS: HeaderItemsT[] = [
  { label: "#", id: null },
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
    <div className="grid  grid-cols-[0.2fr_1fr_1fr_1fr_1fr]  gap-4 m-auto auto-columns-min ">
      {HEADER_ITEMS.map((item, index) => {
        return (
          <div
            className={`${
              index === 0 || index === 1
                ? `text-left ${index === 1 ? `cursor-pointer` : ""}`
                : `text-right cursor-pointer`
            } text-slate-400`}
            key={index}
            onClick={() =>
              item.id &&
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
