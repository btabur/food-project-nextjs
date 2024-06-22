import Campaing from '@/components/Campaing'
import Carousel from '@/components/Carousel'
import MenuWrapper from '@/components/product/MenuWrapper'
import About from '@/components/ui/About'
import Reservation from '@/components/ui/Reservation'
import React from 'react'

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