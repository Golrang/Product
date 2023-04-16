import { listName } from "~/constant";
import { numberFormat4Digit } from "~/utils/numberFormat";
import { updateListItem } from "../general/pnp/pnpjs";

import dayjs from "dayjs";
import "dayjs/locale/fa";
import calendar from "dayjs/plugin/calendar";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
dayjs.locale("fa");
dayjs.extend(calendar);
(dayjs as any).calendar("jalali");

export const updateSuggestionCode = async (id: number) => {
  const date = dayjs(new Date()).format("YYYY-MM-DD").split("-");
  const data = {
    Title: `${date[0].toString()}${date[1].toString()}${numberFormat4Digit(
      id,
      4
    )}`,
  };
  const res = await updateListItem(data, id, listName.productSuggestion);
  return res;
};

export const updateSuggestionStep = async (
  id: number,
  payload: Pick<TSuggestion, "ActionId" | "CurrentStepId">
) => {
  const res = await updateListItem(payload, id, listName.productSuggestion);
  return res;
};
