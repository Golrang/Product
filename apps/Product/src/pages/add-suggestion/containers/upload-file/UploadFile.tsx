import { FormUploader } from "sharepoint-golrang-design-system";

export const UploadFile = () => {
  return (
    <FormUploader name="File" label="بارگذاری فایل" maxCount={4}>
      <div className="dz-message dropzone" data-dz-message>
        <div className="text-gray-600 text-center">
          فایل خود را بکشید و رها کنید
        </div>
      </div>
    </FormUploader>
  );
};
