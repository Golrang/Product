import { TJalaliDatePicker } from "../../components/jalalidatepicker/jalalidatepicker.types";

export type TFormJalaliDatePicker<G> = {
  label?: string;
  name: G;
} & TJalaliDatePicker;
