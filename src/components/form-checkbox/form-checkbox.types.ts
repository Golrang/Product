import { TCheckBox } from '../checkbox/checkbox.types'

export type TFormCheckBox<G> = {
  label: string
  name: G
} & TCheckBox
