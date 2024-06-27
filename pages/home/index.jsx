
import React from 'react'
import Carousel from '../../components/Carousel'
import MenuWrapper from '../../components/product/MenuWrapper'
import About from '../../components/ui/About'
import Reservation from '../../components/ui/Reservation'
import Campaing from '../../components/Campaing'

const Index = () => {
  return (
    <main>
      <Carousel/>
      <Campaing/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
    </main>
  )
}

export default Index