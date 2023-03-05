import { TDatePicker } from '../datepicker/datepicker.types'

export type TFormDatePicker<G> = {
  label?: string
  name: G
} & TDatePicker
