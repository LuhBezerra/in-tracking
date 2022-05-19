import classnames from 'classnames'

import './styles.scss'

export const Input = ({
  className,
  textareaClassName,
  id,
  label,
  value,
  onChange,
  error,
  type,
  ...inputProps
}) => (
  <div className={classnames('input-wrapper', className, { 'error': error })}>
    <label className={'label'} htmlFor={id}>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        className={classnames('input', textareaClassName)}
        onChange={onChange}
        value={value}
        id={id}
        {...inputProps}
      />
    ) : (
      <input className={'input'} onChange={onChange} value={value} id={id} {...inputProps} />
    )}
  </div>
)
