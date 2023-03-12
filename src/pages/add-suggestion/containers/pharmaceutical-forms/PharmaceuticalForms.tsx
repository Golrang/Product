import { FormSelect, FormInput } from 'components';
import { useGetPharmaceuticalForms } from '../../hooks/useGetPharmaceuticalForms';
import { useWatch } from 'react-hook-form';
import { TKeyOfForm } from 'types/suggestion/suggestion.types';
import { pharmaceuticalFormsOtherId } from 'constant';

export const PharmaceuticalForms = () => {
  const { allPharmaceuticalForms } = useGetPharmaceuticalForms();
  const selectedPharmaceuticalForm = useWatch({
    name: 'PharmaceuticalFormId',
  });
  return (
    <>
      <FormSelect<TKeyOfForm>
        name="PharmaceuticalFormId"
        label="شکل دارویی"
        showSearch
        options={allPharmaceuticalForms}
        filterOption={(input, option) =>
          (option?.label ?? '').toString().includes(input)
        }
      />

      {selectedPharmaceuticalForm === pharmaceuticalFormsOtherId && (
        <FormInput<TKeyOfForm>
          placeholder="سایر اشکال دارویی"
          name="PharmaceuticalForm_Other"
          label="سایر درج شود"
        />
      )}
    </>
  );
};
