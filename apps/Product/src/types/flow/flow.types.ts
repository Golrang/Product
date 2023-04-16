import { TAction } from "../action/action.types";
import { TStep } from "../step/step.types";

export type TFlow = {
  Id: number;
  Title: string;
  CurrentStepId: number;
  CurrentStep: TStep;
  NextStepId: number;
  NextStep: TStep;
  ActionId: number;
  Action?: TAction;
};
