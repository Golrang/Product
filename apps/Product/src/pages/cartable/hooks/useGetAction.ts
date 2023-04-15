import { message } from "antd";
import { queryKeys } from "../../../constant/react-query-keys/index";
import { useQuery } from "@tanstack/react-query";
import { getAllAction } from "~/services/action/allAction.service";
import { TAction } from "~/types/action/action.types";

export const useGetAction = () => {
  const { data } = useQuery<TAction[]>([queryKeys.getAllAction], getAllAction, {
    refetchOnWindowFocus: false,
    suspense: true,
    onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
  });
  return { data };
};
