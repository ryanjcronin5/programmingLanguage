import * as React from 'react';

import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import FirstGeneration from './components/FirstGeneration';
import SecondGeneration from './components/SecondGeneration';
import Event from './components/Events';
import ThirdGeneration from './components/ThirdGeneration';

export default function Home() {
    return (
        <div className='px-6 lg:px-20 xl:px-36 bg-dark-500'>
            <Navbar />
            <Hiro />
            <FirstGeneration />
            <SecondGeneration />
            <ThirdGeneration />
            <Event/>
        </div>
    )
}