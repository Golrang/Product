import { FormTextArea } from 'components';
import { TKeyOfForm } from 'types/suggestion/suggestion.types'

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
