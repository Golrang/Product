import { TextAreaProps } from "antd/lib/input/TextArea";

export type TFormTextarea<G> = TextAreaProps & {
  label?: `${Capitalize<G & string>}`
  name: G
}
