import { FormUploader, ICUpload } from "sharepoint-golrang-design-system";

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
