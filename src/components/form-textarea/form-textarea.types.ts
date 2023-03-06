import { TextAreaProps } from 'rc-textarea';

export type TFormTextarea<G> = Omit<TextAreaProps, 'size' | 'ref' | 'name'> & {
  // it should be decided
  // label?: `${Capitalize<G & string>}`
  label?: string;
  name: G;
};
