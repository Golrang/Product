import { Table, TColumn } from "sharepoint-golrang-design-system";
import { TTableconfirmationDocuments } from "types/task/confirmationDocuments.types";
import { useGetConfirmationDocuments } from "../../hooks/useGetConfirmationDocuments";
import { TableError } from "components/table-error";
import { TableLoading } from "components/table-loading";
import { Button } from "antd";

const columns: TColumn<TTableconfirmationDocuments>[] = [
  {
    title: "عنوان سند",
    dataIndex: "Title",
    key: "Title",
  },
  {
    title: "ایجاد کننده",
    dataIndex: "Creator",
    key: "Creator",
  },
  {
    title: "تاریخ بارگذاری",
    dataIndex: "UploadDate",
    key: "UploadDate",
  },

  {
    title: "دانلود",
    dataIndex: "Download",
    key: "Download",
    render: (text: string) => (
      <a href="#" download="#">
        <Button>{text}</Button>
      </a>
    ),
  },
];

export const ConfirmationDocuments = () => {
  const { data, error, isLoading } = useGetConfirmationDocuments();
  if (isLoading) {
    return <TableLoading />;
  }
  if (error || !data) return <TableError />;
  return <Table columns={columns} dataSource={data} bordered />;
};
