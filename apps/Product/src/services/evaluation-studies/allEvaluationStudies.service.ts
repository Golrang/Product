import { listName } from "constant";
import { getAllListItem } from "../general/pnp/pnpjs";
import { TEvaluationStudies } from "~/types/evaluation-studies/evaluationStudies.types";

export const getAllEvaluationStudies = async (): Promise<
  TEvaluationStudies[]
> => {
  const data = await getAllListItem<TEvaluationStudies[]>(
    listName.evaluationStudies
  );
  return data;
};
