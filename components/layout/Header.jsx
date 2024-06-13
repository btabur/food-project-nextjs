import React from 'react'
import Logo from '../ui/Logo'

const Header = () => {
  return (
   <header className='h-[5.5rem] bg-secondary '>
   <div className="container mx-auto flex justify-between items-center text-white h-full">
   <Logo/>
    <nav>
      <ul className='flex gap-10'>
        <li className='text-primary'>HOME</li>
        <li>MENU</li>
        <li>ABOUT</li>
        <li>BOOK TABLE</li>
      </ul>
    </nav>
    <div></div>
   </div>
   </header>
  )
}

export default Header