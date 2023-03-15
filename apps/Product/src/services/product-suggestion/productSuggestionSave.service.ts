import { listName } from "constant";
import { addListItem } from "services/general/pnp/pnpjs";
import { TSuggestion } from "types/suggestion/suggestion.types";

export type TAddNewSuggestion = Omit<TSuggestion, "OfferReasonId"> & {
  OfferReasonId: { results: [number] };
};

export const addNewSuggestion = async (payload: TAddNewSuggestion) => {
  const res = await addListItem(payload, listName.productSuggestion);
  return res;
};
