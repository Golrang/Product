import { FormTextArea } from 'sharepoint-golrang-design-system';
import { TKeyOfForm } from 'types/suggestion/suggestion.types';

export const TherapeuticFieldComment = () => {
  return (
    <FormTextArea<TKeyOfForm>
      label="توضیحات"
      name="TherapeuticFieldComment"
      placeholder="توضیحات حوزه درمانی"
      autoSize={{ minRows: 4 }}
    />
  );
};
