import { listName } from "constant";
import { TStep } from "~/types/step/step.types";
import { getAllListItem } from "../general/pnp/pnpjs";

export const getAllStep = async (): Promise<TStep[]> => {
  const data = await getAllListItem<TStep[]>(listName.step);
  return data;
};
