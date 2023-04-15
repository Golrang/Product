import { DatePicker } from "zaman";
import { Form } from "antd";

export const PostponementDate = () => {
  return (
    <Form.Item label="تاریخ تعویق" name="PostponementDate">
      <DatePicker
      //  disabled={ActionId !== Actions.adjournment}
      />
    </Form.Item>
    // { ActionId }: { ActionId: number }
    // <FormJalaliDatePicker
    //   name="PostponementDate"
    //   label="تاریخ تعویق"
    //   format={dateFormat}
    //   disabled={ActionId !== Actions.adjournment}
    // />
  );
};
