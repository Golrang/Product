import { TTableItems } from "types/table/table.types";

export type Tlog = {
  Id: number;
  Actioner: string; //اقدام کننده
  ActionDate: string; //تاریخ اقدام
  Step: string; //مرحله
  Result: string; //نتیجه
  Description: string; //توضیحات
};

export type TTableLog = Tlog & TTableItems;
