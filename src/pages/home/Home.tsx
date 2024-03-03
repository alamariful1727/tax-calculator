import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TaxForm, {
  TTaxInputs,
} from "src/components/forms/TaxCalculate/TaxCalculate";

function HomePage() {
  const [formData, setFormData] = useState<TTaxInputs>();
  const formOptions = useForm<TTaxInputs>({
    defaultValues: {
      income: 0,
      year: "2022",
    },
  });

  const onSubmitHandler: SubmitHandler<TTaxInputs> = useCallback((data) => {
    setFormData(data);
  }, []);

  const onResetHandler = () => {
    formOptions.reset();
  };

  return (
    <div className="mx-auto max-w-lg py-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Tax Calculator
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Enter your annual income and tax year to calculate total income tax.
      </p>

      <div className="mt-10">
        <TaxForm
          onSubmit={onSubmitHandler}
          formOptions={formOptions}
          onReset={onResetHandler}
        />
      </div>

      <div>
        <pre>{JSON.stringify(formData, undefined, 2)}</pre>
      </div>
    </div>
  );
}

export default HomePage;
