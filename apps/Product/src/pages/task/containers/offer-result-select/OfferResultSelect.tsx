import { FormSelect } from "sharepoint-golrang-design-system";
import { TKeyOfForm } from "types/offer-result/offerResult.types";
import { useGetOfferResult } from "../../hooks/useGetOfferResult";
export const OfferResultSelect = () => {
  const { allResult } = useGetOfferResult();
  return (
    <>
      <FormSelect<TKeyOfForm>
        name="Title"
        label="نتایج"
        mode="multiple"
        showSearch
        options={allResult}
        filterOption={(input, option) =>
          (option?.label ?? "").toString().includes(input)
        }
      />
    </>
  );
};
