import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TaxForm, { TTaxInputs } from "src/pages/home/components/TaxForm";
import useTaxRates from "src/hooks/useTaxRates/useTaxRates";
import calculateEffectiveTaxRate from "src/utils/calculateEffectiveTaxRate";
import calculateTotalIncomeTax, {
  ICalculateIncomeTax,
} from "src/utils/calculateTotalIncomeTax";
import formatCurrency from "src/utils/formatCurrency";
import formatTaxesPerBandData from "src/utils/formatTaxesPerBandData";
import { yupResolver } from "@hookform/resolvers/yup";
import DisplayTaxDetails from "./components/DisplayTaxDetails";
import TableTaxesPerBand from "./components/TableTaxesPerBand";
import TaxFormSchema from "./components/TaxForm.validation";

function HomePage() {
  const [formData, setFormData] = useState<TTaxInputs>();
  const formOptions = useForm<TTaxInputs>({
    defaultValues: {
      income: 0,
      year: "2022",
    },
    resolver: yupResolver(TaxFormSchema),
  });
  const { isFetching, isError, data, error } = useTaxRates({
    year: formData?.year || "2022",
    isEnabled: !!formData,
  });
  const queryClient = useQueryClient();

  const onSubmitHandler: SubmitHandler<TTaxInputs> = useCallback(
    (values) => {
      setFormData(values);
      queryClient.invalidateQueries({ queryKey: ["tax-year", values.year] });
    },
    [queryClient],
  );

  const calculatedTax = useMemo((): ICalculateIncomeTax | null => {
    if (formData && data) {
      return calculateTotalIncomeTax(formData.income, data);
    }

    return null;
  }, [data, formData]);

  const onResetHandler = useCallback(() => {
    formOptions.reset();
  }, [formOptions]);

  return (
    <div className="mx-auto max-w-2xl py-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Tax Calculator
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Enter your annual income and tax year to calculate total income tax.
      </p>

      <div className="mt-10 mb-16">
        <TaxForm
          onSubmit={onSubmitHandler}
          formOptions={formOptions}
          onReset={onResetHandler}
          queryResult={{ isFetching, isError, data }}
        />
      </div>

      {!isFetching && isError && (
        <p className="my-4 text-red-500">{error.message}</p>
      )}

      {!isFetching && !isError && calculatedTax && formData && (
        <div className="space-y-16">
          <DisplayTaxDetails
            data={[
              {
                label: "Total Tax Owed",
                value: formatCurrency(calculatedTax.totalTax),
              },
              {
                label: "Effective Tax Rate",
                value: `${calculateEffectiveTaxRate(
                  formData.income,
                  calculatedTax.totalTax,
                )}%`,
              },
            ]}
          />
          <TableTaxesPerBand
            data={formatTaxesPerBandData(calculatedTax.taxBracketsWithAmount)}
            total={formatCurrency(calculatedTax.totalTax)}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
