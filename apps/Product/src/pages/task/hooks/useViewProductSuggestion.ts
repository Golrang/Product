import { useQuery } from "@tanstack/react-query";
import { getProductsSuggestion } from "services/product-suggestion/getProductSuggestion.service";
import { TSuggestion } from "types/suggestion/suggestion.types";
import { queryKeys } from "constant/react-query-keys/index";
import { decodeEntities } from "utils/decodeHTMLEntities";
import { getEmployeeInfo } from "services/employee/allEmployee.service";

export const useViewProductSuggestion = () => {
  let defaultValues: TSuggestion | undefined;
  let RecommenderInfo;
  useQuery([queryKeys.getProductsSuggestion], getProductsSuggestion, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (data) => {
      defaultValues =
        data && data[0]
          ? {
              Id: data[0].Id,
              CompanyId: data[0].CompanyId,
              EmployeeId: data[0].EmployeeId,
              Material: data[0].Material,
              PharmaceuticalFormId: data[0].PharmaceuticalFormId,
              PharmaceuticalForm: {
                Id: data[0].PharmaceuticalForm?.Id,
                Title: data[0].PharmaceuticalForm?.Title ?? "",
              },
              OtherPharmaceuticalForm: {
                Id: data[0].OtherPharmaceuticalForm?.Id,
                Title: data[0].OtherPharmaceuticalForm?.Title ?? "",
              },
              OtherPharmaceuticalFormId: data[0].OtherPharmaceuticalFormId,
              PharmaceuticalForm_Other: data[0].PharmaceuticalForm_Other,
              OtherPharmaceuticalForm_Other:
                data[0].OtherPharmaceuticalForm_Other,
              BrandName: data[0].BrandName,
              ManufacturerCompanyName: data[0].ManufacturerCompanyName,
              Consumable: decodeEntities(data[0].Consumable),
              TherapeuticField: {
                Id: data[0].TherapeuticField?.Id,
                Title: data[0].TherapeuticField?.Title ?? "",
              },
              TherapeuticFieldId: data[0].TherapeuticFieldId,
              TherapeuticFieldComment: decodeEntities(
                data[0].TherapeuticFieldComment
              ),
              OfferReason: [
                {
                  Id: 1,
                  // data[0].OfferReason?.Id,
                  Title: "change by somaye",
                  // data[0].OfferReason?.Title ?? "",
                },
              ], //change by somaye
              OfferReasonId: data[0].OfferReasonId,
              OfferReasonComment: decodeEntities(data[0].OfferReasonComment),
              ProductAdvatage: decodeEntities(data[0].ProductAdvatage),
              ProductWeaknesses: decodeEntities(data[0].ProductWeaknesses),
              SimilarPharmaceuticalForm: data[0].SimilarPharmaceuticalForm,
              SimilarTherapeuticField: data[0].SimilarTherapeuticField,
              SimilarConsumable: data[0].SimilarConsumable,
              Comment: decodeEntities(data[0].Comment),
              Created: data[0].Created,
              Modified: data[0].Modified,
              ActionId: data[0].ActionId,
              CurrentStepId: data[0].CurrentStepId,
            }
          : undefined;
      getEmployeeInfo(defaultValues).then((result) => {
        const EmployeeInfo = result.data.filter(
          () => `EmployeeId eq ${defaultValues?.EmployeeId}`
        );
        RecommenderInfo = [
          { lable: "نام و نام خانوادگی", name: EmployeeInfo[0].FullName },
          { lable: "سمت", name: EmployeeInfo[0].WorkPlaceId },
          { lable: "واحد سازمانی", name: EmployeeInfo[0].WorkPlaceId },
          { lable: "نام شرکت", name: EmployeeInfo[0].CCompanyId },
        ];
      });
    },
  });

  return {
    defaultValues,
    RecommenderInfo,
  };
};
