import { useQuery } from "@tanstack/react-query";
import { getOfferResult } from "services/offer-result/offerResult.service";
import { TOfferResult } from "types/offer-result/offerResult.types";
import { queryKeys } from "constant/react-query-keys";

export const useGetOfferResult = () => {
  const { data: allResult } = useQuery<
    TOfferResult[],
    unknown,
    { label: string; value: number }[]
  >([queryKeys.getOfferResult], getOfferResult, {
    refetchOnWindowFocus: false,
    select: (items) =>
      items.map((item) => ({
        label: item.Title,
        value: item.Id,
      })),
  });

  return {
    allResult,
  };
};
