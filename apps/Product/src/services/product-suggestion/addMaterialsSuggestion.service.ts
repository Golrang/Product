import { listName } from "~/constant";
import { TMaterial } from "~/types/suggestion/suggestion.types";
import { batchAddItemstoList } from "../general/pnp/pnpjs";

export type TAddNewMaterialsSuggestion = {
  Materials: TMaterial[];
  SuggestionId: number;
};

export const addMaterialsSuggestion = async (
  payload: TAddNewMaterialsSuggestion
) => {
  const data = payload.Materials.map((i) => {
    return {
      SuggestionId: payload.SuggestionId,
      Title: i.Title,
    };
  });

  const res = await batchAddItemstoList(data, listName.materialDetails);
  return res;
};
