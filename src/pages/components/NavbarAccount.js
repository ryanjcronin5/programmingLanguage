import * as React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarAccount() {
    return (
        <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
            <div className='flex justify-between items-center text-white'>
                <ul className='hidden md:flex'>
                    <li className='p-4'>Login</li>
                    <li className='p-4'>Sign Up</li>
                </ul>
                <Link to="/" rel='noreferrer' target='_self' className=' bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4'>Home</Link>
            </div>
        </div>
    )
}