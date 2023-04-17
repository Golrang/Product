import {
  ICUpload,
  Table,
  TColumn,
  Uploader,
} from "sharepoint-golrang-design-system";
import { TTableconfirmationDocuments } from "types/task/confirmationDocuments.types";
import { useGetConfirmationDocuments } from "../../hooks/useGetConfirmationDocuments";
import { TableError } from "components/table-error";
import { TableLoading } from "components/table-loading";
import { Button } from "antd";
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
    render: (text: string) => (
      <Uploader
        beforeUpload={() => false}
        className="!border-none"
        maxCount={1}
        // // @ts-ignore
        // defaultFileList={text}
        // fileList={text}
      >
        <Button
          className="!inline-flex !justify-center !items-center btn btn-orange w-[100%]"
          htmlType="button"
        >
          <span> {text}</span>
          <ICUpload className="mr-2 w-4 inline fill-current h-4  font-bold" />
        </Button>
      </Uploader>
    ),
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
  return <Table columns={columns} dataSource={data} bordered />;
};
