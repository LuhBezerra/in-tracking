import { useMemo } from 'react'
import classnames from 'classnames'

import { PlusIcon, LogoIcon } from 'assets/icons'
import { MoreActions, Button, Input, Modal, Select } from 'components/ui-kit'

import './index.scss'

import { useToggle } from 'hooks/use-toggle'

type HeaderProps = {
  className: string
}

const VALUE_MOCK = [
  { value: 'lorem ipsum', label: 'Lorem ipsum' },
  { value: 'lorem ipsum', label: 'Lorem ipsum' },
]

export const Header = ({ className }: HeaderProps) => {
  const [isAddTaskModalOpen, onToggleAddTaskModal] = useToggle()

  const options = useMemo(
    () => [
      {
        onSelect: () => {},
        label: 'Sair',
        // icon: DeleteIcon,
      },
    ],
    []
  )

  return (
    <section className={classnames('header', className)}>
      <div className="header-content">
        <LogoIcon />
        <h1 className="logo-text">InTracking</h1>
        <MoreActions className="user-menu" options={options}>
          <p className="user-menu-text">Olá, Maria</p>
        </MoreActions>
      </div>
      <div className="options-container">
        <Select className="time" placeholder="Hoje" options={VALUE_MOCK} defaultValue={'aaa'} />
        <Select
          className="category"
          placeholder="Categoria"
          options={VALUE_MOCK}
          defaultValue={'aaa'}
        />
        <span className="divider" />
        <Button className="clear-button" type="button">
          Limpar
        </Button>
        <Button className="add-button" type="button" onClick={onToggleAddTaskModal}>
          <PlusIcon className="plus-icon" />
        </Button>
        <Modal className="tasks-modal" isOpen={isAddTaskModalOpen}>
          <h1 className="title">Adicionar tarefa</h1>
          <Input label="Título" />
          <Input label="Descrição" type="textarea" />
          <Select
            label="Categoria"
            className="category"
            options={VALUE_MOCK}
            defaultValue={'aaa'}
          />
          <Select label="Status" className="category" options={VALUE_MOCK} defaultValue={'aaa'} />
          <footer className="footer">
            <Button
              className="button"
              type="button"
              theme="secondary"
              onClick={onToggleAddTaskModal}
            >
              Cancelar
            </Button>
            <Button className="button" type="button" onClick={onToggleAddTaskModal}>
              Adicionar
            </Button>
          </footer>
        </Modal>
      </div>
    </section>
  )
}

export default Header
