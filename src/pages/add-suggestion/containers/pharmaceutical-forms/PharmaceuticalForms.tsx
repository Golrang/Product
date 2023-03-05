import { FormSelect, FormInput } from 'components';
import { useGetPharmaceuticalForms } from '../../hooks/useGetPharmaceuticalForms';
import { useWatch } from 'react-hook-form';

export const PharmaceuticalForms = () => {
  const { allPharmaceuticalForms } = useGetPharmaceuticalForms();
  const selectedPharmaceuticalForm = useWatch({
    name: 'PharmaceuticalFormId',
  });
  console.log('first', selectedPharmaceuticalForm);

  return (
    <>
      <FormSelect
        name="PharmaceuticalFormId"
        label="شکل دارویی"
        showSearch
        options={allPharmaceuticalForms}
        filterOption={(input: any, option: any) =>
          (option?.label ?? '').includes(input)
        }
      />

      {selectedPharmaceuticalForm === 35 && (
        <FormInput
          placeholder="سایر اشکال دارویی"
          name="OtherPharmaceuticalForm"
          type="string"
          label="سایر درج شود"
        />
      )}
    </>
  );
};
