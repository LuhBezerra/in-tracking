import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { PlusIcon } from 'assets/icons'
import { Button, Select } from 'components/ui-kit'

import { CategoryCard, TaskCard } from 'components'
import { useToggle } from 'hooks/use-toggle'

import './index.scss'
import { CategoryModal, TaskModal } from 'components/modal-kit'

ChartJS.register(ArcElement, Tooltip)

const TASKS_MOCK = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

const VALUE_MOCK = [
  { value: 'lorem ipsum', label: 'Lorem ipsum' },
  { value: 'lorem ipsum', label: 'Lorem ipsum' },
]

export const Home = () => {
  const [isAddTaskModalOpen, onToggleAddTaskModal] = useToggle()
  const [isCategoryModalOpen, onToggleCategoryModal] = useToggle()

  const data = {
    legend: {
      display: false,
    },
    labels: TASKS_MOCK,
    options: {
      plugins: {
          legend: {
              display: false
          },
      }
  },
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(58, 190, 255, 1)',
          'rgba(255, 207, 77, 1)',
          'rgba(255, 60, 56, 1)',
          'rgba(139, 195, 74, 1)',
        ],
        borderWidth: 6,
      },
    ],
  }

  return (
    <section className="home-wrapper">
      <div className="options-container">
        <Select className="time" placeholder="Hoje" options={VALUE_MOCK} defaultValue={'aaa'} />
        <Select className="status" placeholder="Status" options={VALUE_MOCK} defaultValue={'aaa'} />
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
            {TASKS_MOCK.map(category => (
              <CategoryCard />
            ))}
          </div>
        </div>
        <div className="tasks">
          <p className="title">Tarefas</p>
          {TASKS_MOCK.map((task, index) => (
            <TaskCard key={index} />
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
