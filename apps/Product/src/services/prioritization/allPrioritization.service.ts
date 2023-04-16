import { TPrioritization } from "./../../types/prioritization/prioritization.types";
import { listName } from "constant";
import { getAllListItem } from "../general/pnp/pnpjs";

export const getAllPrioritization = async (): Promise<TPrioritization[]> => {
  const data = await getAllListItem<TPrioritization[]>(listName.prioritization);
  return data;
};
