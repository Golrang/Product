import { atom } from 'recoil';

export type TPharmaceuticalFormOtherState = {
  isOpen: boolean;
  id?: number;
};

export const pharmaceuticalFormOtherState = atom<TPharmaceuticalFormOtherState>(
  {
    key: 'pharmaceuticalFormOtherState',
    default: { isOpen: false },
  }
);
