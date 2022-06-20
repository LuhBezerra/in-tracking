import { Button, DoughnutChart } from 'components/ui-kit'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { useDispatch, useSelector } from 'hooks/redux'
import {
  standardTaskByMonthSelector,
  standardTaskByTotalTimeSelector,
  standardTaskByWeekSelector,
  totalOverdueSelector,
  totalPendingSelector,
  totalPunctualSelector,
  totalRegisteredTasksSelector,
} from 'modules/task/selectors'
import {
  getStandardTaskByMonth,
  getStandardTaskByTotalTime,
  getStandardTaskByWeek,
  getTotalOverdueTasks,
  getTotalPendingTasks,
  getTotalPunctualTasks,
  getTotalRegisteredTasks,
} from 'modules/task/actions'

import './index.scss'
import { useCallback, useEffect } from 'react'
import { API_URL } from 'config/environment'
import { getToken } from 'utils/get-token'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const Reports = () => {
  const dispatch = useDispatch()

  const totalRegistered = useSelector(totalRegisteredTasksSelector)
  const totalPunctual = useSelector(totalPunctualSelector)
  const totalOverdue = useSelector(totalOverdueSelector)
  const totalPending = useSelector(totalPendingSelector)
  const standardTaskByMonth = useSelector(standardTaskByMonthSelector)
  const standardTaskByTotalTime = useSelector(standardTaskByTotalTimeSelector)
  const standardTaskByWeek = useSelector(standardTaskByWeekSelector)

  // ../tasks/export-csv/:token

  const doughnutData = {
    labels: ['Atividades pendentes', 'Atividades em atraso', 'Atividades em dia'],
    datasets: [
      {
        label: '# of Votes',
        data: [totalPending, totalOverdue, totalPunctual],
        backgroundColor: ['#3ABEFF', '#FF3C38', '#8BC34A'],
        borderWidth: 6,
      },
    ],
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  }

  const labels = [
    'Atividades concluídas por mês',
    'Atividades concluídas por semana',
    'Tempo (horas) passado nas atividades',
  ]

  const barData = {
    labels,
    datasets: [
      {
        data: [20, 5, 12],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const onDownload = useCallback(() => {
    window.location.href = `${API_URL}/task/export-csv/${getToken()}`
  }, [])

  useEffect(() => {
    dispatch(getTotalRegisteredTasks())
    dispatch(getTotalOverdueTasks())
    dispatch(getTotalPendingTasks())
    dispatch(getTotalPunctualTasks())
    dispatch(getStandardTaskByMonth())
    dispatch(getStandardTaskByTotalTime())
    dispatch(getStandardTaskByWeek())
  }, [dispatch])

  return (
    <section className="reports-wrapper">
      <Button className="download-button" type="button" onClick={onDownload}>
        Baixar csv
      </Button>
      <div className="content">
        <DoughnutChart
          title="Atividades"
          /* @ts-ignore */
          data={doughnutData}
          label={
            <>
              Total <br /> {totalRegistered}
            </>
          }
        />
        <p className="title">Médias</p>
        <Bar className="bar-chart" options={options} data={barData} />
      </div>
    </section>
  )
}

export default Reports
