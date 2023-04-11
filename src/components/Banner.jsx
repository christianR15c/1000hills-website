import React from 'react'

import Image from '../assets/HIK1.png'
import Search from './Search'

const Banner = () => {
    return (
        <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
            <div className='flex flex-col-reverse lg:flex-row gap-10'>
                <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                        <span className='text-violet-700'>Surveillance</span> solutions for a safer world.
                    </h1>
                    <p className='max-w-[480px] mb-8'>We specialize in providing comprehensive surveillance solutions for businesses and individuals, including state-of-the-art security cameras, advanced monitoring and access control systems. Our team is dedicated to delivering reliable, cost-effective, and customized security services to prevent security breaches and protect assets. We believe security is a fundamental right and aim to ensure peace of mind for our clients.</p>
                </div>
                <div className='flex justify-end items-end'>
                    <img src={Image} alt="cover image" className='rounded-tl-[300px] h-[250px] lg:h-auto md:h-[400px]' />
                </div>
            </div>
            <Search />
        </section>
    )
}

export default Banner