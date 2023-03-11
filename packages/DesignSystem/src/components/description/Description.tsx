import { forwardRef } from 'react'
import { Descriptions as AntDescriptions } from 'antd'
import { TDescription } from './description.types'

export const Descriptions = forwardRef(({ ...rest }: TDescription, ref?: any) => (
  <AntDescriptions {...rest} {...{ ref }} />
))
