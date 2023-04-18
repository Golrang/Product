import { useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { listName } from "constant";
import { TTableconfirmationDocuments } from "types/task/confirmationDocuments.types";
import { queryKeys } from "constant/react-query-keys";
import { getProductSuggestionFile } from "~/services/product-suggestion/getProductSuggestionFile.service";
import { productSuggestionUrl } from "~/utils/pnp";

export const useGetConfirmationDocuments = (id: number) => {
  const { data, error, isLoading } = useQuery(
    [queryKeys.getConfirmationDocuments],
    () => getProductSuggestionFile(id),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        const mappedData: TTableconfirmationDocuments[] = data
          .filter(
            (i) => i.EvaluationStudiesId !== null || i.PrioritizationId !== null
          )
          .map((item, index) => {
            return {
              ...item,
              row: index + 1,
              key: item.Id,
              Title:
                item.EvaluationStudiesId !== null
                  ? "مستند بررسی پیشنهاد محصول"
                  : item.PrioritizationId !== null
                  ? "مستند اولویت بندی پیشنهاد"
                  : "",
              Download: item.File
                ? [
                    {
                      uid: item.Id,
                      name: item.File.Name,
                      status: "done",
                      url:
                        productSuggestionUrl +
                        "/" +
                        listName.suggestionDocument +
                        "/" +
                        item?.File?.Name,
                    },
                  ]
                : [],
            };
          });
        return mappedData;
      },
      onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
