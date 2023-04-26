import { useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { getLogBySuggestionId } from "services/task/allLogs.service";
import { queryKeys } from "constant/react-query-keys";
import dayjs from "dayjs";
import { TTableSuggestionLog } from "~/types/suggestion/suggestionLog.types";

export const useGetHistoryOfActionsById = (id: number) => {
  const { data, error, isLoading } = useQuery(
    [queryKeys.getHistoryOfActions],
    () => getLogBySuggestionId(id),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        const mappedData: TTableSuggestionLog[] = data.map((item, index) => {
          return {
            ...item,
            key: item.Id,
            row: index + 1,
            ActionDate: dayjs(item.ActionDate).format("YYYY/MM/DD"),
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
