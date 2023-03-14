import { Table, TColumn } from "sharepoint-golrang-design-system";
import { TTableLog } from "types/task/historyOfActions.types";
import { useGetHistoryOfActions } from "../../hooks/useGetHistoryOfActions";
import { TableError } from "components/table-error";
import { TableLoading } from "components/table-loading";
import dayjs from "dayjs";

const columns: TColumn<TTableLog>[] = [
  {
    title: "اقدام کننده",
    dataIndex: "Actioner",
    key: "Actioner",
  },
  {
    title: "تاریخ اقدام",
    dataIndex: "ActionDate",
    key: "ActionDate",
    render: (text: string) => dayjs(text).format("YYYY/MM/DD"),
  },
  {
    title: "مرحله",
    dataIndex: "Step",
    key: "Step",
  },

  {
    title: "نتیجه",
    dataIndex: "Result",
    key: "Result",
  },

  {
    title: "توضیحات",
    dataIndex: "Description",
    key: "Description",
  },
];

export const HistoryOfActions = () => {
  const { data, error, isLoading } = useGetHistoryOfActions();
  if (isLoading) {
    return <TableLoading />;
  }
  if (error || !data) return <TableError />;
  return <Table columns={columns} dataSource={data} bordered />;
};
