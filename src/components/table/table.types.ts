import { TableProps, TableColumnType } from "antd";

export type TTable<T> = Omit<TableProps<T>, "dataSource" | "columns">;

export type TColumn<T> =
  | {
      dataIndex: Exclude<keyof T, "key"> & string;
    }
  | ({ render: (value: any, record: any, index: number) => any } & {
      title?: string;
      key?: Exclude<keyof T, "key"> & string;
    } & Omit<TableColumnType<T>, "dataIndex" | "key" | "title">);

export type TData = Record<"key", any>;
