import { DatePicker as AntJalaliDatePicker } from "antd-jalali";
import { forwardRef } from "react";
import { TJalaliDatePicker } from "./jalalidatepicker.types";

export const JalaliDatePicker = forwardRef(
  ({ rangePicker, ...rest }: TJalaliDatePicker, ref: any) => {
    if (rangePicker)
      return <AntJalaliDatePicker.RangePicker {...rest} {...{ ref }} />;
    return <AntJalaliDatePicker {...rest} {...{ ref }} />;
  }
);
