const calculateEffectiveTaxRate = (
  income: number,
  taxPayableAmount: number,
): number => parseFloat(((taxPayableAmount / income) * 100).toFixed(2));

export default calculateEffectiveTaxRate;
