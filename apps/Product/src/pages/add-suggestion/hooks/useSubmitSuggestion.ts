import { getAllAction } from "./../../../services/action/allAction.service";
import { queryKeys } from "../../../constant/react-query-keys/index";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  TSuggestion,
  TSuggestionForm,
} from "types/suggestion/suggestion.types";
import { getUserInfo } from "services/general/user-info/userInfo.service";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

import { addNewSuggestion as addNewSuggestionService } from "services/product-suggestion/productSuggestionSave.service";

import { addMaterialsSuggestion as addMaterialsSuggestionService } from "services/product-suggestion/addMaterialsSuggestion.service";
import { addFileSuggestion as addFileSuggestionService } from "services/product-suggestion/addFileSuggestion.service";
import { addNewLogSuggestion as addNewLogSuggestionService } from "services/product-suggestion/addSuggestionLog.service";

import { message } from "antd";
import { submitLoadingState } from "recoil-store/general/submitLoading";
import { updateSuggestionCode } from "~/services/product-suggestion/updateSuggestion.service";
import { pharmaceuticalFormsOtherId } from "~/constant";
import { addSuggestionTemporaryState } from "~/recoil-store/add-suggestion";
import { TAction } from "~/types/action/action.types";
import { getAllStep } from "~/services/step/allStep.service";
import { TStep } from "~/types/step/step.types";

const { userInfo } = getUserInfo();

export const useSubmitSuggestion = (id?: number) => {
  const queryClient = useQueryClient();
  const setLoading = useSetRecoilState(submitLoadingState);
  const isTemporary = useRecoilValue(addSuggestionTemporaryState);
  const selectedSuggestionsQuery: TSuggestion[] | undefined =
    queryClient.getQueryData([queryKeys.getAllSuggestion, id], {
      exact: false,
    });

  const { data: actions } = useQuery<TAction[]>(
    [queryKeys.getAllAction],
    getAllAction,
    {
      refetchOnWindowFocus: false,
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );

  const { data: steps } = useQuery<TStep[]>(
    [queryKeys.getAllStep],
    getAllStep,
    {
      refetchOnWindowFocus: false,
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );

  const selectedSuggestions = selectedSuggestionsQuery?.find(
    (item) => item.Id === id
  );

  const { mutateAsync: addNewSuggestion } = useMutation(
    addNewSuggestionService
  );

  const { mutateAsync: addMaterialsSuggestion } = useMutation(
    addMaterialsSuggestionService
  );

  const { mutateAsync: addFileSuggestion } = useMutation(
    addFileSuggestionService
  );

  const { mutateAsync: addLogSuggestion } = useMutation(
    addNewLogSuggestionService
  );

  const onSubmit = async (state: TSuggestionForm) => {
    const addList = {
      CompanyId: userInfo.companyID,
      EmployeeId: userInfo.employeeId,
      Material: state.Material ? state.Material : "",
      PharmaceuticalFormId: state.PharmaceuticalFormId
        ? state.PharmaceuticalFormId
        : undefined,
      OtherPharmaceuticalFormId: state.OtherPharmaceuticalFormId
        ? state.OtherPharmaceuticalFormId
        : undefined,
      PharmaceuticalForm_Other: state.PharmaceuticalForm_Other
        ? state.PharmaceuticalForm_Other
        : "",
      OtherPharmaceuticalForm_Other: state.OtherPharmaceuticalForm_Other
        ? state.OtherPharmaceuticalForm_Other
        : "",
      BrandName: state.BrandName ? state.BrandName : "",
      ManufacturerCompanyName: state.ManufacturerCompanyName
        ? state.ManufacturerCompanyName
        : "",
      Consumable: state.Consumable ? state.Consumable : "",
      TherapeuticFieldId: state.TherapeuticFieldId
        ? state.TherapeuticFieldId
        : undefined,
      TherapeuticFieldComment: state.TherapeuticFieldComment
        ? state.TherapeuticFieldComment
        : "",
      OfferReasonId: state.OfferReasonId
        ? {
            results: state.OfferReasonId,
          }
        : { results: [] }, // multi lookup field
      OfferReasonComment: state.OfferReasonComment
        ? state.OfferReasonComment
        : "",
      ProductAdvatage: state.ProductAdvatage ? state.ProductAdvatage : "",
      ProductWeaknesses: state.ProductWeaknesses ? state.ProductWeaknesses : "",
      SimilarPharmaceuticalForm: state.SimilarPharmaceuticalForm
        ? state.SimilarPharmaceuticalForm
        : null,
      SimilarTherapeuticField: state.SimilarTherapeuticField
        ? state.SimilarTherapeuticField
        : null,
      SimilarConsumable: state.SimilarTherapeuticField
        ? state.SimilarTherapeuticField
        : null,
      Comment: state.Comment ? state.Comment : "",
      ActionId: actions && (isTemporary ? actions[0].Id : actions[1].Id),
      CurrentStepId: steps && (isTemporary ? steps[0].Id : steps[1].Id),
    };

    const materials = state.Materials;
    const file = state.File;

    if (
      state.PharmaceuticalFormId === state.OtherPharmaceuticalFormId &&
      state.PharmaceuticalFormId !== undefined &&
      state.OtherPharmaceuticalFormId !== undefined
    ) {
      return message.info(
        "شکل دارویی با سایر اشکال دارویی نمی تواند همانند باشد"
      );
    }

    if (
      state.PharmaceuticalFormId === pharmaceuticalFormsOtherId &&
      (state.PharmaceuticalForm_Other === "" ||
        state.PharmaceuticalForm_Other === undefined)
    ) {
      return message.info(
        "شکل دارویی سایر انتخاب شده است باید فیلد سایر شکل دارویی تکمیل شود."
      );
    }

    if (
      state.OtherPharmaceuticalFormId === pharmaceuticalFormsOtherId &&
      (state.OtherPharmaceuticalForm_Other === "" ||
        state.OtherPharmaceuticalForm_Other === undefined)
    ) {
      return message.info(
        "اشکال دارویی سایر انتخاب شده است باید فیلد سایر اشکال دارویی تکمیل شود."
      );
    }

    setLoading(true);
    await addNewSuggestion(addList, {
      onSuccess: (data) => {
        queryClient.invalidateQueries([queryKeys.getAllSuggestion], {
          exact: false,
        });
        const log = {
          Title: userInfo.userFarsiName,
          ActionDate: new Date().toISOString(),
          Step: steps ? (isTemporary ? steps[0].Title : steps[1].Title) : "",
          Result: actions
            ? isTemporary
              ? actions[0].Title
              : actions[1].Title
            : "",
          Comment: state.Comment ? state.Comment : "",
          SuggestionId: data.Id,
        };

        updateSuggestionCode(data.Id);
        if (materials !== undefined && materials.length !== 0)
          addMaterialsSuggestion({
            Materials: materials,
            SuggestionId: data.Id,
          });
        if (file !== undefined && file.fileList.length > 0)
          addFileSuggestion({ file: file, SuggestionId: data.Id });

        if (log) addLogSuggestion(log);
      },
      onError: () => {},
    });
    message.success("پیشنهاد با موفقیت ثبت شد");
    setLoading(false);
  };

  return {
    onSubmit,
    selectedSuggestions,
  };
};
