import formatTaxesPerBandData from "./formatTaxesPerBandData";

describe("formatTaxesPerBandData", () => {
  test("should formatted in expected format", () => {
    const result = formatTaxesPerBandData([
      {
        min: 0,
        max: 50197,
        rate: 0.15,
        taxableAmount: 50197,
        taxPayable: 7529.55,
      },
    ]);
    expect(result).toEqual([
      {
        marginalTaxRate: "15.00%",
        taxBracket: "$0.00 - $50,197.00",
        taxPayable: "$7,529.55",
        taxableAmount: "$50,197.00",
      },
    ]);
  });
});
