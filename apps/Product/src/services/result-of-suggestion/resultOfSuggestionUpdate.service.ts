import { listName } from "constant";
import { updateListItem } from "services/general/pnp/pnpjs";
import { TResultOfSuggestion } from "~/types/result-of-suggestion/resultOfSuggestion.types";

export type TAddNewResultOfSuggestion = Pick<
  TResultOfSuggestion,
  "Id" | "ActionId" |"Evaluation_Num"
>;

export const updateResultOfSuggestion = async (
  payload: TAddNewResultOfSuggestion
) => {
  const data = {
    Evaluation_Num: payload.Evaluation_Num,
    ActionId: payload.ActionId,
  };
  const res = await updateListItem(
    data,
    payload.Id,
    listName.resultOfSuggestion
  );
  return res;
};
