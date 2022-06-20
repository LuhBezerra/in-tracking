import React, { useRef, useCallback, useEffect, useMemo, useState } from 'react'
import classnames from 'classnames'

import { ArrowDownIcon } from 'assets/icons'

import './styles.scss'

export type SelectOption = { value: string; label: string }

type onChangeType = { target: { name?: string; value: SelectOption['value'] } }

type SelectProps = {
  name?: string
  options: SelectOption[]
  onChange: (event: onChangeType) => void
  value: any
  label?: any
  className?: any
  placeholder?: any
  labelClassName?: any
  disabled?: any
}

export const Select = ({
  name,
  options,
  onChange,
  value,
  label,
  className,
  placeholder,
  labelClassName,
  disabled,
}: SelectProps) => {
  const optionsRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(value)

  const renderValueSelected = useMemo(() => {
    if (placeholder && !selected) {
      return placeholder
    }

    return options?.find(option => option.value === selected)?.label || ''
  }, [options, placeholder, selected])

  const onOpenDropdown = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const onClick = useCallback(
    value => () => {
      setSelected(value)

      if (onChange) {
        onChange({ target: { name, value } })
      }
    },
    [onChange, name]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', onOpenDropdown)
    }

    return () => window.removeEventListener('click', onOpenDropdown)
  })

  useEffect(() => {
    if (value === '') {
      setSelected(value)
    }
  }, [value])

  return (
    <div className={classnames('dropdown-wrapper', className)}>
      <div className={'dropdown'}>
        {label && <p className={classnames('label', labelClassName)}>{label}</p>}
        <button
          type="button"
          className={classnames('button', { disabled: disabled })}
          onClick={onOpenDropdown}
          disabled={disabled}
        >
          {renderValueSelected}
          <ArrowDownIcon className={classnames('icon', { open: isOpen })} />
        </button>
      </div>
      {isOpen && (
        <ul className={'options-container'} ref={optionsRef}>
          {options.map(item => (
            <li
              role="option"
              aria-selected={selected === item.value}
              className={classnames('option', {
                selected: selected === item.value,
              })}
              key={item.value}
              onClick={onClick(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
