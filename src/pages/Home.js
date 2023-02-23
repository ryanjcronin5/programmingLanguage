import * as React from 'react';
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import FirstGeneration from './components/FirstGeneration';
import SecondGeneration from './components/SecondGeneration';
import ThirdGeneration from './components/ThirdGeneration';
import FourthGeneration from './components/FourthGeneration';
import Event from './components/Events';

export default function Home() {
    return (
        <div className='px-6 lg:px-20 xl:px-36 bg-dark-500'>
            <Navbar />
            <Hiro />
            <FirstGeneration />
            <SecondGeneration />
            <ThirdGeneration />
            <FourthGeneration />
            <Event />
        </div>
    )
}