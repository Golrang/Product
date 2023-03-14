import { FormSelect, FormInput } from "sharepoint-golrang-design-system";
import { useGetPharmaceuticalForms } from "../../hooks/useGetPharmaceuticalForms";
import { useWatch } from "react-hook-form";
import { TKeyOfForm } from "types/suggestion/suggestion.types";

export const PharmaceuticalForms = () => {
  const { allPharmaceuticalForms } = useGetPharmaceuticalForms();
  const selectedPharmaceuticalForm = useWatch({
    name: "PharmaceuticalFormId",
  });

  return (
    <>
      <FormSelect<TKeyOfForm>
        name="PharmaceuticalFormId"
        label="شکل دارویی"
        showSearch
        options={allPharmaceuticalForms}
        filterOption={(input, option) =>
          (option?.label ?? "").toString().includes(input)
        }
      />

      {selectedPharmaceuticalForm === 35 && (
        <FormInput<TKeyOfForm>
          placeholder="سایر اشکال دارویی"
          name="PharmaceuticalForm_Other"
          label="سایر درج شود"
        />
      )}
    </>
  );
};
