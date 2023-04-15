import dayjs from "dayjs";
import { message } from "antd";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "~/services/general/user-info/userInfo.service";
import { TPrioritizationForm } from "~/types/prioritization/prioritization.types";
import { queryKeys } from "~/constant/react-query-keys";

import { addNewPrioritization as addNewPrioritizationService } from "services/prioritization/prioritizationSave.service";

import { addFilePrioritization as addFilePrioritizationService } from "services/prioritization/addFilePrioritization.service";
import { addNewLogSuggestion as addNewLogSuggestionService } from "services/product-suggestion/addSuggestionLog.service";
import { updateSuggestionStep } from "services/product-suggestion/updateSuggestion.service";

import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import { Actions, dateFormat } from "~/constant";
import { TFlow } from "~/types/flow/flow.types";
import { getFlowByCurrent } from "~/services/flow/getFlowByCurrent.service";
import { useNavigate } from "react-router-dom";

const { userInfo } = getUserInfo();

export const useSubmitPrioritization = (stepId: number, id?: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setLoading = useSetRecoilState(submitLoadingState);

  const { mutateAsync: addNewPrioritization } = useMutation(
    addNewPrioritizationService
  );

  const { mutateAsync: addFilePrioritization } = useMutation(
    addFilePrioritizationService
  );

  const { mutateAsync: addLogSuggestion } = useMutation(
    addNewLogSuggestionService
  );

  const { data: flowBysteps } = useQuery<TFlow[]>(
    [queryKeys.getFlowByCurrent],
    () => getFlowByCurrent(stepId),
    {
      refetchOnWindowFocus: false,
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );

  const onSubmit = async (state: TPrioritizationForm) => {
    const newData = {
      Title: "",
      SuggestionId: id!,
      PriorityId: state.PriorityId,
      PostponementDate: state.PostponementDate
        ? dayjs(state.PostponementDate).format(dateFormat)
        : null,
      Comment: state.Comment,
      ActionId: state.ActionId,
    };

    const file = state.File;

    const flowstep = flowBysteps?.find((i) => i.ActionId === state.ActionId);

    const log = {
      Title: userInfo.userFarsiName,
      ActionDate: new Date().toISOString(),
      Step: flowstep?.CurrentStep.Title ?? "",
      Result: flowstep?.Action?.Title ?? "",
      Comment: state.Comment ? state.Comment : "",
      SuggestionId: id!,
    };

    const suggestionUpdate = {
      ActionId: state.ActionId,
      CurrentStepId: flowstep?.NextStepId ?? 0,
    };

    if (
      state.ActionId === Actions.confirmation &&
      state.ActionId === undefined
    ) {
      return message.info("اولویت بندی وارد نشده است.");
    }

    if (
      state.ActionId === Actions.adjournment &&
      state.PostponementDate === undefined
    ) {
      return message.info("تاریخ تعویق  وارد نشده است.");
    }
    setLoading(true);
    await addNewPrioritization(newData, {
      onSuccess: (data) => {
        queryClient.invalidateQueries([queryKeys.getAllSuggestion], {
          exact: false,
        });

        if (file !== undefined && file.fileList.length > 0)
          addFilePrioritization({
            file: file,
            PrioritizationId: data.Id,
            SuggestionId: id!,
          });

        if (suggestionUpdate) updateSuggestionStep(id!, suggestionUpdate);

        if (log) addLogSuggestion(log);
      },
      onError: () => {},
    });
    message.success("پیشنهاد با موفقیت ثبت شد");
    setLoading(false);
    navigate("/cartable", { replace: true });
  };

  return {
    onSubmit,
  };
};
