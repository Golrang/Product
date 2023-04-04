import { queryKeys } from "../../../constant/react-query-keys/index";
import { useSetRecoilState } from "recoil";

import {
  TSuggestion,
  TSuggestionForm,
} from "types/suggestion/suggestion.types";
import { getUserInfo } from "services/general/user-info/userInfo.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addNewSuggestion as addNewSuggestionService } from "services/product-suggestion/productSuggestionSave.service";

import { addMaterialsSuggestion as addMaterialsSuggestionService } from "services/product-suggestion/addMaterialsSuggestion.service";
import { addFileSuggestion as addFileSuggestionService } from "services/product-suggestion/addFileSuggestion.service";
import { addNewLogSuggestion as addNewLogSuggestionService } from "services/product-suggestion/addSuggestionLog.service";

import { message } from "antd";
import { submitLoadingState } from "recoil-store/general/submitLoading";
import { updateSuggestionCode } from "~/services/product-suggestion/updateSuggestion.service";
import dayjs from "dayjs";
import { pharmaceuticalFormsOtherId } from "~/constant";

const { userInfo } = getUserInfo();

export const useSubmitSuggestion = (id?: number) => {
  const queryClient = useQueryClient();
  const setLoading = useSetRecoilState(submitLoadingState);

  const selectedSuggestionsQuery: TSuggestion[] | undefined =
    queryClient.getQueryData([queryKeys.getAllSuggestion, id], {
      exact: false,
    });

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
      Material: state.Material,
      PharmaceuticalFormId: state.PharmaceuticalFormId,
      OtherPharmaceuticalFormId: state.OtherPharmaceuticalFormId,
      PharmaceuticalForm_Other: state.PharmaceuticalForm_Other,
      OtherPharmaceuticalForm_Other: state.OtherPharmaceuticalForm_Other,
      BrandName: state.BrandName,
      ManufacturerCompanyName: state.ManufacturerCompanyName,
      Consumable: state.Consumable,
      TherapeuticFieldId: state.TherapeuticFieldId,
      TherapeuticFieldComment: state.TherapeuticFieldComment,
      OfferReasonId: { results: state.OfferReasonId }, // multi lookup field
      OfferReasonComment: state.OfferReasonComment,
      ProductAdvatage: state.ProductAdvatage,
      ProductWeaknesses: state.ProductWeaknesses,
      SimilarPharmaceuticalForm: state.SimilarPharmaceuticalForm,
      SimilarTherapeuticField: state.SimilarTherapeuticField,
      SimilarConsumable: state.SimilarTherapeuticField,
      Comment: state.Comment,
      ActionId: 3,
      CurrentStepId: 10,
    };

    const materials = state.Materials;
    const file = state.File;
    const log = {
      user: userInfo.userFarsiName,
      ActionDate: dayjs(new Date()).toISOString(),
      Step: "1",
      Result: "okkkkk",
      Description: "توضیحات",
    };

    if (state.PharmaceuticalFormId === state.OtherPharmaceuticalFormId) {
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
        updateSuggestionCode(data.Id);
        if (materials.length !== 0)
          addMaterialsSuggestion({
            Materials: materials,
            SuggestionId: data.Id,
          });
        if (file.fileList.length > 0)
          addFileSuggestion({ file: file, SuggestionId: data.Id });

        addLogSuggestion(log);
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
