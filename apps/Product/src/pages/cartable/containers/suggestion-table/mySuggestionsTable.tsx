import { TableError } from "components/table-error";
import { Table } from "sharepoint-golrang-design-system";
import { TColumn } from "sharepoint-golrang-design-system";
import { TSuggestionTable } from "types/suggestion/suggestionTable.types";
import dayjs from "dayjs";
import { useGetSuggestion } from "pages/cartable/hooks/useCartable";
import { getUserInfo } from "services/general/user-info/userInfo.service";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
import { ViewSuggestion } from "../view-suggestion-button";

const columnsForMe: TColumn<TSuggestionTable>[] = [
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
    title: "عملیات",
    align: "center",
    width: 110,
    render: (_, record: TSuggestion) => <ViewSuggestion id={record.Id ?? 0} />,
  },
];

export const MySuggestionsTable = () => {
  const { userInfo } = getUserInfo();
  const { data, error } = useGetSuggestion();
  if (error || !data) return <TableError />;
  return (
    <Table
      columns={columnsForMe}
      dataSource={data?.filter(
        (i) =>
          i.EmployeeId === userInfo.employeeId &&
          i.CompanyId === userInfo.companyID
      )}
      bordered
    />
  );
};
