import * as React from 'react';
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import PatchList from './components/PatchList';
import Event from './components/Events';

export default function Home() {
    return (
        <div className='px-6 lg:px-20 xl:px-36 bg-dark-500'>
            <Navbar />
            <Hiro />
            <PatchList />
            <Event />
        </div>
    )
}