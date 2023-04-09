import { message } from "antd";
import { TStep } from "~/types/step/step.types";
import { queryKeys } from "./../../../constant/react-query-keys/index";
import { useQuery } from "@tanstack/react-query";
import { getAllStep } from "~/services/step/allStep.service";

export const useGetStep = () => {
  const { data } = useQuery<TStep[]>([queryKeys.getAllStep], getAllStep, {
    refetchOnWindowFocus: false,
    suspense: true,
    onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
  });
  return { data };
};
