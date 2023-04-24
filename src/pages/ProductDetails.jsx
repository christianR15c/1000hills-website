import React from 'react'
import { productData } from '../data'
import { useParams } from 'react-router-dom'
import { BiCamera, BiLaptop, BiAlarm } from 'react-icons/bi'
import { BsCheckAll } from 'react-icons/bs'

const ProductDetails = () => {

    const { id } = useParams()

    const product = productData.find(product => {
        return product.id === parseInt(id)
    })

    return (
        <section className='container mx-auto mb-14'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <div className='flex flex-col'>
                    <h2 className='text-2xl font-semibold mb-4'>{product.name}</h2>
                    <h2 className='bg-gradient-to-r from-green-600 via-green-400 to-green-300 text-white text-center rounded-lg'>{product.category}</h2>
                </div>
                <div className='text-3xl font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent py-3'>{product.price} Rwf</div>
            </div>
            <div>
                <div className='w-full mt-3 flex flex-col md:flex-row gap-5'>
                    <div className='h-[250px] w-full md:h-[320px]  lg:h-[400px] md:w-[50%] border border-green-500 rounded-3xl'>
                        <img src={product.image} alt="" className='w-full h-full object-cover rounded-3xl' />
                    </div>
                    <div className='bg-gradient-to-b from-green-400 via-green-200 to-green-100 h-fit md:h-[320px] lg:h-[400px] w-full md:w-[50%] p-10 rounded-tl-[90px] rounded-br-[90px]'>
                        <h2 className='text-xl font-semibold py-2'>Tech Specifications</h2>

                        <ul className='list-disc list-inside px-1'>
                            <li>Lorem Ipsum camera lorem ipsum </li>
                            <li>Lorem Ipsum camera lorem ipsum </li>
                            <li>Lorem Ipsum camera lorem ipsum </li>
                            <li>Lorem Ipsum camera lorem ipsum </li>
                            <li>Lorem Ipsum camera lorem ipsum </li>
                            <li>Lorem Ipsum camera lorem ipsum </li>
                            <li>Lorem Ipsum camera lorem ipsum </li>
                        </ul>


                        <div className='mt-4 flex gap-5'>
                            <button className='p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
                                <a href="http://wa.me/+250787410990" target="_blank" rel="noopener noreferrer" className='block text-black px-4 py-2 font-semibold rounded-full bg-white'>Order Now</a>
                            </button>
                            <button className='p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
                                <a href="tel:+250 787 410 990" target="_blank" rel="noopener noreferrer" className='block text-black px-4 py-2 font-semibold rounded-full bg-white'>Call Us</a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails