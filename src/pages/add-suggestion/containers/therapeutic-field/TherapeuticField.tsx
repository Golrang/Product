import { FormSelect, FormTextArea } from 'components';
import { useGetTherapeuticField } from 'pages/add-suggestion/hooks/useGetTherapeuticField';
import { TKeyOfForm } from 'types/suggestion/suggestion.types'

export const TherapeuticField = () => {
  const { allTherapeuticField } = useGetTherapeuticField();

  
  return (
    <>
      <FormSelect<TKeyOfForm>
        name="TherapeuticFieldId"
        label="حوزه درمانی"
        showSearch
        options={allTherapeuticField}
        filterOption={(input, option) =>
          (option?.label ?? '').toString().includes(input)
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
