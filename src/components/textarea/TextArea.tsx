import { Input as AntInput } from 'antd'
import { forwardRef } from 'react'
import { TextAreaProps } from 'rc-textarea'

const { TextArea: AntTextArea } = AntInput

export const TextArea = forwardRef(
  ({ ...rest }: Omit<TextAreaProps, 'ref'>, ref?: any) => (
    <AntTextArea {...rest} {...{ ref }} />
  )
)
