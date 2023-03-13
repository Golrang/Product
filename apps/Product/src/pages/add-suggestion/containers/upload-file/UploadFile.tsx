import { Button, FormUploader } from "sharepoint-golrang-design-system";

export const UploadFile = () => {
  return (
    <FormUploader name="choose file" label="بارگذاری فایل" maxCount={1}>
      <Button>Choose File</Button>
    </FormUploader>
  );
};
