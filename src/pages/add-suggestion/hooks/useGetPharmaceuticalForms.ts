import { useQuery } from '@tanstack/react-query';
import { getAllPharmaceuticalForms } from 'services/pharmaceutical-forms/allPharmaceuticalForms.service';
import { TpharmaceuticalForm } from 'types/pharmaceutical-form/pharmaceuticalForm.types';

export const useGetPharmaceuticalForms = () => {
  const { data: allPharmaceuticalForms } = useQuery<
    TpharmaceuticalForm[],
    any,
    { label: any; value: any }[]
  >(['allPharmaceuticalForms'], getAllPharmaceuticalForms, {
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
