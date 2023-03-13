import { Form as AntFrom } from "antd";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import type { TForm } from "./form.types";
import { useForm } from "react-hook-form";
import { Provider } from "./Provider";

export const Form = <T extends Record<string, any>>({
  children,
  schema,
  defaultValues,
  onFinish,
  onFinishFailed,
  ...rest
}: TForm<T>) => {
  const { control, setValue, handleSubmit } = useForm<T>({
    defaultValues,
    ...(schema && { resolver: yupResolver(schema) }),
  });

  return (
    <>
      <Provider {...{ control, setValue }}>
        <AntFrom
          {...{ ...rest }}
          onFinish={handleSubmit(onFinish, onFinishFailed)}
        >
          {children}
        </AntFrom>
      </Provider>
      <DevTool control={control} />
    </>
  );
};
