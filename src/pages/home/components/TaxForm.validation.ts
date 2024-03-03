import * as yup from "yup";
import { TTaxInputs, yearOptions } from "./TaxForm";

const years = yearOptions.map(({ value }) => value) as TTaxInputs["year"][];

const TaxFormSchema = yup
  .object()
  .shape({
    income: yup.number().positive().required(),
    year: yup.string().oneOf(years).required(),
  })
  .required();

export default TaxFormSchema;
