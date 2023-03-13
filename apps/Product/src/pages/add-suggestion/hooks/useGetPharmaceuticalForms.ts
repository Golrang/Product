import { useQuery } from "@tanstack/react-query";
import { getAllPharmaceuticalForms } from "services/pharmaceutical-forms/allPharmaceuticalForms.service";
import { TpharmaceuticalForm } from "types/pharmaceutical-form/pharmaceuticalForm.types";
import { queryKeys } from "constant/react-query-keys";

export const useGetPharmaceuticalForms = () => {
  const { data: allPharmaceuticalForms } = useQuery<
    TpharmaceuticalForm[],
    any,
    { label: any; value: any }[]
  >([queryKeys.getPharmaceuticalForms], getAllPharmaceuticalForms, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (items) =>
      items.map((item) => ({
        label: item.Title,
        value: item.Id,
      })),
  });

  return {
    allPharmaceuticalForms,
  };
};
