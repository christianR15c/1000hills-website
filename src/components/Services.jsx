import React from 'react'
import { services } from '../data'

const Services = () => {
    return (
        <section className='px-[30px] py-6 max-w-[1170px] bg-green-100 md:mx-auto mx-4 flex md:flex-col flex-row md:gap-2 justify-center items-center relative md:bg-transparent md:backdropbackdrop-blur shadow-md rounded-lg'>
            <h2 className="font-semibold text-2xl text-green-600">Services</h2>
            <span className="block text-sm">What we offer</span>

            <div className="flex justify-between flex-wrap p-4 border-2 border-gray-300 rounded-xl items-center mb-2">
                {
                    services.map((service, index) => (
                        <div className='flex items-center' key={index}>
                            <i class={`${service.icon} services__icon`}  ></i>
                            <p className='flex items-start justify-start'>{service.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services


