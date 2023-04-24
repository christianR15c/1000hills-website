import React from 'react'
import { BiCamera, BiLaptop, BiAlarm } from 'react-icons/bi'

const Product = ({ product }) => {

    const { category, description, image, name, price } = product

    return (
        <div>
            <div className='mb-4 bg-white shadow-md p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
                <div className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] mb-8'>
                    <img src={image} alt='product image' className='h-full w-full object-cover rounded-tl-[90px] rounded-br-[90px]' />
                </div>
                <div className='mb-4 flex gap-x-2 text-sm'>
                    <div className='bg-green-500 rounded-full px-3 text-white'>{category}</div>
                </div>
                <div className='text-gray-600 mb-1'>{description}</div>
                <div className='text-green-600 text-[16px] font-bold'>{name}</div>
                <div className='text-violet-700 font-semibold'>{price} Rwf</div>
            </div>
        </div>
    )
}

export default Product