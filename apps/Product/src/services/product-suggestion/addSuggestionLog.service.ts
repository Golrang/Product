import { listName } from "~/constant";
import { TSuggestionLog } from "~/types/suggestion/suggestionLog.types";
import { addListItem } from "../general/pnp/pnpjs";

export type TAddNewLogSuggestion = Omit<TSuggestionLog, "Id">;

export const addNewLogSuggestion = async (payload: TAddNewLogSuggestion) => {
  const res = await addListItem(payload, listName.logSuggestion);
  return res;
};
