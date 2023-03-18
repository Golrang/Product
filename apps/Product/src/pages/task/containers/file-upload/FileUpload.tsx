import {Button} from "antd";
import {FormUploader, ICUpload} from "~/../../../packages/design-system/src";

export const FileUpload = () => {
  return (
    <>
      <FormUploader name="" className="!border-none" type="drag">
        <span>بارگزاری فایل</span>
        <ICUpload className="mr-2 w-4 inline fill-current h-4  font-bold" />
      </FormUploader>
    </>
  );
};
