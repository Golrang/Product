import { useQuery } from '@tanstack/react-query';
import { getAllOfferReason } from 'services/offer-reason/allOfferReason.service';
import { TOfferReason}  from 'types/offer-reason/offerReason.types'
import { queryKeys } from 'constant/react-query-keys';

export const useGetOfferReason = () => {
  const { data: allOfferReason } = useQuery<
  TOfferReason[],
    unknown,
    { label: string; value: number }[]
  >([queryKeys.getOfferReason], getAllOfferReason, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (items) =>
      items.map((item) => ({
        label: item.Title,
        value: item.Id,
      })),
  });

  return {
    allOfferReason,
  };
};
