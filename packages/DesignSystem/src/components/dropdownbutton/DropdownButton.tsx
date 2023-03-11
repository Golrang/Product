import { Dropdown } from 'antd'
import { forwardRef } from 'react'
import { TDropdownButton } from './drop-down-button.types'

export const DropdownButton = forwardRef(
  ({ children, label, ...rest }: TDropdownButton, ref?: any) => (
    <Dropdown.Button {...rest} {...{ ref }} overlay={children as any}>
      {label}
    </Dropdown.Button>
  )
)
