import React from 'react'
import classnames from 'classnames'

import { PlusIcon } from '../../assets/icons'
import { LogoIcon } from '../../assets/icons'
import { Combobox, Button } from '../ui-kit'

import './index.scss'

type HeaderProps = {
  className: string
}

const VALUE_MOCK = { label: '', value: '' }
export const Header = ({ className }: HeaderProps) => {
  return (
    <section className={classnames('header', className)}>
      <div className="logo">
        <LogoIcon />
        <h1 className="logo-text">InTracking</h1>
      </div>
      <div className="options-container">
        <Combobox
          placeholder="Hoje"
          value={VALUE_MOCK}
          onChange={() => {}}
          options={[VALUE_MOCK]}
          className="time-combobox"
          hiddenLabel
          id="time"
          label="Label"
        />
        <Combobox
          placeholder="Selecione uma categoria"
          value={VALUE_MOCK}
          onChange={() => {}}
          options={[VALUE_MOCK]}
          className="category-combobox"
          hiddenLabel
          id="time"
          label="Label"
        />
        <span className="divider" />
        <Button className="clear-button" type="button">
          Limpar
        </Button>
        <Button className="add-button" type="button">
          <PlusIcon className="plus-icon" />
        </Button>
      </div>
    </section>
  )
}

export default Header
