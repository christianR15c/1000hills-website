import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import Product from './Product'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'

const CameraList = () => {

    const { products, loading } = useContext(ProductContext)

    if (loading) {
        return (
            <ImSpinner2 className='mx-auto animate-spin text-green text-4xl my-[200px]' />
        )
    }

    if (products.length < 1) {
        <div className='flex text-center text-3xl text-gray-400 justify-center items-center'>
            Sorry, nothing found. Please try again !!!
        </div>
    }

    return (
        <section className='bg-green-50 py-5 lg:py-16 rounded-tl-[90px]'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10'>
                    {products.map((product, index) => (
                        <Link to={`/product/${product.id}`} key={index}>
                            <Product product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CameraList