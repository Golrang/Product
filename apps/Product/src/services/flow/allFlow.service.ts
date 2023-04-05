import { listName } from "constant";
import { TFlow } from "~/types/flow/flow.types";
import { getAllListItem } from "../general/pnp/pnpjs";

export const getAllFlow = async (): Promise<TFlow[]> => {
  const data = await getAllListItem<TFlow[]>(listName.flow);
  return data;
};
