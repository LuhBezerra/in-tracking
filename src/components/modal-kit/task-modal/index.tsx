import { useCallback, useEffect, useMemo, useState } from 'react'

import { Input, Select, Modal } from 'components/ui-kit'
import type { SelectOption } from 'components/ui-kit'
import { useDispatch, useSelector } from 'hooks/redux'
import { categoriesSelector } from 'modules/category/selectors'
import { createTask, updateTask } from 'modules/task/actions'

import type { Task } from 'types/task'

import './index.scss'
import { statusSelector } from 'modules/status/selectors'
import { taskByIdSelector } from 'modules/task/selectors'
import moment from 'moment'

type TaskModalProps = {
  taskId?: string
  onClose: () => void
  onConfirm: () => void
}

export const TaskModal = ({ taskId, onClose, onConfirm }: TaskModalProps) => {
  const [form, setForm] = useState<Task>({
    id: '',
    categoryId: '',
    codStatus: '',
    deadline: '',
    description: '',
    title: '',
  })

  const dispatch = useDispatch()

  const task = useSelector(state => taskByIdSelector(state, taskId || ''))
  const categories = useSelector(categoriesSelector)
  const status = useSelector(statusSelector)

  const categoryOptions = useMemo<SelectOption[]>(
    () => categories?.map(category => ({ value: category.id, label: category.name })),
    [categories]
  )

  const statusOptions = useMemo<SelectOption[]>(
    () => status.map(currentStatus => ({ value: currentStatus.id, label: currentStatus.name })),
    [status]
  )

  const onChange = useCallback(
    event => setForm(prevProps => ({ ...prevProps, [event.target.name]: event.target.value })),
    []
  )

  const onSubmit = useCallback(() => {
    const payload: Task = {
      ...form,
      deadline: moment(form.deadline).format('YYYY-MM-DD'),
    }

    if (taskId) {
      dispatch(updateTask({ taskId, payload }))
    } else {
      dispatch(createTask(payload))
    }

    onConfirm() // TODO: add this in an useEffect after action success
  }, [form, taskId, dispatch, onConfirm])

  useEffect(() => {
    if (task) {
      setForm(task)
    }
  }, [task])

  return (
    <Modal
      className="task-modal"
      title={taskId ? 'Editar tarefa' : 'Adicionar tarefa'}
      isOpen
      onClose={onClose}
      onConfirm={onSubmit}
    >
      <Input
        name="title"
        id="task-title"
        className="title"
        label="Título"
        value={form.title}
        onChange={onChange}
      />
      <Input
        name="description"
        id="task-description"
        className="description"
        label="Descrição"
        type="textarea"
        value={form.description}
        onChange={onChange}
      />
      <Select
        name="categoryId"
        label="Categoria"
        className="category"
        options={categoryOptions}
        value={form.categoryId}
        onChange={onChange}
      />
      <Input
        name="deadline"
        id="task-date"
        className="date"
        label="Data limite"
        mask="date"
        value={form.deadline}
        onChange={onChange}
      />
      <Select
        name="codStatus"
        label="Status"
        className="status"
        options={statusOptions}
        value={form.codStatus}
        onChange={onChange}
      />
    </Modal>
  )
}

export default TaskModal
