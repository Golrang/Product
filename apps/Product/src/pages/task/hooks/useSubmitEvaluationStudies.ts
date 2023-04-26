import { message } from "antd";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getUserInfo } from "~/services/general/user-info/userInfo.service";
import { queryKeys } from "~/constant/react-query-keys";

import {
  TAddNewResultOfSuggestion,
  updateResultOfSuggestion as updateResultOfSuggestionService,
} from "services/result-of-suggestion/resultOfSuggestionUpdate.service";

import { addFileEvaluationStudies as addFileEvaluationStudiesService } from "services/evaluation-studies/addFileEvaluationStudies.service";
import { addNewEvaluationStudies as addNewEvaluationStudiesService } from "services/evaluation-studies/evaluationStudiesSave.service";

import { addNewLogSuggestion as addNewLogSuggestionService } from "services/product-suggestion/addSuggestionLog.service";
import { updateSuggestionStep } from "services/product-suggestion/updateSuggestion.service";

import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import { TFlow } from "~/types/flow/flow.types";
import { getFlowByCurrent } from "~/services/flow/getFlowByCurrent.service";
import { useNavigate } from "react-router-dom";
import { TEvaluationStudiesForm } from "~/types/evaluation-studies/evaluationStudies.types";
import { TResultOfSuggestion } from "~/types/result-of-suggestion/resultOfSuggestion.types";
import { countEvaluationStudiesGroupState } from "~/recoil-store/evaluation-studies/EvaluationStudiesGroupState";
const { userInfo } = getUserInfo();

export const useSubmitEvaluationStudies = (
  stepId: number,
  id: number,
  resultSuggestion?: TResultOfSuggestion
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setLoading = useSetRecoilState(submitLoadingState);

  const { mutateAsync: updateResultOfSuggestion } = useMutation(
    updateResultOfSuggestionService
  );

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
  const countEvaluation = useRecoilValue(countEvaluationStudiesGroupState);
  const onSubmit = async (state: TEvaluationStudiesForm) => {
    let newData = {} as TAddNewResultOfSuggestion;
    let evaluation_Num = resultSuggestion?.Evaluation_Num ?? 0;
    if (
      resultSuggestion &&
      (evaluation_Num === 0 || evaluation_Num < countEvaluation)
    ) {
      newData = {
        Id: resultSuggestion.Id,
        Evaluation_Num: (evaluation_Num += 1),
        ActionId: resultSuggestion.ActionId,
      };
    } else {
      newData = {
        Id: resultSuggestion?.Id ?? 0,
        Evaluation_Num: resultSuggestion ? (evaluation_Num += 1) : 0,
        ActionId: state.ActionId,
      };
    }

    const evaluationdata = {
      SuggestionId: id,
      Comment: state.Comment,
      ActionId: state.ActionId,
      ResultOfSuggestionId: resultSuggestion?.Id ?? 0,
      CompanyId: userInfo.companyID,
      EmployeeId: userInfo.employeeId,
      Title: "",
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
        if (evaluationdata) addNewEvaluationStudies(evaluationdata);

        if (
          file !== undefined &&
          file.fileList.length > 0 &&
          resultSuggestion?.Id
        )
          addFileEvaluationStudies({
            file: file,
            EvaluationStudiesId: resultSuggestion.Id,
            SuggestionId: id,
          });

        if (
          suggestionUpdate &&
          id &&
          resultSuggestion &&
          resultSuggestion.Evaluation_Num + 1 === countEvaluation
        ) {
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

// import { message } from "antd";
// import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
// import { useSetRecoilState } from "recoil";
// import { getUserInfo } from "~/services/general/user-info/userInfo.service";
// import { queryKeys } from "~/constant/react-query-keys";

// import { addNewEvaluationStudies as addNewEvaluationStudiesService } from "services/evaluation-studies/evaluationStudiesSave.service";

// import { addFileEvaluationStudies as addFileEvaluationStudiesService } from "services/evaluation-studies/addFileEvaluationStudies.service";
// import { addNewLogSuggestion as addNewLogSuggestionService } from "services/product-suggestion/addSuggestionLog.service";
// import { updateSuggestionStep } from "services/product-suggestion/updateSuggestion.service";

// import { submitLoadingState } from "~/recoil-store/general/submitLoading";
// import { TFlow } from "~/types/flow/flow.types";
// import { getFlowByCurrent } from "~/services/flow/getFlowByCurrent.service";
// import { useNavigate } from "react-router-dom";
// import { TEvaluationStudiesForm } from "~/types/evaluation-studies/evaluationStudies.types";

// const { userInfo } = getUserInfo();

// export const useSubmitEvaluationStudies = (stepId: number, id?: number) => {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();
//   const setLoading = useSetRecoilState(submitLoadingState);

//   const { mutateAsync: addNewEvaluationStudies } = useMutation(
//     addNewEvaluationStudiesService
//   );

//   const { mutateAsync: addFileEvaluationStudies } = useMutation(
//     addFileEvaluationStudiesService
//   );

//   const { mutateAsync: addLogSuggestion } = useMutation(
//     addNewLogSuggestionService
//   );

//   const { data: flowBysteps } = useQuery<TFlow[]>(
//     [queryKeys.getFlowByCurrent],
//     () => getFlowByCurrent(stepId),
//     {
//       refetchOnWindowFocus: false,
//       onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
//     }
//   );

//   const onSubmit = async (state: TEvaluationStudiesForm) => {
//     const newData = {
//       Title: "",
//       SuggestionId: id ?? 0,
//       Comment: state.Comment,
//       ActionId: state.ActionId,
//     };

//     const file = state.File;

//     const flowstep = flowBysteps?.find((i) => i.ActionId === state.ActionId);

//     const log = {
//       Title: userInfo.userFarsiName,
//       ActionDate: new Date().toISOString(),
//       Step: flowstep?.CurrentStep.Title ?? "",
//       Result: flowstep?.Action?.Title ?? "",
//       Comment: state.Comment ? state.Comment : "",
//       SuggestionId: id ?? 0,
//     };

//     const suggestionUpdate = {
//       ActionId: state.ActionId,
//       CurrentStepId: flowstep?.NextStepId ?? 0,
//     };

//     setLoading(true);
//     await addNewEvaluationStudies(newData, {
//       onSuccess: (data) => {
//         queryClient.invalidateQueries([queryKeys.getAllSuggestion], {
//           exact: false,
//         });

//         if (file !== undefined && file.fileList.length > 0)
//           addFileEvaluationStudies({
//             file: file,
//             EvaluationStudiesId: data.Id,
//             SuggestionId: id ?? 0,
//           });

//         if (suggestionUpdate && id) updateSuggestionStep(id, suggestionUpdate);

//         if (log) addLogSuggestion(log);
//       },
//       onError: () => {},
//     });
//     message.success("پیشنهاد با موفقیت ثبت شد");
//     setLoading(false);
//     navigate("/cartable", { replace: true });
//   };

//   return {
//     onSubmit,
//   };
// };
