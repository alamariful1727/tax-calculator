import formatCurrency from "./formatCurrency";

describe("formatCurrency", () => {
  test("100000 should formatted in $100,000.00", () => {
    const result = formatCurrency(100000);
    expect(result).toEqual("$100,000.00");
  });
  test("1234567 should formatted in $1,234,567.00", () => {
    const result = formatCurrency(1234567);
    expect(result).toEqual("$1,234,567.00");
  });
});
