import { queryKeys } from './../../../constant/react-query-keys/index';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { TSuggestionTable } from 'types/suggestion/suggestionTable.types';
import { getAllProductSuggestion } from 'services/product-suggestion/allProductSuggestion.service';
import { TSuggestion } from 'types/suggestion/suggestion.types';
import { getAllEmployee } from 'services/employee/allEmployee.service';
import { TEmployee } from 'types/employee/employee.types';

export const useGetContractors = () => {
  //   const contractorSearch = useRecoilValue(contractorSearchState)

  const { data: employee } = useQuery<{ data: TEmployee[] }>(
    [queryKeys.allEmployee],
    getAllEmployee,
    {
      refetchOnWindowFocus: false,
      suspense: true,
    }
  );

  const { data, error } = useQuery<
    TSuggestion[],
    unknown,
    TSuggestionTable[],
    [string, string]
  >([queryKeys.getAllSuggestion, ''], getAllProductSuggestion, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (data) =>
      data.map((item, index) => ({
        ...item,
        row: index + 1,
        key: item.Id,
        Owner:
          employee?.data.find(
            (i) =>
              Number(item.EmployeeId) === i.EmployeeId &&
              i.CCompanyId === Number(item.CompanyId)
          )?.FullName ?? '',
      })),
    onError: () => message.error('خطایی در دریافت اطلاعات رخ داده است'),
  });

  return {
    data,
    error,
  };
};
