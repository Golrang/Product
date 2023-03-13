import { FormSelect, FormInput } from "sharepoint-golrang-design-system";
import { useGetPharmaceuticalForms } from "../../hooks/useGetPharmaceuticalForms";
import { useWatch } from "react-hook-form";
import { TKeyOfForm } from "types/suggestion/suggestion.types";

export const OtherPharmaceuticalForms = () => {
  const { allPharmaceuticalForms } = useGetPharmaceuticalForms();

  const selectedPharmaceuticalForm: number = useWatch({
    name: "OtherPharmaceuticalFormId",
  });

  return (
    <>
      <FormSelect<TKeyOfForm>
        name="OtherPharmaceuticalFormId"
        label="سایر اشکال دارویی موجود(بازار ایران)"
        showSearch
        options={allPharmaceuticalForms}
        filterOption={(input, option) =>
          (option?.label ?? "").toString().includes(input)
        }
      />

      {selectedPharmaceuticalForm === 35 && (
        <FormInput<TKeyOfForm>
          placeholder="سایر اشکال دارویی"
          name="OtherPharmaceuticalForm_Other"
          label="سایر درج شود"
        />
      )}
    </>
  );
};
