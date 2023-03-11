import { TDescription } from '../../components/description/description.types'

export type TFormDescription<G> = Omit<TDescription, 'ref'> & {
  label?: string
  name: G
}
