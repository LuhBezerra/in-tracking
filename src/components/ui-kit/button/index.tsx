import type { FC } from 'react'
import classnames from 'classnames'

import './index.scss'

type ButtonProps = {
  className: string;
  type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = ({ className, children, type, ...restProps }) => {
  return (
    <button className={classnames('button-wrapper', className)} {...restProps}>
      {children}
    </button>
  )
}

export default Button
