import { useCallback, useMemo } from 'react'
import moment from 'moment'
import classnames from 'classnames'

import { MoreActions } from 'components/ui-kit'
import { MoreIcon } from 'assets/icons'
import { useToggle } from 'hooks/use-toggle'
import { TaskModal } from 'components/modal-kit'
import { useDispatch, useSelector } from 'hooks/redux'
import { taskByIdSelector } from 'modules/task/selectors'
import { statusSelector } from 'modules/status/selectors'
import { deleteTask } from 'modules/task/actions'

import type { Task } from 'types/task'

import './styles.scss'

type TaskCardProps = {
  taskId: Task['id']
}

export const TaskCard = ({ taskId }: TaskCardProps) => {
  const [isEditTaskModalOpen, onToggleEditTaskModal] = useToggle()

  const dispatch = useDispatch()
  moment.locale('pt-br')

  const task = useSelector(state => taskByIdSelector(state, taskId))
  const status = useSelector(statusSelector)

  const onDelete = useCallback(() => dispatch(deleteTask(taskId)), [taskId, dispatch])

  // console.log(moment(task?.deadline).endOf('day').fromNow())

  const options = useMemo(
    () => [
      {
        onSelect: onDelete,
        label: 'Deletar',
      },
      {
        onSelect: onToggleEditTaskModal as VoidFunction,
        label: 'Editar',
      },
    ],
    [onToggleEditTaskModal, onDelete]
  )

  return (
    <div className="task-wrapper">
      <span
        className="dot"
        style={{ background: task?.categories?.length ? task?.categories[0]?.color  : 'black' }}
      />
      <p className="task-title">{task?.title}</p>
      <p className="description">
        7 dias restantes - {moment(task?.deadline).format('DD MMM YYYY')}
      </p>
      <span
        className={classnames('status', {
          'to-do': String(task?.codStatus) === '1',
          'in-progress': String(task?.codStatus) === '2',
          done: String(task?.codStatus) === '3',
        })}
      >
        {status.find(currentStatus => task?.codStatus === currentStatus.id)?.name}
      </span>
      <MoreActions title="More actions" className="more-icon" icon={MoreIcon} options={options} />
      {isEditTaskModalOpen && (
        <TaskModal
          taskId={taskId}
          onClose={onToggleEditTaskModal as VoidFunction}
          onConfirm={onToggleEditTaskModal as VoidFunction}
        />
      )}
    </div>
  )
}
