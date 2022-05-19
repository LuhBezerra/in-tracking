import type { FC } from 'react'
import classnames from 'classnames'

import './index.scss'

type ButtonProps = {
  className: string;
  type?: 'button' | 'submit' | 'reset'
  theme?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ className, children, type, theme='primary', ...restProps }) => {
  return (
    <button className={classnames('button-wrapper', [theme], className)} {...restProps}>
      {children}
    </button>
  )
}

export default Button
