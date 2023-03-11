import { Typography } from 'antd'
import { TTextProps } from './text.types'

const { Text: AntText } = Typography

export const Text = ({ children, ...rest }: TTextProps) => {
  return <AntText {...rest}>{children}</AntText>
}
