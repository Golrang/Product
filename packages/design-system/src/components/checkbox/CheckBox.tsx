import { forwardRef } from "react";
import { Checkbox as AntCheckBox } from "antd";
import { TCheckBox } from "./checkbox.types";

export const CheckBox = forwardRef(({ ...rest }: TCheckBox, ref: any) => {
  return <AntCheckBox {...rest} ref={ref} />;
});
