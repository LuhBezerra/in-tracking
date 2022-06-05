import React, { useRef, useCallback, useEffect, useMemo, useState } from 'react'
import classnames from 'classnames'
import type { ChangeEvent } from 'react'

import { ArrowDownIcon } from 'assets/icons'

import './styles.scss'

type SelectOption = { value: string; label: string }


type SelectProps = {
  options: SelectOption[]
  onChange: (event: ChangeEvent<HTMLLIElement>) => void
  value: any
  defaultValue: any
  label: any
  className: any
  placeholder: any
  labelClassName: any
  disabled: any
}

export const Select = ({
  options,
  onChange,
  value,
  defaultValue,
  label,
  className,
  placeholder,
  labelClassName,
  disabled,
}: SelectProps) => {
  const optionsRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(
    value || options.findIndex(item => item.value === defaultValue)
  )

  const renderValueSelected = useMemo(() => {
    if (placeholder && selected) {
      return placeholder
    }
    return options[selected]?.label || ''
  }, [options, placeholder, selected])

  const onOpenDropdown = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const onClick = useCallback(
    index => () => {
      setSelected(index)
      if (onChange) {
        onChange(options[index])
      }
    },
    [onChange, options]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', onOpenDropdown)
    }

    return () => window.removeEventListener('click', onOpenDropdown)
  })

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
          {options.map((item, index) => (
            <li
              id={item}
              role="option"
              aria-selected={selected === index}
              className={classnames('option', {
                selected: selected === index,
              })}
              key={item.value}
              onClick={onClick(index)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
