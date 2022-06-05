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

import './index.scss'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const Reports = () => {
  const doughnutData = {
    labels: ['Atividades pendentes', 'Atividades em atraso', 'Atividades em dia'],
    datasets: [
      {
        label: '# of Votes',
        data: [5, 6, 1],
        backgroundColor: ['#3ABEFF', '#FF3C38', '#8BC34A'],
        borderWidth: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  }

  const labels = [
    'Atividades concluídas por mês',
    'Atividades concluídas por semana',
    'Tempo médio passado nas atividades',
  ]

  const barData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => '34'),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <section className="reports-wrapper">
      <Button className="download-button" type="button">
        Baixar csv
      </Button>
      <div className="content">
        <DoughnutChart
          title="Atividades"
          data={doughnutData}
          label={
            <>
              Total <br /> 12
            </>
          }
        />
        <Bar className="bar-chart" options={options} data={barData} />
      </div>
    </section>
  )
}

export default Reports
