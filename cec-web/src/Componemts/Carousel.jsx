import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


 



const Carousel = () => {

    const slides = [
        {
            url:'https://ceconline.edu/wp-content/uploads/2022/07/1-IMG-20200819-WA0045.jpg'
        },
        {
            url:'https://ceconline.edu/wp-content/uploads/2022/07/1-pic1-01-scaled.jpeg'
        },
        {
            url:'https://ceconline.edu/wp-content/uploads/2022/07/1-final.png'
        }
    ];

const [currentIndex,setCurrentIndex]=useState(0)

const prevSlide = () =>{
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
}
const nextSlide = () =>{
    const isLastSlide = currentIndex ===slides.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
}
const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <div className='h-screen w-screen  bg-gradient-to-r from-transparent to-black z-30     '>
       
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='h-full   bg-cover bg-bottom group transform transition-all duration-1000  z-20  '>
        
        <div className='h-full w-full bg-gradient-to-r from-transparent to-black z-30' ></div>
      </div>
        
            <div  className='transform hover:scale-110 transition ease-in-out duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='transform hover:scale-110 transition ease-in-out duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer '>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

           
        </div>
  )
}

export default Carousel