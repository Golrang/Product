import { useQuery } from '@tanstack/react-query';
import { getAllTherapeuticField } from 'services/therapeutic-field/allTherapeuticField.service';
import { TtherapeuticField } from 'types/therapeutic-field/therapeuticField.types';

export const useGetTherapeuticField = () => {
  const { data: allTherapeuticField } = useQuery<
    TtherapeuticField[],
    any,
    { label: any; value: any }[]
  >(['allTherapeuticField'], getAllTherapeuticField, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (items) =>
      items.map((item) => ({
        label: item.Title,
        value: item.Id,
      })),
  });

  return {
    allTherapeuticField,
  };
};
