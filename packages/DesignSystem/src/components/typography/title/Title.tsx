import { Typography } from 'antd'
import { TTitleProps } from './title.types'

const { Title: AntTitle } = Typography

export const Title = ({ children, ...rest }: TTitleProps) => {
  return <AntTitle {...rest}>{children}</AntTitle>
}
