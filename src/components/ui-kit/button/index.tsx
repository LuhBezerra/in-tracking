import { useMemo } from 'react'
import type { FC, ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'

import './index.scss'
import { Link } from 'react-router-dom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  theme?: 'primary' | 'secondary'
  to?: string
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type,
  to,
  theme = 'primary',
  ...restProps
}) => {
  const renderButton = useMemo(() => {
    if (to) {
      return <Link className={classnames('button-wrapper', [theme], className)} to={to}>{children}</Link>
    }

    return (
      <button className={classnames('button-wrapper', [theme], className)} {...restProps}>
        {children}
      </button>
    )
  }, [children, className, restProps, theme, to])

  return renderButton
}

export default Button
