import { FormSelect } from 'sharepoint-golrang-design-system';
import { useGetOfferReason } from 'pages/add-suggestion/hooks/useGetOfferReason';
import { TKeyOfForm } from 'types/suggestion/suggestion.types';

export const OfferReason = () => {
  const { allOfferReason } = useGetOfferReason();

  return (
    <FormSelect<TKeyOfForm>
      name="OfferReasonId"
      label="علت پیشنهادی"
      mode="multiple"
      showSearch
      options={allOfferReason}
      filterOption={(input, option) =>
        (option?.label ?? '').toString().includes(input)
      }
    />
  );
};
