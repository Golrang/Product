import { Button, FormUploader } from "sharepoint-golrang-design-system";

export const FileUpload = () => {
  return (
    <>
      <FormUploader name="File" label="بارگذاری فایل" maxCount={1}>
        <Button>Choose File</Button>
      </FormUploader>
    </>
  );
};
