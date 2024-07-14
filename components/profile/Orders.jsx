import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'

const Orders = () => {
  return (
   <section className='min-h-80 w-full md:w-2/3 '>
    <Title addClass={"text-[40px]"}>Orders</Title>
     <table className="mt-5 w-full border text-center text-gray-300 ">
    <thead className=" text-xl  w-full">
      <tr className="bg-slate-600 ">
        <th className="py-3 px-6">Id</th>
        <th className="py-3 px-6">Address</th>
        <th className="py-3 px-6">Date</th>
        <th className="py-3 px-6">Total</th>
        <th className="py-3 px-6">Status</th>
      </tr>
    </thead>
    <tbody className="bg-secondary ">
      <tr className="py-4 hover:bg-primary transition cursor-pointer">
        <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
          <span>6375..</span>
        </td>
        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Adana</td>
        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">01-09-2024</td>
        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">18$</td>
        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">preparing</td>
      </tr>
    </tbody>
  </table>
   </section>
  )
}

export default Orders