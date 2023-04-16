import { message } from "antd";
import { queryKeys } from "../../../constant/react-query-keys/index";
import { useQuery } from "@tanstack/react-query";
import { TFlow } from "~/types/flow/flow.types";
import { getFlowByCurrent } from "~/services/flow/getFlowByCurrent.service";

export const useGetFlowByStep = (stepId: number) => {
  const { data } = useQuery<
    TFlow[],
    unknown,
    { label: string; value: number }[]
  >([queryKeys.getFlowByCurrent], () => getFlowByCurrent(stepId), {
    refetchOnWindowFocus: false,
    // suspense: true,
    select: (items) =>
      items.map((item) => ({
        label: item.Action?.Title ? item.Action?.Title : "",
        value: item.ActionId,
      })),
    onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
  });
  return { data };
};
