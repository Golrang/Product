import { message } from "antd";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "~/services/general/user-info/userInfo.service";
import { queryKeys } from "~/constant/react-query-keys";

import { updateResultOfSuggestionFinalReview as updateResultOfSuggestionService } from "services/result-of-suggestion/resultOfSuggestionUpdate.service";

import { addFileFinalReview as addFileFinalReviewService } from "services/final-review/addFileFinalReview.service";

import { addNewLogSuggestion as addNewLogSuggestionService } from "services/product-suggestion/addSuggestionLog.service";
import { updateSuggestionStep } from "services/product-suggestion/updateSuggestion.service";

import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import { TFlow } from "~/types/flow/flow.types";
import { getFlowByCurrent } from "~/services/flow/getFlowByCurrent.service";
import { useNavigate } from "react-router-dom";
import { TPrioritizationForm } from "~/types/prioritization/prioritization.types";
const { userInfo } = getUserInfo();

export const useSubmituseSubmitFinalReview = (
  stepId: number,
  id: number,
  resultSuggestionId?: number
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setLoading = useSetRecoilState(submitLoadingState);

  const { mutateAsync: updateResultOfSuggestion } = useMutation(
    updateResultOfSuggestionService
  );

  const { mutateAsync: addFileFinalReview } = useMutation(
    addFileFinalReviewService
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
      Id: resultSuggestionId ?? 0,
      ActionId: state.ActionId,
      Comment_FinalReview: state.Comment,
    };

    const file = state.File;

    const flowstep = flowBysteps?.find((i) => i.ActionId === state.ActionId);

    const log = {
      Title: userInfo.userFarsiName,
      ActionDate: new Date().toISOString(),
      Step: flowstep?.CurrentStep.Title ?? "",
      Result: flowstep?.Action?.Title ?? "",
      Comment: state.Comment ? state.Comment : "",
      SuggestionId: id ?? 0,
    };

    const suggestionUpdate = {
      ActionId: state.ActionId,
      CurrentStepId: flowstep?.NextStepId ?? 0,
    };

    setLoading(true);
    await updateResultOfSuggestion(newData, {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getAllSuggestion], {
          exact: false,
        });

        if (
          file !== undefined &&
          file.fileList.length > 0 &&
          resultSuggestionId
        )
          addFileFinalReview({
            file: file,
            FinalReviewId: resultSuggestionId,
            SuggestionId: id,
          });

        if (suggestionUpdate && id) {
          updateSuggestionStep(id, suggestionUpdate);
        }

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
