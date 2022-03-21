import { forwardRef, useCallback, useMemo } from 'react'
import Select, { components } from 'react-select'
import type {
  MultiValue,
  SingleValue,
  PropsValue,
  DropdownIndicatorProps,
  ClearIndicatorProps,
  OptionProps,
  ValueContainerProps,
} from 'react-select'
import classnames from 'classnames'

import { AlertCircleIcon, DropdownDownIcon, CheckIcon, ClearIcon } from '../../../assets/icons'

// TODO: Adjust style
import './index.scss'

export type ComboboxOptionValueProps = {
  label: string
  value: string
  isDisabled?: boolean
  isFixed?: boolean
}

export type ComboboxOptionSectionProps = {
  label: string
  options: ComboboxOptionValueProps[]
}

export type ComboboxOptionOrSectionProps = ComboboxOptionValueProps | ComboboxOptionSectionProps

export interface ComboboxProps {
  value: PropsValue<ComboboxOptionValueProps>
  onChange: (
    newValue: MultiValue<ComboboxOptionValueProps> | SingleValue<ComboboxOptionValueProps>
  ) => void
  startIcon?: React.ElementType | Node | string
  className?: string
  comboboxClassName?: string
  id: string
  label: string
  labelClassName?: string
  options: ComboboxOptionOrSectionProps[]
  placeholder?: string
  size?: 'small' | 'medium'
  helperText?: string | Node | React.ReactElement
  error?: string | Node
  hiddenLabel?: boolean
  isOptional?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isClearable?: boolean
}

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      value,
      onChange,
      startIcon,
      className = '',
      comboboxClassName = '',
      id,
      isOptional = false,
      label,
      labelClassName = '',
      placeholder,
      options,
      size = 'small',
      helperText = '',
      error = '',
      isDisabled,
      isLoading,
      isClearable,
      hiddenLabel,
      ...rest
    }: ComboboxProps,
    ref
  ) => {
    const comboboxId = `combobox-${id}`

    const DropdownIndicator = useCallback(
      (props: DropdownIndicatorProps<ComboboxOptionValueProps>) => {
        return (
          <components.DropdownIndicator {...props}>
            <DropdownDownIcon className="indicator-icon" />
          </components.DropdownIndicator>
        )
      },
      []
    )

    const ClearIndicator = useCallback((props: ClearIndicatorProps<ComboboxOptionValueProps>) => {
      return (
        <components.ClearIndicator {...props}>
          <ClearIcon className="clear-icon" />
        </components.ClearIndicator>
      )
    }, [])

    const ValueContainer = useCallback(
      ({ children, ...props }: ValueContainerProps<ComboboxOptionValueProps>) => {
        const StartIcon = startIcon as React.ElementType
        return (
          <components.ValueContainer {...props} className="value-container">
            {startIcon && <StartIcon className="start-icon" />}
            {children}
          </components.ValueContainer>
        )
      },
      [startIcon]
    )

    const Option = useCallback((props: OptionProps<ComboboxOptionValueProps>) => {
      return (
        <components.Option {...props} className="option-container">
          <p className="option-label">{props.data.label}</p>
          <CheckIcon className="option-end-icon" />
        </components.Option>
      )
    }, [])

    const renderHelperText = useMemo(() => {
      if (!helperText && !error) {
        return null
      }

      return (
        <div className="helper-text-wrapper">
          {!!error && <AlertCircleIcon className="helper-icon" />}
          <p
            className={classnames('helper-text', {
              'helper-text-error': !!error,
            })}
          >
            {error || helperText}
          </p>
        </div>
      )
    }, [error, helperText])

    return (
      <div
        ref={ref}
        className={classnames('wrapper', size, className, {
          error: !!error,
          disabled: isDisabled,
          'with-start-icon': !!startIcon,
        })}
      >
        <p
          id={comboboxId}
          className={classnames('label', labelClassName, { 'visually-hidden': hiddenLabel })}
        >
          {label}
        </p>
        <Select
          {...rest}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          noOptionsMessage={() => 'No results'}
          className="combobox-wrapper"
          classNamePrefix="combobox"
          components={{ ClearIndicator, DropdownIndicator, ValueContainer, Option }}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isSearchable
          options={options}
        />
        {renderHelperText}
      </div>
    )
  }
)

export default Combobox
