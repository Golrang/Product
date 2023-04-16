import { listName } from "constant";
import { addListItem } from "services/general/pnp/pnpjs";
import { TPrioritization } from "~/types/prioritization/prioritization.types";

export type TAddNewPrioritization = Omit<TPrioritization, "Id">;

export const addNewPrioritization = async (payload: TAddNewPrioritization) => {
  const res = await addListItem(payload, listName.prioritization);
  return res;
};
