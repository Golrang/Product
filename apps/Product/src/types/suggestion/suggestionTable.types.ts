import { TTableItems } from "./../table/table.types";
import { TSuggestion } from "./suggestion.types";

export type TSuggestionTable = TSuggestion &
  TTableItems & {
    Owner: string;
  };
