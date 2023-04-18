import { listName } from "constant";
import { addListItem } from "services/general/pnp/pnpjs";
import { TEvaluationStudies } from "~/types/evaluation-studies/evaluationStudies.types";

export type TAddNewEvaluationStudies = Omit<TEvaluationStudies, "Id">;

export const addNewEvaluationStudies = async (
  payload: TAddNewEvaluationStudies
) => {
  const res = await addListItem(payload, listName.evaluationStudies);
  return res;
};
