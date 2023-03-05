import { Input as AntInput } from "antd";
import { forwardRef } from "react";
import type { InputProps } from "antd";

type TInput = {
  search?: boolean;
} & InputProps;

export const Input = forwardRef(({ search, ...rest }: TInput, ref?: any) => {
  if (search) return <AntInput.Search {...rest} {...{ ref }} />;
  return <AntInput {...rest} {...{ ref }} />;
});
