import { ButtonProps, Form } from 'antd';
import { Button } from '../button/Button';

import { useController } from 'react-hook-form';

export type TFormButton = {
  name: string;
  className?: string;
} & Partial<ButtonProps>;

export const FormButton = <G extends string>({
  className,
  name,
  children,
  ...rest
}: TFormButton) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <>
      <Form.Item name={name}>
        <Button {...{ children, ...field, ...rest }}></Button>
        {error && <p className="text-red">{error.message}</p>}
      </Form.Item>
    </>
  );
};
