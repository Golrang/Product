import { useQuery } from "@tanstack/react-query";
import { getPriority } from "services/priority/priority.service";
import { TPriority } from "types/priority/priority.types";
import { queryKeys } from "constant/react-query-keys";

export const useGetPriority = () => {
  const { data: allPriority } = useQuery<
    TPriority[],
    unknown,
    { label: string; value: number }[]
  >([queryKeys.getPriority], getPriority, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (items) =>
      items.map((item) => ({
        label: item.Title,
        value: item.Id,
      })),
  });

  return {
    allPriority,
  };
};
