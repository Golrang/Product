import { listName } from "constant";
import { TAction } from "~/types/action/action.types";
import { getAllListItem } from "../general/pnp/pnpjs";

export const getAllAction = async (): Promise<TAction[]> => {
  const data = await getAllListItem<TAction[]>(listName.action);
  return data;
};
