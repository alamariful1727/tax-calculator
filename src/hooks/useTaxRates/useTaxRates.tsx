import { useQuery } from "@tanstack/react-query";
import restAPI from "src/api";
import { TTaxInputs } from "src/pages/home/components/TaxForm";

export interface ITaxBracket {
  max?: number;
  min: number;
  rate: number;
}

export interface ITaxRates {
  tax_brackets: ITaxBracket[];
}

interface IUseTaxRatesProps {
  year: TTaxInputs["year"];
  isEnabled: boolean;
}

const useTaxRates = ({ year, isEnabled }: IUseTaxRatesProps) => {
  return useQuery<ITaxRates>({
    queryKey: ["tax-year", year],
    queryFn: async () => {
      try {
        const result = await restAPI.get<ITaxRates>(
          `/tax-calculator/tax-year/${year}`,
        );
        return result.data;
      } catch (error: any) {
        // ? log to an external API like TrackJS: https://trackjs.com/
        throw new Error("Request failed. Please try again!");
      }
    },
    enabled: isEnabled,
    retry: 0,
    refetchOnWindowFocus: false,
  });
};

export default useTaxRates;
