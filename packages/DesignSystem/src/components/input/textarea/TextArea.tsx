import { forwardRef } from 'react'
import { Input } from 'antd'
import { TTextArea } from './textarea.types'

const { TextArea: AntTextArea } = Input;

export const TextArea = forwardRef(({ ...rest }: TTextArea, ref?: any) => (
    <AntTextArea {...rest} {...{ ref }} />
))
