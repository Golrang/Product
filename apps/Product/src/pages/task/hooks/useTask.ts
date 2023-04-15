import { message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "~/constant/react-query-keys";
import { getAllSuggestionById } from "~/services/product-suggestion/getProductSuggestion.service";
import { TSuggestion } from "~/types/suggestion/suggestion.types";

export const useTask = (id: number) => {
  const {
    data: suggestion,
    isLoading: suggestionLoading,
    error: suggestionError,
  } = useQuery<TSuggestion[]>(
    [queryKeys.getAllSuggestionById],
    () => getAllSuggestionById(id),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );

  return { suggestion, suggestionLoading, suggestionError };
};
