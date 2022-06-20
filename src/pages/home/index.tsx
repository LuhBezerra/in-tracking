import { useCallback, useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { PlusIcon } from 'assets/icons'
import { Button, Select } from 'components/ui-kit'
import { CategoryCard, TaskCard } from 'components'
import { useToggle } from 'hooks/use-toggle'
import { useDispatch, useSelector } from 'hooks/redux'
import { categoriesSelector } from 'modules/category/selectors'
import { CategoryModal, TaskModal } from 'components/modal-kit'
import { getCategories } from 'modules/category/actions'

import './index.scss'
import { getStatus } from 'modules/status/actions'
import { statusSelector } from 'modules/status/selectors'
import { tasksSelector, totalTasksByCategoriesSelector } from 'modules/task/selectors'
import { getFilteredTasks, getTasks, getTotalTasksByCategories } from 'modules/task/actions'
import { timesSelector } from 'modules/time/selectors'
import { getTimes } from 'modules/time/actions'
import { FiltersTasks } from 'services/task'

ChartJS.register(ArcElement, Tooltip)

const FILTERS_INITIAL_STATE = {
  categoryId: '',
  statusId: '',
  timeId: '',
}

const formatOptions = (options: any[]) =>
  options.map(option => ({ value: option.id, label: option.name }))

export const Home = () => {
  const [isAddTaskModalOpen, onToggleAddTaskModal] = useToggle()
  const [isCategoryModalOpen, onToggleCategoryModal] = useToggle()

  const [filters, setFilters] = useState<FiltersTasks>(FILTERS_INITIAL_STATE)

  const dispatch = useDispatch()

  const categories = useSelector(categoriesSelector)
  const tasks = useSelector(tasksSelector)
  const status = useSelector(statusSelector)
  const times = useSelector(timesSelector)
  const totalTasksByCategories = useSelector(totalTasksByCategoriesSelector)

  const data = {
    labels: totalTasksByCategories?.map(task => task.name),

    datasets: [
      {
        data: totalTasksByCategories?.map(task => task.total),
        backgroundColor: totalTasksByCategories?.map(task => task.color),
        borderWidth: 6,
      },
    ],
  }

  const onChange = useCallback(event => {
    setFilters(prevProps => ({ ...prevProps, [event.target.name]: event.target.value }))
  }, [])

  const onClear = useCallback(() => {
    setFilters(FILTERS_INITIAL_STATE)
    dispatch(getTasks())
  }, [dispatch])

  useEffect(() => {
    dispatch(getTasks())
    dispatch(getCategories())
    dispatch(getTotalTasksByCategories())
    dispatch(getStatus())
    dispatch(getTimes())
  }, [dispatch])

  useEffect(() => {
    if (Object.values(filters).some(filter => !!filter)) {
      dispatch(getFilteredTasks(filters))
    }
  }, [filters, dispatch])

  return (
    <section className="home-wrapper">
      <div className="options-container">
        <Select
          name="timeId"
          className="time"
          placeholder="Tempo"
          options={formatOptions(times)}
          value={filters.timeId}
          onChange={onChange}
        />
        <Select
          name="statusId"
          className="status"
          placeholder="Status"
          options={formatOptions(status)}
          value={filters.statusId}
          onChange={onChange}
        />
        <Select
          name="categoryId"
          className="category"
          placeholder="Categoria"
          options={formatOptions(categories)}
          value={filters.categoryId}
          onChange={onChange}
        />
        <span className="divider" />
        <Button className="clear-button" type="button" onClick={onClear}>
          Limpar
        </Button>
        <Button className="add-button" type="button" onClick={onToggleAddTaskModal as VoidFunction}>
          <PlusIcon className="plus-icon" />
        </Button>
      </div>
      <div className="content">
        <div className="chart">
          <Doughnut className="doughnut" data={data} />
        </div>
        <div className="categories">
          <p className="title">Categorias</p>
          <button className="add-category" onClick={onToggleCategoryModal as VoidFunction}>
            <PlusIcon />
          </button>
          <div className="categories-content">
            {categories?.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
        <div className="tasks">
          <p className="title">Tarefas</p>
          {tasks?.map((task, index) => (
            <TaskCard key={task.id} taskId={task.id} />
          ))}
        </div>
      </div>
      {isAddTaskModalOpen && (
        <TaskModal
          onClose={onToggleAddTaskModal as VoidFunction}
          onConfirm={onToggleAddTaskModal as VoidFunction}
        />
      )}
      {isCategoryModalOpen && (
        <CategoryModal
          onClose={onToggleCategoryModal as VoidFunction}
          onConfirm={onToggleCategoryModal as VoidFunction}
        />
      )}
    </section>
  )
}

export default Home
