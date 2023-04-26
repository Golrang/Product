import { atom } from "recoil";

export const countEvaluationStudiesGroupState = atom<number>({
  key: "CountEvaluationStudiesGroupState",
  default: 0,
});
