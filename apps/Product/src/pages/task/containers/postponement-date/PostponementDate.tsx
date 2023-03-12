import { DatePicker } from 'components/datepicker';

export const PostponementDate = () => {
  const dateFormat = 'YYYY/MM/DD';
  return (
    <>
      <p>تاریخ تعویق</p>
      <DatePicker
        placeholder="تاریخ تعویق"
        format={dateFormat}
        name="PostponementDate"
      />
    </>
  );
};
