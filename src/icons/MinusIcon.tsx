import { TIcon } from './icons.types'
import { ICWrapper } from './IconWrapper'

export const ICMinus = ({ className, onClick }: TIcon) => {
  return (
    <ICWrapper className={className} onClick={onClick}>
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </ICWrapper>
  )
}
