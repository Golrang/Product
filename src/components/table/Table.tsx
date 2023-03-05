import { Table as AntTable } from "antd";
import { TColumn, TData } from "./table.types";
import { TTable } from "./table.types";

export const Table = <T extends TData, G extends TColumn<T>>({
  dataSource,
  columns,
  ...rest
}: TTable<T> & {
  dataSource: T[];
  columns: G[];
}) => <AntTable {...{ dataSource, columns }} {...rest} />;
