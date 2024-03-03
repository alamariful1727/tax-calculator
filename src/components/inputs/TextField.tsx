import { Controller, useFormContext } from "react-hook-form";

interface ITextFieldProps extends React.ComponentProps<"input"> {
  name: string;
  label: string;
}

function TextField({
  name,
  id = name,
  type = "text",
  label,
  ...rest
}: ITextFieldProps) {
  const { control } = useFormContext();

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
          <input
            type={type}
            id={id}
            className="mt-2 block h-10 w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...rest}
            {...field}
          />
          {error && (
            <p className="mt-2 text-sm italic text-red-500">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}

export default TextField;
