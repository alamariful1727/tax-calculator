import calculateEffectiveTaxRate from "./calculateEffectiveTaxRate";

describe("calculateEffectiveTaxRate", () => {
  test("when income 100000 and tax payable 20000, effective tax rate will be 20%", () => {
    const result = calculateEffectiveTaxRate(100000, 20000);
    expect(result).toEqual(20);
  });
  test("when income 1234567 and tax payable 385587.65, effective tax rate will be 20%", () => {
    const result = calculateEffectiveTaxRate(1234567, 385587.65);
    expect(result).toEqual(31.23);
  });
});
