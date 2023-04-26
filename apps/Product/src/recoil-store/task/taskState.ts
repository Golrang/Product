import { atom } from "recoil";

export type TtaskState = {
  id: number;
};

export const taskState = atom<TtaskState>({
  key: "taskState",
  default: { id: NaN },
});
