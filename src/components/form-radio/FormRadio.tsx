import { Form } from 'antd'
import { Radio } from '../radio/Radio'

import { useController } from 'react-hook-form'

export type TFormRadio = {
  name: string
  options: { value: string; disabled?: boolean; label: string }[]
}

export const FormRadio = ({ name, options, ...rest }: TFormRadio) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name })

  return (
    <>
      <Form.Item name={name}>
        <Radio {...{ options, ...field, ...rest }}></Radio>
        {error && <p className="text-red">{error.message}</p>}
      </Form.Item>
    </>
  )
}
