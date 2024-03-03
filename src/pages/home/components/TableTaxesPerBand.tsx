export interface ITableTaxesPerBandProps {
  data: {
    taxBracket: string;
    marginalTaxRate: string;
    taxableAmount: string;
    taxPayable: string;
  }[];
  total: string;
}

function TableTaxesPerBand({ data, total }: ITableTaxesPerBandProps) {
  return (
    <div className="">
      <div>
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Taxes Owed per Band
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          A list of all bands including their tax brackets, marginal tax rate,
          taxable amount and tax payable.
        </p>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Tax Bracket
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Marginal Tax Rate
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Amount Taxable
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                  >
                    Tax Payable
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map(
                  ({
                    taxBracket,
                    marginalTaxRate,
                    taxableAmount,
                    taxPayable,
                  }) => (
                    <tr key={taxBracket} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap p-4 text-sm text-gray-900 sm:pl-0">
                        {taxBracket}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-900">
                        {marginalTaxRate}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-900">
                        {taxableAmount}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 sm:pr-0">
                        {taxPayable}
                      </td>
                    </tr>
                  ),
                )}
                <tr className="divide-x divide-gray-200">
                  <td
                    colSpan={3}
                    align="right"
                    className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Total
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 sm:pr-0">
                    {total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableTaxesPerBand;
