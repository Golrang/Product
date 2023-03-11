import { Typography } from 'antd'
import { TParagraphProps } from './paragraph.types'
const { Paragraph: AntParagraph } = Typography


export const Paragraph = ({ children, ...rest }: TParagraphProps) => {
  return <AntParagraph {...rest}>{children}</AntParagraph>
}
