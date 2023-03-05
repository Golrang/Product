import { forwardRef } from 'react'
import { Select as AntSelect } from 'antd'
import { TSelectOption } from './select-option.types'

const { Option: AntSelectOption } = AntSelect

export const SelectOption = forwardRef(
  ({ ...rest }: TSelectOption, ref?: any) => (
    <AntSelectOption {...rest} {...{ ref }}>
      {rest.children}
    </AntSelectOption>
  )
)
