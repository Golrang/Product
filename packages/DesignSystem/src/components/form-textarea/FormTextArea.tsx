import { Form } from 'antd'
import { TextArea } from '../../components/input/textarea'
import { useController } from 'react-hook-form'
import { TFormTextarea } from './form-textarea.types'

export const FormTextArea = <G extends string>({
  label,
  name,
  ...rest
}: TFormTextarea<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name })
  return (
    <Form.Item label={label} name={name}>
      <>
        <TextArea {...{ ...field }} {...rest} name={name} />
        {error && <div className="text-red-500">{error.message}</div>}
      </>
    </Form.Item>
  )
}
