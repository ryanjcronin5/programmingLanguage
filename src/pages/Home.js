import * as React from 'react';
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Current from './components/Current';
import Ground from './components/Ground';
import Content from './components/Content';

export default function Home() {
    return (
        <div className='px-6 lg:px-20 xl:px-36 bg-dark-500'>
            <Navbar />
            <Hiro />
            <Current />
            <Ground />
            <Content />
        </div>
    )
}