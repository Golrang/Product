import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { getTherapeuticField } from 'services/therapeutic-field/therapeuticField.services';
import { TTherapeuticField } from 'types/TherapeuticField/TherapeuticField.types';

export const useGetTherapeuticField = () => {
  const { data, isLoading, error } = useQuery<
    TTherapeuticField[],
    unknown,
    { label: string; value: string }[]
  >([getTherapeuticField], getTherapeuticField, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (data) =>
      data.map((item) => ({
        label: item.Title,
        value: item.Id.toString(),
      })),
    onError: () => message.error('خطایی در دریافت اطلاعات رخ داده است'),
  });

  return {
    data,
    isLoading,
    error,
  };
};
