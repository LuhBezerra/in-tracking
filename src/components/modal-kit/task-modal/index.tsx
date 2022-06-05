import { Input, Select, Modal } from 'components/ui-kit'

import './index.scss'

type TaskModalProps = {
  defaultValue?: string
  onClose: () => void
  onConfirm: () => void
}

const VALUE_MOCK = [
  { value: 'lorem ipsum', label: 'Lorem ipsum' },
  { value: 'lorem ipsum', label: 'Lorem ipsum' },
]

export const TaskModal = ({ defaultValue, onClose, onConfirm }: TaskModalProps) => {
  return (
    <Modal
      className="task-modal"
      title="Adicionar tarefa"
      isOpen
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <Input id="task-title" className="title" label="Título" />
      <Input id="task-description" className="description" label="Descrição" type="textarea" />
      <Select label="Categoria" className="category" options={VALUE_MOCK} defaultValue={'aaa'} />
      <Input id='task-date' className="date" label="Data limite" mask="date" />
      <Select label="Status" className="status" options={VALUE_MOCK} defaultValue="aaa" />
    </Modal>
  )
}

export default TaskModal
