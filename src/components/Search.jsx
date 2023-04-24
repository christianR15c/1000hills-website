import React, { useContext } from 'react'
import CategoryDropDown from './CategoryDropDown'
import { RiSearch2Line } from 'react-icons/ri'
import { ProductContext } from './ProductContext'

const Search = () => {

    const { products, handleClick } = useContext(ProductContext)

    return (
        <div className='px-[30px] mt-4 py-6 max-w-[1170px] md:mx-auto mx-4 flex flex-col md:flex-row md:gap-24 justify-center items-center relative bg-white md:bg-transparent md:backdropbackdrop-blur shadow-md rounded-lg'>
            <CategoryDropDown />
            <button
                className='primary-color hover:primary-color-hover transition w-full md:max-w-[162px] h-12 rounded-lg flex justify-center items-center text-white text-lg'
                onClick={handleClick}
            >
                <RiSearch2Line />
            </button>
        </div>
    )
}

export default Search