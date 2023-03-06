import { FormRadio } from 'components';

export const PharmaceuticalFormsQuestion = () => {
  let data = [
    {
      value: 'true',
      label: 'بله',
    },
    {
      value: 'false',
      label: 'خیر',
    },
  ];
  return (
    <FormRadio
      label="آیا محصول با فرم دارویی مشابه تولید شده است؟"
      name="SimilarPharmaceuticalForm"
      options={data}
    />
  );
};
