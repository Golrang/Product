import { atom } from "recoil";

export const addSuggestionTemporaryState = atom<boolean>({
  key: "SuggestionTemporaryState",
  default: false,
});
