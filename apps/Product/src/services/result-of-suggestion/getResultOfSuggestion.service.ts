import { listName } from "constant";
import { getAllListItem, getListItemByFilter } from "../general/pnp/pnpjs";
import { TResultOfSuggestion } from "~/types/result-of-suggestion/resultOfSuggestion.types";

export const getAllResultOfSuggestion = async (): Promise<
  TResultOfSuggestion[]
> => {
  const data = await getAllListItem<TResultOfSuggestion[]>(
    listName.resultOfSuggestion
  );
  return data;
};

export const getResultOfSuggestionById = (id: number) => {
  return getListItemByFilter<TResultOfSuggestion[]>(
    listName.resultOfSuggestion,
    {
      filter: `SuggestionId eq ${id}`,
      select: "*",
      expand: "",
    }
  );
};
