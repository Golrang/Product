import { listName } from "~/constant";
import { TSuggestionLog } from "~/types/suggestion/suggestionLog.types";
import { getListItemByFilter } from "../general/pnp/pnpjs";

// export const getAllLogs = () => {
//   const data = [
//     {
//       Id: 1,
//       Actioner: "فرناز کلانتر",
//       ActionDate: "2023-02-29T14:49:29Z",
//       Step: "تعویق",
//       Result: "تعویق",
//       Description: "جهت بررسی بیشتر",
//     },
//     {
//       Id: 2,
//       Actioner: "زهرا شرین پور",
//       ActionDate: "2023-02-29T14:49:29Z",
//       Step: "تعویق",
//       Result: "تعویق",
//       Description: "جهت بررسی بیشتر",
//     },
//   ];
//   return data;
// };

export const getAllLogs = () => {
  return getListItemByFilter<TSuggestionLog[]>(listName.logSuggestion, {
    filter: ``,
    select: "*",
    expand: "",
  });
};

export const getLogBySuggestionId = (id: number) => {
  return getListItemByFilter<TSuggestionLog[]>(listName.logSuggestion, {
    filter: `SuggestionId eq ${id}`,
    select: "*",
    expand: "",
  });
};
