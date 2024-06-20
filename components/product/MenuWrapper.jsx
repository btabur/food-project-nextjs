import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <section className='container mx-auto my-20 '>
        <div className='flex flex-col items-center w-full'>
            <Title addClass={"text-[40px]"}>Our Menu</Title>
            <div className='mt-14 flex gap-5 items-center'>
                <button className='px-6 py-2 bg-secondary rounded-3xl text-white'>All</button>
                <button className='px-6 py-2 '>Burger</button>
                <button className='px-6 py-2 '>Pizza</button>
                <button className='px-6 py-2 '>Drink</button>
            </div>
        </div>
       
        <div className='mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
    </section>
  )
}

export default MenuWrapper