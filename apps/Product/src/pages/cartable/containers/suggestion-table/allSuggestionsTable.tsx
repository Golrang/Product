import { TableError } from "components/table-error";
import { Table } from "sharepoint-golrang-design-system";
import { TColumn } from "sharepoint-golrang-design-system";
import { TSuggestionTable } from "types/suggestion/suggestionTable.types";
import dayjs from "dayjs";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
import { ViewSuggestion } from "../view-suggestion-button";
import { useGetSuggestion } from "pages/cartable/hooks/useCartable";

const columnsForAll: TColumn<TSuggestionTable>[] = [
  {
    title: "ردیف",
    dataIndex: "row",
    key: "row",
    align: "center",
    width: 20,
  },
  {
    title: "کدپیشنهاد",
    dataIndex: "Title",
    key: "Title",
  },
  {
    title: "پیشنهاد دهنده ",
    dataIndex: "Owner",
    key: "Owner",
  },
  {
    title: "تاریخ ثبت پیشنهاد",
    dataIndex: "Created",
    key: "Created",
    render: (text: string) => dayjs(text).format("YYYY/MM/DD"),
  },
  {
    title: "مرحله جاری ",
    dataIndex: "Consumable",
    key: "Consumable",
  },
  {
    title: "تاریخ آخرین تغییر",
    dataIndex: "Modified",
    key: "Modified",
    render: (text: string) => dayjs(text).format("YYYY/MM/DD"),
  },

  {
    title: 'عملیات',
    align: 'center',
    width: 110,
    render: (_, record: TSuggestion) => (
      <ViewSuggestion id={record.Id ?? 0} />
    ),
  },
];

export const AllSuggestionsTable = () => {
  const { data, error } = useGetSuggestion();
  if (error || !data) return <TableError />;
  return <Table columns={columnsForAll} dataSource={data} bordered />;
};
