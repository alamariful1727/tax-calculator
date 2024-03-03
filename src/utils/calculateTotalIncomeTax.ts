/* eslint-disable no-restricted-syntax */
import { ITaxBracket, ITaxRates } from "src/hooks/useTaxRates/useTaxRates";

export interface ITaxBracketWithAmount extends ITaxBracket {
  taxableAmount: number;
  taxPayable: number;
}

export interface ICalculateIncomeTax {
  totalTax: number;
  taxBracketsWithAmount: ITaxBracketWithAmount[];
}

function calculateIncomeTax(
  income: number,
  taxRates: ITaxRates,
): ICalculateIncomeTax {
  const taxBracketsWithAmount: ITaxBracketWithAmount[] = [];
  let remainingIncome = income;
  let totalTax = 0;

  for (let i = 0; i < taxRates.tax_brackets.length; i += 1) {
    const bracket = taxRates.tax_brackets[i];
    const bracketWithAmount: ITaxBracketWithAmount = {
      ...bracket,
      taxableAmount: 0,
      taxPayable: 0,
    };

    if (remainingIncome <= 0) {
      taxBracketsWithAmount.push(bracketWithAmount);
      break;
    }

    const taxableAmount = Math.min(
      remainingIncome,
      bracket.max ? bracket.max - bracket.min : Infinity,
    );
    const taxPayable = taxableAmount * bracket.rate;

    bracketWithAmount.taxableAmount = taxableAmount;
    bracketWithAmount.taxPayable = taxPayable;

    totalTax += taxPayable;
    remainingIncome -= taxableAmount;

    taxBracketsWithAmount.push(bracketWithAmount);
  }

  return { totalTax: parseFloat(totalTax.toFixed(2)), taxBracketsWithAmount };
}

export default calculateIncomeTax;
