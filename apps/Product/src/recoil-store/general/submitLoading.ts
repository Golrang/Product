import { atom } from "recoil";

export const submitLoadingState = atom<boolean>({
  key: "submitLoading",
  default: false,
});
