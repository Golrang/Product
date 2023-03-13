import { TRadio } from "../../components/radio/radio.types";

export type TFormRadio<G> = {
  label?: string;
  name: G;
  options: { value: string; disabled?: boolean; label: string }[];
} & TRadio;
