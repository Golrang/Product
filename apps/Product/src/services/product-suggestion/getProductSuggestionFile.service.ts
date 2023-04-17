import { listName } from "constant";
import { getListItemByFilter } from "../general/pnp/pnpjs";

export const getProductSuggestionFile = (id: number) => {
  return getListItemByFilter<any[]>(listName.suggestionDocument, {
    filter: `SuggestionId eq ${id}`,
    select:
      "*, File/ServerRelativeUrl , Suggestion/Id , Prioritization/Id , EvaluationStudies/Id , Id , File/Name , Modified",
    expand: "File , Suggestion , Prioritization , EvaluationStudies",
  });
};
