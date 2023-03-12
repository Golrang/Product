import { JalaliDatePicker } from 'sharepoint-golrang-design-system';

export const PostponementDate = () => {
  const dateFormat = 'YYYY/MM/DD';
  return (
    <>
      <p>تاریخ تعویق</p>
      <JalaliDatePicker
        placeholder="تاریخ تعویق"
        format={dateFormat}
        name="PostponementDate"
      />
    </>
  );
};
