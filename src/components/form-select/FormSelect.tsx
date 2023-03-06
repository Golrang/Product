import { Form } from "antd";
import { Select } from "../select/Select";
import { useController } from "react-hook-form";
import { TFormSelect } from "./from-select.types";

export const FormSelect = <G extends string>({
  label,
  name,
  ...rest
}: TFormSelect<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <>
        <Select {...{ ...field, ...rest }} />
        {error && <div className="text-red">{error.message}</div>}
      </>
    </Form.Item>
  );
};
