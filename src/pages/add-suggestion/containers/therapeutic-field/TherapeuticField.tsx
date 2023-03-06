import { FormSelect, FormTextArea } from 'components';
import { useGetTherapeuticField } from 'pages/add-suggestion/hooks/useGetTherapeuticField';
import { TSuggestion } from 'types/suggestion/suggestion.types'

export const TherapeuticField = () => {
  const { allTherapeuticField } = useGetTherapeuticField();

  type TKeyOfForm = keyof TSuggestion
  return (
    <>
      <FormSelect<TKeyOfForm>
        name="TherapeuticFieldId"
        label="حوزه درمانی"
        showSearch
        options={allTherapeuticField}
        filterOption={(input: any, option: any) =>
          (option?.label ?? '').includes(input)
        }
      />

      <FormTextArea<TKeyOfForm>
        label="توضیحات"
        name="TherapeuticFieldComment"
        placeholder="توضیحات حوزه درمانی"
        autoSize={{ minRows: 4 }}
      />
    </>
  );
};
