import { useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { dateFormat } from 'constant';
import dayjs from 'dayjs';
import { TTableconfirmationDocuments } from 'types/task/confirmationDocuments.types';
import { queryKeys } from 'constant/react-query-keys';
import { getAllConfirmationDocuments } from 'services/task/allConfirmationDocuments.service';

export const useGetConfirmationDocuments = () => {
  const { data, error, isLoading } = useQuery(
    [queryKeys.getConfirmationDocuments],
    getAllConfirmationDocuments,
    {
      refetchOnWindowFocus: false,
      suspense: true,
      select: (data) => {
        const mappedData: TTableconfirmationDocuments[] = data.map(
          (item, index) => {
            return {
              key: item.Id!.toString(),
              Id: item.Id,
              Title: item?.Title ?? '',
              Creator: item?.Creator ?? '',
              UploadDate: dayjs(item.UploadDate).format(dateFormat),
              Download: item?.Download ?? '',
              row: index + 1,
            };
          }
        );
        return mappedData;
      },
      onError: () => message.error('خطایی در دریافت اطلاعات رخ داده است'),
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
