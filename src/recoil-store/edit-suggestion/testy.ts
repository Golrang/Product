import { atom } from 'recoil'

export const TestyState = atom<number>({
  key: 'Testy',
  default: 0
})
