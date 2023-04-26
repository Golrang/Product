import { listName } from "constant";
import { addListItem } from "services/general/pnp/pnpjs";
import { TResultOfSuggestion } from "~/types/result-of-suggestion/resultOfSuggestion.types";

export type TAddNewResultOfSuggestion = Omit<
  TResultOfSuggestion,
  "Id" | "Title" | "Comment_FinalReview" | "Comment_EvaluationStudies"
>;
export const addNewResultOfSuggestion = async (
  payload: TAddNewResultOfSuggestion
) => {
  const res = await addListItem(payload, listName.resultOfSuggestion);
  return res;
};
