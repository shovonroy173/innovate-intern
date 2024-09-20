import Banner from '@/components/Banner/Banner'
import CardSection from '@/components/Cards/Cards'
import Filter from '@/components/Filter/Filter'
import Slider from '@/components/Slider/Slider'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Banner/>
        <CardSection/>
        <Slider/>
        <Filter/>
    </div>
  )
}

export default Home