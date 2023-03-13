import { FormRadio } from "sharepoint-golrang-design-system";
import { TKeyOfForm } from "~/types/suggestion/suggestion.types";

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
export const TherapeuticFieldQuestion = () => {
  return (
    <FormRadio<TKeyOfForm>
      label="آیا محصول با حوزه درمانی مشابه توسط شرکت تولید شده است؟"
      name="SimilarTherapeuticField"
      options={data}
    />
  );
};
