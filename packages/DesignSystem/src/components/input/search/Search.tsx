import { forwardRef } from 'react'
import { Input } from 'antd'
import { TSearch } from './search.types'

const { Search: AntSearch } = Input;

export const Search = forwardRef(({ ...rest }: TSearch, ref?: any) => (
    <AntSearch {...rest} {...{ ref }} />
))
