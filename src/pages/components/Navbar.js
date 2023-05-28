import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
            <div className="flex justify-between items-center text-white">
                <ul className="hidden md:flex">
                    <li aria-label="Top of page" className="p-4"><a href="#home" className="hover:underline">About</a></li>
                    <li aria-label="Current Languages" className="p-4"><a href="#first" className="hover:underline">Current Languages</a></li>
                    <li aria-label="Ground Laying Languages" className="p-4"><a href="#second" className="hover:underline">Foundational</a></li>
                </ul>
                <Link to="/account" rel='noreferrer' target='_self' className=' bg-teal-500 rounded-full px-4 py-1 border-teal-800 border-4'>Login</Link>
            </div>
        </div>
    )
}