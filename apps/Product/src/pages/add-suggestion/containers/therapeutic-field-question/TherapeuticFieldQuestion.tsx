import { FormRadio } from 'sharepoint-golrang-design-system';

const data = [
  {
    value: 'true',
    label: 'بله',
  },
  {
    value: 'false',
    label: 'خیر',
  },
];
export const TherapeuticFieldQuestion = () => {
  return (
    <FormRadio
      label="آیا محصول با حوزه درمانی مشابه توسط شرکت تولید شده است؟"
      name="SimilarTherapeuticField"
      options={data}
    />
  );
};
