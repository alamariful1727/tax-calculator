interface IDisplayTaxDetailsProps {
  data: {
    label: string;
    value: string;
  }[];
}

function DisplayTaxDetails({ data }: IDisplayTaxDetailsProps) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Tax Details
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {data.map(({ label, value }) => (
          <div
            key={label}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {label}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default DisplayTaxDetails;
