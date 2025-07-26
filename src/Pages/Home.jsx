import React, { useContext, useEffect } from 'react'
import Carousel from '../components/Carousel'
import { DataContext } from '../context/DataContext'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'

const Home = () => {
  
  return (
    <div className='overflow-x-hidden'>
      <Carousel/>
      <MidBanner/>
      <Features/>
    </div>
  )
}

export default Home