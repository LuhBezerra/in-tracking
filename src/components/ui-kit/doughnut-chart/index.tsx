import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import type { ChartData } from 'chart.js'
import classNames from 'classnames'

import './index.scss'
import { ReactNode } from 'react'

ChartJS.register(ArcElement, Tooltip)

type DoughnutChartProps = {
  data: ChartData<'doughnut', number[], unknown>
  label?: ReactNode | string
  title?: string
}

export const DoughnutChart = ({ data, title, label }: DoughnutChartProps) => (
  <div className="chart">
    <p className="title">{title}</p>
    <div className="doughnut-wrapper">
      <Doughnut className="doughnut" data={data} />
      <span className={classNames('total-label', { 'has-only-chart-label': !!data?.labels?.length && !title})}>
        {label}
      </span>
    </div>
  </div>
)

export default DoughnutChart
