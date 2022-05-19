import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { Header, TaskCard } from 'components'

import './index.scss'

ChartJS.register(ArcElement, Tooltip)

const TASKS_MOCK = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
export const Home = () => {
  const data = {
    labels: TASKS_MOCK,
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
      <Header className="header" />
      <div className="content">
        <div className="chart">
          <Doughnut className="doughnut" data={data} />
        </div>
        <div className="categories">
          <p className="title">Categorias</p>
          {TASKS_MOCK.map(category => (
            <div className="category-wrapper">
              <span className="dot" />
              <p className="category-title">lorem ipsum</p>
            </div>
          ))}
        </div>
        <div className="tasks">
          <p className="title">Tarefas</p>
          {TASKS_MOCK.map((task, index) => (
            <TaskCard key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
