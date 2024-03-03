import { Controller, useFormContext } from "react-hook-form";

interface ISelectProps extends React.ComponentProps<"select"> {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

function Select({
  name,
  id = name,
  label,
  options,
  defaultValue,
  ...rest
}: ISelectProps) {
  const { control } = useFormContext();

  const renderOptions = () =>
    options.map((option) => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label
            htmlFor={id}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
          <select
            id={id}
            className="mt-2 block h-10 w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={defaultValue}
            {...rest}
            {...field}
          >
            {renderOptions()}
          </select>
          {error && (
            <p className="mt-2 text-sm italic text-red-500">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}

export default Select;
