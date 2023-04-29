import { Table, TColumn } from "sharepoint-golrang-design-system";
import { TTableconfirmationDocuments } from "types/task/confirmationDocuments.types";
import { useGetConfirmationDocuments } from "../../hooks/useGetConfirmationDocuments";
import { TableError } from "components/table-error";
import { TableLoading } from "components/table-loading";
import { Upload } from "antd";
import dayjs from "dayjs";
import { dateFormat } from "~/constant";

const columns: TColumn<TTableconfirmationDocuments>[] = [
  {
    title: "عنوان سند",
    dataIndex: "Title",
    key: "Title",
  },
  // {
  //   title: "ایجاد کننده",
  //   dataIndex: "Creator",
  //   key: "Creator",
  // },
  {
    title: "تاریخ بارگذاری",
    dataIndex: "Created",
    key: "Created",
    render: (text: string) => dayjs(text).format(dateFormat),
  },

  {
    title: "دانلود",
    dataIndex: "Download",
    key: "Download",
    render: (text: any) => <Upload defaultFileList={text} disabled></Upload>,
  },
];

export const ConfirmationDocuments = ({
  suggestionId,
}: {
  suggestionId: number;
}) => {
  const { data, error, isLoading } = useGetConfirmationDocuments(suggestionId);
  if (isLoading) {
    return <TableLoading />;
  }
  if (error || !data) return <TableError />;
  return <Table columns={columns} dataSource={data} />;
};
