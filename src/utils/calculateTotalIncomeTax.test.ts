import { ITaxRates } from "src/hooks/useTaxRates/useTaxRates";
import calculateTotalIncomeTax from "./calculateTotalIncomeTax";

const payload: ITaxRates = {
  tax_brackets: [
    {
      min: 0,
      max: 50197,
      rate: 0.15,
    },
    {
      min: 50197,
      max: 100392,
      rate: 0.205,
    },
    {
      min: 100392,
      max: 155625,
      rate: 0.26,
    },
    {
      min: 155625,
      max: 221708,
      rate: 0.29,
    },
    {
      min: 221708,
      rate: 0.33,
    },
  ],
};

describe("calculateTotalIncomeTax", () => {
  test("0 income in year 2022", () => {
    const result = calculateTotalIncomeTax(0, payload);
    expect(result.totalTax).toEqual(0);
  });
  test("50000 income in year 2022", () => {
    const result = calculateTotalIncomeTax(50000, payload);
    expect(result.totalTax).toEqual(7500.0);
  });
  test("100000 income in year 2022", () => {
    const result = calculateTotalIncomeTax(100000, payload);
    expect(result.totalTax).toEqual(17739.17);
  });
  test("1234567 income in year 2022", () => {
    const result = calculateTotalIncomeTax(1234567, payload);
    expect(result.totalTax).toEqual(385587.65);
  });
});
