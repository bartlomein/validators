import { handleSort, formatStat } from "./utils";
import { ValidatorsDataT } from "@/api/api";

describe("handleSort", () => {
  const mockValidatorsData: ValidatorsDataT[] = [
    { Name: "OP", TotalMEVRevenue: 1200, TotalMEVShared: 5000, bundles: 100 },
    { Name: "BASE", TotalMEVRevenue: 800, TotalMEVShared: 3500, bundles: 1020 },
    { Name: "Pepe", TotalMEVRevenue: 1000, TotalMEVShared: 4200, bundles: 110 },
  ];

  it("should return the original array if sortDir or sortType is null", () => {
    expect(handleSort(null, null, mockValidatorsData)).toEqual(
      mockValidatorsData
    );
    expect(handleSort("ASC", null, mockValidatorsData)).toEqual(
      mockValidatorsData
    );
    expect(handleSort(null, "TotalMEVRevenue", mockValidatorsData)).toEqual(
      mockValidatorsData
    );
  });

  it("should sort by Name in descending order", () => {
    const expected = [
      {
        Name: "Pepe",
        TotalMEVRevenue: 1000,
        TotalMEVShared: 4200,
        bundles: 110,
      },
      { Name: "OP", TotalMEVRevenue: 1200, TotalMEVShared: 5000, bundles: 100 },
      {
        Name: "BASE",
        TotalMEVRevenue: 800,
        TotalMEVShared: 3500,
        bundles: 1020,
      },
    ];
    expect(handleSort("DESC", "Name", mockValidatorsData)).toEqual(expected);
  });

  it("should sort by TotalMEVRevenue in ascending order", () => {
    const expected = [
      {
        Name: "BASE",
        TotalMEVRevenue: 800,
        TotalMEVShared: 3500,
        bundles: 1020,
      },
      {
        Name: "Pepe",
        TotalMEVRevenue: 1000,
        TotalMEVShared: 4200,
        bundles: 110,
      },
      { Name: "OP", TotalMEVRevenue: 1200, TotalMEVShared: 5000, bundles: 100 },
    ];
    expect(handleSort("ASC", "TotalMEVRevenue", mockValidatorsData)).toEqual(
      expected
    );
  });
});

describe("formatStat", () => {
  it("should format a number as US currency with no decimal places", () => {
    expect(formatStat("en-US", "USD", 12345.67)).toBe("$12,346");
    expect(formatStat("en-US", "USD", 0)).toBe("$0");
  });

  it("should handle other currency codes", () => {
    expect(formatStat("en-US", "EUR", 12345.67)).toBe("€12,346");
    expect(formatStat("en-US", "JPY", 12345.67)).toBe("¥12,346");
  });
});
