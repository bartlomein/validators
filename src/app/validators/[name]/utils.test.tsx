import { returnStatTotals } from "./utils";
import { ValidatorsDataT } from "@/api/api";

describe("returnStatTotals", () => {
  it("should return null when data is undefined", () => {
    expect(returnStatTotals(undefined)).toBeNull();
  });

  it("should return zeros when data is an empty array", () => {
    const emptyData: ValidatorsDataT[] = [];
    expect(returnStatTotals(emptyData)).toEqual({
      TotalMEVRevenue: 0,
      TotalMEVShared: 0,
      bundles: 0,
    });
  });

  // Test Case 3: Valid Data with Multiple Items
  it("should correctly calculate totals for valid data", () => {
    const sampleData: ValidatorsDataT[] = [
      { TotalMEVRevenue: 100, TotalMEVShared: 80, bundles: 5 },
      { TotalMEVRevenue: 250, TotalMEVShared: 200, bundles: 12 },
      { TotalMEVRevenue: 50, TotalMEVShared: 45, bundles: 3 },
    ];

    expect(returnStatTotals(sampleData)).toEqual({
      TotalMEVRevenue: 400,
      TotalMEVShared: 325,
      bundles: 20,
    });
  });

  it("should handle data items with missing properties", () => {
    const partialData: ValidatorsDataT[] = [
      { TotalMEVRevenue: 150, TotalMEVShared: 120 },
      { TotalMEVShared: 60, bundles: 8 },
      { TotalMEVRevenue: 300 },
    ];

    expect(returnStatTotals(partialData)).toEqual({
      TotalMEVRevenue: 450,
      TotalMEVShared: 180,
      bundles: 8,
    });
  });
});
