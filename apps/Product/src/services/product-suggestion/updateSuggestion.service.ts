import dayjs from "dayjs";
import { listName } from "~/constant";
import { numberFormat4Digit } from "~/utils/numberFormat";
import { updateListItem } from "../general/pnp/pnpjs";

export const updateSuggestionCode = async (id: number) => {
  const date = dayjs(new Date()).format("YYYY/MM/DD").split("/");
  const data = {
    Title: `${date[0].toString()}${date[1].toString()}${numberFormat4Digit(
      id,
      4
    )}`,
  };
  const res = await updateListItem(data, id, listName.productSuggestion);
  return res;
};
