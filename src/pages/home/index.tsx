import React from 'react'
import { Header } from '../../components'

import './index.scss'

export const Home = () => {
  return (
    <section className='home-wrapper'>
      <Header className='header'/>
      <div className='content'>
        Content
      </div>
    </section>
  )
}

export default Home
