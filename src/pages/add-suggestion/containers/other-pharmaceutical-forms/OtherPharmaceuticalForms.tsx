import { FormSelect, FormInput } from 'components';
import { useGetPharmaceuticalForms } from '../../hooks/useGetPharmaceuticalForms';
import { useWatch } from 'react-hook-form';

export const OtherPharmaceuticalForms = () => {
  const { allPharmaceuticalForms } = useGetPharmaceuticalForms();

  const selectedPharmaceuticalForm: number = useWatch({
    name: 'OtherPharmaceuticalFormId',
  });

  return (
    <>
      <FormSelect
        name="OtherPharmaceuticalFormId"
        label="سایر اشکال دارویی موجود(بازار ایران)"
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
