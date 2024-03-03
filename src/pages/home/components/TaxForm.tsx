import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import { TextField, Select } from "src/components/inputs";
import { ITaxRates } from "src/hooks/useTaxRates/useTaxRates";

export const yearOptions = [
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
];

export type TTaxInputs = {
  income: number;
  year: "2019" | "2020" | "2021" | "2022";
};

interface ITaxFormProps {
  formOptions: UseFormReturn<TTaxInputs>;
  onSubmit: SubmitHandler<TTaxInputs>;
  onReset: () => void;
  queryResult: { isFetching: boolean; isError: boolean; data?: ITaxRates };
}

function TaxForm({
  formOptions,
  onSubmit,
  onReset,
  queryResult: { isFetching },
}: ITaxFormProps) {
  return (
    <FormProvider {...formOptions}>
      <form onSubmit={formOptions.handleSubmit(onSubmit)} className="space-y-5">
        <TextField name="income" type="number" label="Annual Income" />
        <Select name="year" label="Tax Year" options={yearOptions} />
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={onReset}
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isFetching ? "..." : "Calculate"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default TaxForm;
