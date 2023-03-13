import { useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { getAllLogs } from "services/task/allLogs.service";
import { TTableLog } from "types/task/historyOfActions.types";
import { queryKeys } from "constant/react-query-keys";

export const useGetHistoryOfActions = () => {
  const { data, error, isLoading } = useQuery(
    [queryKeys.getHistoryOfActions],
    getAllLogs,
    {
      refetchOnWindowFocus: false,
      suspense: true,
      select: (data) => {
        const mappedData: TTableLog[] = data.map((item, index) => {
          return {
            key: item.Id!.toString(),
            Id: item.Id,
            Actioner: item?.Actioner ?? "",
            ActionDate: item?.ActionDate ?? "",
            Step: item?.Step ?? "",
            Result: item?.Result ?? "",
            Description: item?.Description ?? "",
            row: index + 1,
          };
        });
        return mappedData;
      },
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
