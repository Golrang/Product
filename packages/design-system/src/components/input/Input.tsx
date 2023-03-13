// import { Input as AntInput } from 'antd'
// import { forwardRef } from 'react'
// import { SearchProps, TextAreaProps, GroupProps, InputProps } from 'antd/lib/input';

// type TInput = {
//   inputType?: "search" | "textarea" | "group";
// } & (InputProps | TextAreaProps);
// type typeInput = "search" | "textarea" | "group";

// type TInput<T extends typeInput> =
//   T extends "search" ? SearchProps
//   : T extends "textarea" ? TextAreaProps : T extends "group" ? GroupProps : InputProps

// type Ttest<T extends typeInput> = {
//   search?: boolean
// } & TInput<T>

// export const Input = forwardRef(<T extends typeInput>({ search, ...rest }: Ttest<T>, ref?: any) => {
//   if (search)
//     return <AntInput.Search {...rest} {...{ ref }} />;
//   // if (inputType == "textArea") return <AntInput.TextArea {...rest} {...{ ref }} />;

//   return <AntInput {...rest} {...{ ref }} />;
// })

import { Input as AntInput } from "antd";
import { forwardRef } from "react";
import { TInput } from "./input.types";

export const Input = forwardRef(({ ...rest }: TInput, ref?: any) => {
  return <AntInput {...rest} {...{ ref }} />;
});
