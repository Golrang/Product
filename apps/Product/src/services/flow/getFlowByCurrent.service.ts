import { listName } from "constant";
import { TFlow } from "~/types/flow/flow.types";
import { getListItemByFilter } from "../general/pnp/pnpjs";

export const getFlowByCurrent = async (stepId?: number): Promise<TFlow[]> => {
  const data = await getListItemByFilter<TFlow[]>(listName.flow, {
    filter: `CurrentStepId eq ${stepId}`,
    select:
      "* , Action/Title , Action/Id , CurrentStep/Id , CurrentStep/Title , NextStep/Id , NextStep/Title ",
    expand: "Action  , CurrentStep ,NextStep",
  });
  return data;
};
