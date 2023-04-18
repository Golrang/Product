import { getAllFlow } from "./../../../services/flow/allFlow.service";
import { message } from "antd";
import { queryKeys } from "../../../constant/react-query-keys/index";
import { useQuery } from "@tanstack/react-query";
import { TFlow } from "~/types/flow/flow.types";

export const useGetFlow = () => {
  const { data } = useQuery<TFlow[]>([queryKeys.getAllFlow], getAllFlow, {
    refetchOnWindowFocus: false,
    onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
  });
  return { data };
};
