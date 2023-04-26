import { message } from "antd";
import { queryKeys } from "../../../constant/react-query-keys/index";
import { useQuery } from "@tanstack/react-query";
import { TResultOfSuggestion } from "~/types/result-of-suggestion/resultOfSuggestion.types";
import {
  getAllResultOfSuggestion,
  getResultOfSuggestionById,
} from "~/services/result-of-suggestion/getResultOfSuggestion.service";

export const useGetResultOfSuggestion = () => {
  const { data } = useQuery<TResultOfSuggestion[]>(
    [queryKeys.getAllResultOfSuggestion],
    getAllResultOfSuggestion,
    {
      refetchOnWindowFocus: false,
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );
  return { data };
};

export const useGetResultOfSuggestionById = (id: number) => {
  const {
    data: resultSuggestion,
    isLoading: resultSuggestionLoading,
    error: resultSuggestionError,
  } = useQuery<TResultOfSuggestion[]>(
    [queryKeys.getResultOfSuggestionById],
    () => getResultOfSuggestionById(id),
    {
      refetchOnWindowFocus: false,
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );

  return { resultSuggestion, resultSuggestionLoading, resultSuggestionError };
};
