import { FormProps } from "antd";
import { ReactNode } from "react";
import {
  FieldErrorsImpl,
  DeepRequired,
  DeepPartial as FormDeepPartial,
} from "react-hook-form";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";
import { BaseSchema } from "yup";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type TFormSchema<T> = {
  [P in keyof T]: BaseSchema<DeepPartial<T[P]> | undefined, any, any>;
};

export type TForm<T> = Omit<
  FormProps,
  "ref" | "onFinish" | "onFinishFailed" | "children"
> & {
  // onSubmit: (values: T) => void
  onFinish: (values: T) => void;
  onFinishFailed?: (errorInfo: TFormError<T>) => void;
  schema?: OptionalObjectSchema<ObjectShape>;
  defaultValues?: FormDeepPartial<T>;
  children: ReactNode;
};

export type TFormError<T> = Partial<FieldErrorsImpl<DeepRequired<T>>>;

export type TFormFieldArray<T> = keyof {
  [P in keyof T as T[P] extends Array<string | number | symbol>
    ? `${P & string}-${number}`
    : T[P] extends Array<object>
    ? `${P & string}-${keyof T[P][number] & string}-${number}`
    : never]: string;
};

export type TFormField<T> = keyof {
  [P in keyof T as T[P] extends Array<any> ? never : P]: string;
};
