import { TPrioritization } from "./../../../types/prioritization/prioritization.types";
import { message } from "antd";
import { queryKeys } from "../../../constant/react-query-keys/index";
import { useQuery } from "@tanstack/react-query";
import { getAllPrioritization } from "~/services/prioritization/allPrioritization.service";

export const useGetPrioritization = () => {
  const { data } = useQuery<TPrioritization[]>(
    [queryKeys.getAllPrioritization],
    getAllPrioritization,
    {
      refetchOnWindowFocus: false,
      suspense: true,
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );
  return { data };
};
