import { TextAreaProps } from 'rc-textarea'

export type TFormTextarea<G> = Omit<
  TextAreaProps,
  'size' | 'ref' | 'name'
> & {
  label?: `${Capitalize<G & string>}`
  name: G
}
