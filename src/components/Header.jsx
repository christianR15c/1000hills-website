import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import logo1 from '../assets/1000hills-logo.png'

const Header = () => {
    return (
        <header className='py-4 mb-12 border-b'>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/'>
                    <img src={logo1} alt='company-logo' className='h-[50px]' />
                </Link>

                <div className='flex items-center gap-6'>
                    <Link className='hover:text-green-400' to=''>Log in</Link>
                    <Link className='bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition' to=''>Sign Up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header