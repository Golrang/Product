import { queryKeys } from "./../../../constant/react-query-keys/index";
import { useQuery } from "@tanstack/react-query";
import { TEmployee } from "types/employee/employee.types";
import { getAllEmployee } from "services/employee/allEmployee.service";

export const useGetContractors = () => {
  const { data, error } = useQuery<
    { data: TEmployee[] },
    any,
    { label: any; value: any }[]
  >([queryKeys.allEmployee], getAllEmployee, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (items) =>
      items.data.map((item) => ({
        label: `${item.FullName} / ${item.CEmployeeNumber}`,
        value:
          item.Id +
          "*" +
          item.FullName +
          "*" +
          item.CEmployeeNumber +
          "*" +
          item.EmployeeId +
          "*" +
          item.CEmail +
          "*" +
          item.CCompanyId +
          "*" +
          item.WorkPlaceId,
      })),
  });

  return {
    data,
    error,
  };
};
