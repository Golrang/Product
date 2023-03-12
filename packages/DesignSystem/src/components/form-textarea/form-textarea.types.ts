import { TextAreaProps } from "antd/lib/input/TextArea";

export type TFormTextarea<G> = TextAreaProps & {
  label?: string;
  name: G;
}
