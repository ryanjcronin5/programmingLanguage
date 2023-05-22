import { useState } from 'react'
import profile from '../assets/profile.png';

export default function Hiro() {
    const [loaded, setLoaded] = useState(true);
    return (
        <>
            {loaded ?
                <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-dark-500 flex flex-col items-center justify-center text-white'>
                    Loading...
                </div> : null
            }
            <div id='home' className='flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative'>
                <div className='md:w-3/6 md:p-4'>
                    <img data-aos="fade-down-right" data-aos-duration="1500" data-aos-offset="200" src={profile} alt="profile" onLoad={() => setLoaded(false)} />
                </div>

                <div className='md:3/6' data-aos='fade-right' data-aos-duration='1000' data-aos-offset='100'>
                    <div className='flex flex-col w-full mt-8 items-start'>
                        <h1 className='text-lg text-gray-400'>Evolution of</h1>
                        <h1 className='text-lg font-bold'>Programming Languages</h1>
                        <p className='text-md font-light text-gray-300'></p>
                        <p className='text-md font-light text-gray-300'></p>
                    </div>

                    <ul className='flex mt-2 gap-4 items-center'>
                        <li>
                            <a href='https://github.com/ryanjcronin5/Jet-Fighter_Generations' rel='noreferrer' target='_blank'>Github</a>
                        </li>
                    </ul>

                </div>
            </div>
            <hr className='border-sky-700 bg-sky-700 border-2' /><br />
        </>
    )
}