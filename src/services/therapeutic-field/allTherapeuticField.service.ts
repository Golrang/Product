import { listName } from 'constant';
import { getListItemByFilter } from '../general/pnp/pnpjs';
import { TTherapeuticField } from 'types/therapeutic-field/therapeuticField.types';

export const getAllTherapeuticField = async (): Promise<
  TTherapeuticField[]
> => {
  const data = await getListItemByFilter<TTherapeuticField[]>(
    listName.therapeuticField,
    {
      filter: '',
      select: '*',
      expand: '',
    }
  );
  return data;
};

