import React from 'react'
import Title from '../ui/Title'
import CustomerItem from './CustomerItem'
import Slider from 'react-slick';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Customers = () => {
  const NextArrow = ({onClick})=> {
    return(
      <button className='text-white bg-primary rounded-full text-3xl p-2  absolute -bottom-16 translate-x-1/2 left-1/2' onClick={onClick}>
        <IoIosArrowForward />
      </button>
    )

  }
  const PrevArrow = ({onClick})=> {
    return(
      <button className='text-white bg-primary rounded-full text-3xl p-2  absolute -bottom-16 translate-x-2 right-1/2' onClick={onClick}>
        <IoIosArrowBack />
      </button>
    )

  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:3500,
    arrows:true, 
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive:[
     { 
      breakpoint:768,
      settings:{
        slidesToShow:1,
        arrows:false
      }
    }
    ]
  };
  return (
    <section className='container mx-auto mb-36'>
      <Title addClass={"text-[40px] text-center mb-4 "}> What says Our Customers </Title>
        
          <Slider {...settings}>
          <CustomerItem imgSrc={"/images/c1.jpg"}/>
          <CustomerItem imgSrc={"/images/c2.jpg"}/>
          <CustomerItem imgSrc={"/images/c1.jpg"}/>
          <CustomerItem imgSrc={"/images/c2.jpg"}/>
          </Slider>
    </section>
  )
}

export default Customers