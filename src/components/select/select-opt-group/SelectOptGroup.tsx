import { forwardRef } from 'react'
import { Select as AntSelect } from 'antd'
import { TSelectOptGroup } from './select-opt-group.types'

const { OptGroup: AntSelectOptGroup } = AntSelect

export const SelectOptGroup = forwardRef(
  ({ ...rest }: TSelectOptGroup, ref?: any) => (
    <AntSelectOptGroup {...rest} {...{ ref }}>
      {/* {rest.children} */}
    </AntSelectOptGroup>
  )
)
