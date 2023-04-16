// import { DatePicker } from "zaman";
// import { Form } from "antd";
import { FormJalaliDatePicker } from "sharepoint-golrang-design-system";
import { Actions, dateFormat } from "~/constant";

export const PostponementDate = ({ ActionId }: { ActionId: number }) => {
  return (
    // <Form.Item label="تاریخ تعویق" name="PostponementDate">
    //   <DatePicker
    //   //  disabled={ActionId !== Actions.adjournment}
    //   />
    // </Form.Item>

    <FormJalaliDatePicker
      name="PostponementDate"
      label="تاریخ تعویق"
      format={dateFormat}
      disabled={ActionId !== Actions.adjournment}
    />
  );
};
