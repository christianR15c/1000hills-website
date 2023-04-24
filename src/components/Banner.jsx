import React, { useState } from 'react'

import Image from '../assets/HIK1.png'
import Image1 from '../assets/HIK3.png'
import Image2 from '../assets/HIK4.png'
import Image3 from '../assets/handheld.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import Search from './Search'
import Services from './Services'

const Banner = () => {

    const [currentIndex, setCurrentIndex] = useState(1)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const slides = [
        { url: Image },
        { url: Image1 },
        { url: Image2 },
        { url: Image3 },
    ]



    return (
        <section className='h-full mb-8 xl:mb-24'>
            <div className='flex flex-col-reverse lg:flex-row gap-10'>
                <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-gray-700'>
                        <span className='text-green font-poppins'>Surveillance</span> solutions for a safer world.
                    </h1>
                    <p className='max-w-[480px] mb-8 text-gray-700'>We specialize in providing comprehensive surveillance solutions for businesses and individuals, including state-of-the-art security cameras, advanced monitoring and access control systems. Our team is dedicated to delivering reliable, cost-effective, and customized security services to prevent security breaches and protect assets. We believe security is a fundamental right and aim to ensure peace of mind for our clients.</p>
                </div>
                <div className='flex justify-end items-end h-[250px] lg:h-auto md:h-[400px] relative group'>
                    <img src={slides[currentIndex].url} alt="cover image" className='w-full h-full rounded-tl-[300px] bg-center object-cover' />
                </div>
                {/* <div className='flex justify-end items-end h-[250px] lg:h-auto md:h-[400px] relative group'>
                    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-tl-[300px] bg-center bg-cover' />
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft size={30} onClick={prevSlide} />
                    </div>
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight size={30} onClick={nextSlide} />
                    </div>
                </div> */}
            </div>

            <Services />
            <Search />
        </section>
    )
}

export default Banner