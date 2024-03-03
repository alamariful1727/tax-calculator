import { ITableTaxesPerBandProps } from "src/pages/home/components/TableTaxesPerBand";
import { ITaxBracketWithAmount } from "./calculateTotalIncomeTax";
import formatCurrency from "./formatCurrency";

const formatTaxesPerBandData = (
  taxBracketsWithAmount: ITaxBracketWithAmount[],
): ITableTaxesPerBandProps["data"] =>
  taxBracketsWithAmount.map(({ min, max, rate, taxableAmount, taxPayable }) => {
    return {
      taxBracket: `${formatCurrency(min)} - ${
        max ? formatCurrency(max) : "Over"
      }`,
      marginalTaxRate: `${(rate * 100).toFixed(2)}%`,
      taxableAmount: formatCurrency(taxableAmount),
      taxPayable: formatCurrency(taxPayable),
    };
  });

export default formatTaxesPerBandData;
