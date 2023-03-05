// import { QueryFunctionContext } from '@tanstack/react-query';
import { suggestions } from 'services/muck/muckData';
import { TSuggestion } from 'types/suggestion/suggestion.types';

export const getAllProductSuggestion =
  async (): // context: QueryFunctionContext<[string, string]>
  Promise<TSuggestion[]> => {
    // const res = await getListItemByFilter<TSuggestion[]>(
    //   listName.productSuggestion,
    //   {
    //     filter: '',
    //     select: '*',
    //     expand: '',
    //   }
    // );
    return suggestions; //refactor to res
  };
