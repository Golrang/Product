import { Form } from "antd";
import { Descriptions } from "../../components/description";
import { useController } from "react-hook-form";
import { TFormDescription } from "./form-description.types";

export const FormDescription = <G extends string>({
  label,
  name,
  ...rest
}: TFormDescription<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <Form.Item label={label} name={name}>
      <>
        <Descriptions {...{ ...field }} {...rest} />
        {error && <div className="text-red-500">{error.message}</div>}
      </>
    </Form.Item>
  );
};
