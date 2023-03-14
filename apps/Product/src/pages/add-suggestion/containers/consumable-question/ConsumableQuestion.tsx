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
export const ConsumableQuestion = () => {
  return (
    <FormRadio
      label="آیا محصول با مورد مصرف مشابه توسط شرکت تولید شده است؟"
      name="SimilarConsumable"
      options={data}
    />
  );
};
