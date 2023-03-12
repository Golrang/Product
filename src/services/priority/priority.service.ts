import { listName } from 'constant';
import { getListItemByFilter } from '../general/pnp/pnpjs';
import { TPriority } from 'types/priority/priority.types';

export const getPriority = async (): Promise<TPriority[]> => {
  const data = await getListItemByFilter<TPriority[]>(listName.priority, {
    filter: '',
    select: '*',
    expand: '',
  });
  console.log(data);
  debugger;
  return data;
};
