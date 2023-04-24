import React, { useState, useEffect, useContext } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { ProductContext } from './ProductContext'
import { Menu } from '@headlessui/react'
import { BiCategory } from 'react-icons/bi'

const CategoryDropDown = () => {

    const { products, category, setCategory, categories } = useContext(ProductContext)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Menu as='div' className='dropdown md:mb-0 mb-4 lg:max-w-[296px] relative'>
            <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
                <BiCategory className='dropdown-icon-primary' />
                <div className=''>

                    <div className='text-[15px] font-medium leading-tight'>{category}</div>
                    <div className='text-[13px]'>select category</div>

                </div>
                {
                    isOpen ? (
                        <RiArrowUpSLine className='dropdown-icon-secondary' />
                    ) : (
                        <RiArrowDownSLine className='dropdown-icon-secondary' />
                    )
                }
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
                {categories.map((category, index) => (
                    <Menu.Item
                        onClick={() => setCategory(category)}
                        className='cursor-pointer hover:text-gray-200 h-full transition'
                        as='li'
                        key={index}
                    >
                        {category}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
}

export default CategoryDropDown