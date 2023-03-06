import { TSelect } from '../select/select.types'

export type TFormSelect<G> = {
  label?: string
  name: G
} & TSelect
