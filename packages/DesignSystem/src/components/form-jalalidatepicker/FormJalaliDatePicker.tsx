import { Form } from 'antd'
import { JalaliDatePicker } from '../../components/jalalidatepicker'
import { useController } from 'react-hook-form'
import { TFormJalaliDatePicker } from './form-jalalidatepicker.types'

export const FormJalaliDatePicker = <G extends string>({
  label,
  name,
  ...rest
}: TFormJalaliDatePicker<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name })
  return (
    <Form.Item label={label} name={name}>
      <>
        <JalaliDatePicker {...{ ...field, ...rest }} />
        {error && <div className="text-red-500">{error.message}</div>}
      </>
    </Form.Item>
  )
}
