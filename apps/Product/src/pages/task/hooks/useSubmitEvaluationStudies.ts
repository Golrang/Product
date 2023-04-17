import { message } from "antd";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "~/services/general/user-info/userInfo.service";
import { queryKeys } from "~/constant/react-query-keys";

import { addNewEvaluationStudies as addNewEvaluationStudiesService } from "services/evaluation-studies/evaluationStudiesSave.service";

import { addFileEvaluationStudies as addFileEvaluationStudiesService } from "services/evaluation-studies/addFileEvaluationStudies.service";
import { addNewLogSuggestion as addNewLogSuggestionService } from "services/product-suggestion/addSuggestionLog.service";
import { updateSuggestionStep } from "services/product-suggestion/updateSuggestion.service";

import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import { TFlow } from "~/types/flow/flow.types";
import { getFlowByCurrent } from "~/services/flow/getFlowByCurrent.service";
import { useNavigate } from "react-router-dom";
import { TEvaluationStudiesForm } from "~/types/evaluation-studies/evaluationStudies.types";

const { userInfo } = getUserInfo();

export const useSubmitEvaluationStudies = (stepId: number, id?: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setLoading = useSetRecoilState(submitLoadingState);

  const { mutateAsync: addNewEvaluationStudies } = useMutation(
    addNewEvaluationStudiesService
  );

  const { mutateAsync: addFileEvaluationStudies } = useMutation(
    addFileEvaluationStudiesService
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

  const onSubmit = async (state: TEvaluationStudiesForm) => {
    const newData = {
      Title: "",
      SuggestionId: id ?? 0,
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
      SuggestionId: id ?? 0,
    };

    const suggestionUpdate = {
      ActionId: state.ActionId,
      CurrentStepId: flowstep?.NextStepId ?? 0,
    };

    setLoading(true);
    await addNewEvaluationStudies(newData, {
      onSuccess: (data) => {
        queryClient.invalidateQueries([queryKeys.getAllSuggestion], {
          exact: false,
        });

        if (file !== undefined && file.fileList.length > 0)
          addFileEvaluationStudies({
            file: file,
            EvaluationStudiesId: data.Id,
            SuggestionId: id ?? 0,
          });

        if (suggestionUpdate && id) updateSuggestionStep(id, suggestionUpdate);

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
