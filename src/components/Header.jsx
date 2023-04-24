import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import logo1 from '../assets/1000hills-logo.png'

import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'

const Header = () => {
    return (
        <header className='mb-12 border-b'>
            <div className='mx-auto py-2 primary-color text-white font-semibold px-6'>
                <div className='flex gap-4 items-center py-1'>
                    <AiOutlineMail />
                    <a href="mailto:no-reply@example.com" target="_blank" rel="noopener noreferrer">info@1000hillsupply.com</a>
                </div>
                <div className='flex gap-4 items-center py-1'>
                    <BsTelephone />
                    <a href="tel:+250 787 410 990" target="_blank" rel="noopener noreferrer">+250 787 410 990</a>
                    {/* <p>+250 787 410 990</p> */}
                </div>
                <div className='flex gap-4 items-center py-1'>
                    <BsWhatsapp />
                    <a href="http://wa.me/+250787410990" target="_blank" rel="noopener noreferrer">+250 787 410 990</a>
                </div>
            </div>
            <div className="py-2 pb-4 container mx-auto flex justify-between items-center">
                <Link to='/'>
                    <img src={logo1} alt='company-logo' className='h-[50px]' />
                </Link>

                <div className='flex items-center'>
                    <BiMenuAltRight className='h-[40px] w-[40px] cursor-pointer' />
                </div>
            </div>
        </header>
    )
}

export default Header 