import { listName } from "~/constant";
import { numberFormat4Digit } from "~/utils/numberFormat";
import { updateListItem } from "../general/pnp/pnpjs";
import dayjs from "dayjs";
import "dayjs/locale/fa";
dayjs.locale("fa");
// // @ts-ignore
// dayjs.calendar("jalali");
export const updateSuggestionCode = async (id: number) => {
  // const dd = dayjs().format("YYYY-MM-DD");
  const date = dayjs(new Date()).format("YYYY-MM-DD").split("-");
  // debugger;
  const data = {
    Title: `${date[0].toString()}${date[1].toString()}${numberFormat4Digit(
      id,
      4
    )}`,
  };
  const res = await updateListItem(data, id, listName.productSuggestion);
  return res;
};
