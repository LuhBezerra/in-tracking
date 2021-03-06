import classnames from 'classnames'
import { useCallback, useMemo } from 'react'
import type { ChangeEvent } from 'react'
// @ts-ignore
import ReactInputDateMask from 'react-input-date-mask'

import './styles.scss'

type Type = 'textarea' | 'input' | 'color'

type Mask = 'date'

export type InputOnChangeEventType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>
interface InputProps {
  className?: string
  inputClassName?: string
  id?: string
  label?: string
  value?: string
  onChange: (event: InputOnChangeEventType) => void
  error?: string
  type?: Type
  mask?: Mask
  name?: string
}

export const Input = ({
  className = '',
  inputClassName,
  id,
  label,
  value,
  onChange,
  error,
  type,
  mask,
  name,
  ...inputProps
}: InputProps) => {
  const onChangeDate = useCallback(
    value => {
      onChange({
        target: {
          /* @ts-ignore */
          name,
          value,
        },
      })
    },
    [name, onChange]
  )
  const renderInput = useMemo(() => {
    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          className={classnames('input', inputClassName)}
          value={value}
          onChange={onChange}
          id={id}
          {...inputProps}
        />
      )
    }

    if (type === 'color') {
      return (
        <input
          name={name}
          className={classnames('input', inputClassName)}
          type="color"
          value={value}
          onChange={onChange}
          {...inputProps}
        />
      )
    }

    if (mask === 'date') {
      return (
        <ReactInputDateMask
          mask="dd/mm"
          className="input"
          name={name}
          value={value}
          onChange={onChangeDate}
          showMaskOnHover={true}
        />
      )
    }

    return (
      <input
        className="input"
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        {...inputProps}
      />
    )
  }, [type, mask, name, value, onChange, id, inputProps, inputClassName, onChangeDate])

  return (
    <div className={classnames('input-wrapper', className, { error: error })}>
      <label className={'label'} htmlFor={id}>
        {label}
      </label>
      {renderInput}
    </div>
  )
}
