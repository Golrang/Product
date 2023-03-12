import { listName } from 'constant';
import { getListItemByFilter } from 'services/general/pnp/pnpjs';
import { TSuggestion } from 'types/suggestion/suggestion.types';

export const getAllProductSuggestion =
  async ():  //context: QueryFunctionContext<[string, string]>
  Promise<TSuggestion[]> => {
    const res = await getListItemByFilter<TSuggestion[]>(
      listName.productSuggestion,
      {
        filter: '',
        select: '*',
        expand: '',
      }
    );
    return  res
  };
