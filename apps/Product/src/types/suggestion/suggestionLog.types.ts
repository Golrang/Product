import { TTableItems } from "../table/table.types";

export type TSuggestionLog = {
  Id: number;
  Title: string; //اقدام کننده
  ActionDate: string; //تاریخ اقدام
  Step: string; //مرحله
  Result: string; //نتیجه
  Comment: string; //توضیحات
  SuggestionId: number;
};

export type TTableSuggestionLog = TSuggestionLog & TTableItems;
