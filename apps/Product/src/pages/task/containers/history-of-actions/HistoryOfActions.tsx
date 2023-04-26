import { Table, TColumn } from "sharepoint-golrang-design-system";
import { TableError } from "components/table-error";
import { TableLoading } from "components/table-loading";
import dayjs from "dayjs";
import { TTableSuggestionLog } from "~/types/suggestion/suggestionLog.types";
import { useGetHistoryOfActionsById } from "../../hooks/useGetHistoryOfActions";

const columns: TColumn<TTableSuggestionLog>[] = [
  {
    title: "اقدام کننده",
    dataIndex: "Title",
    key: "Title",
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
    dataIndex: "Comment",
    key: "Comment",
  },
];

export const HistoryOfActions = ({
  suggestionId,
}: {
  suggestionId: number;
}) => {
  const { data, error, isLoading } = useGetHistoryOfActionsById(suggestionId);
  if (isLoading) {
    return <TableLoading />;
  }
  if (error || !data) return <TableError />;
  return <Table columns={columns} dataSource={data} bordered />;
};
