import { FormRadio } from "sharepoint-golrang-design-system";

const data = [
  {
    value: "true",
    label: "بله",
  },
  {
    value: "false",
    label: "خیر",
  },
];
export const PharmaceuticalFormsQuestion = () => {
  return (
    <FormRadio
      label="آیا محصول با فرم دارویی مشابه توسط شرکت تولید شده است؟"
      name="SimilarPharmaceuticalForm"
      options={data}
    />
  );
};
