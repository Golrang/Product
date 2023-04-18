import { useQuery } from "@tanstack/react-query";
import { getAllTherapeuticField } from "services/therapeutic-field/allTherapeuticField.service";
import { TTherapeuticField } from "types/therapeutic-field/therapeuticField.types";
import { queryKeys } from "constant/react-query-keys";

export const useGetTherapeuticField = () => {
  const { data: allTherapeuticField } = useQuery<
    TTherapeuticField[],
    unknown,
    { label: string; value: number }[]
  >([queryKeys.getTherapeuticField], getAllTherapeuticField, {
    refetchOnWindowFocus: false,
    select: (items) =>
      items.map((item) => ({
        label: item.Title ?? "",
        value: item.Id ?? 0,
      })),
  });

  return {
    allTherapeuticField,
  };
};
