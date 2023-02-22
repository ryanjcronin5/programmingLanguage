import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollCard from './ScrollCard';

export default function ThirdGeneration() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div id="MoreScroller" className="mt-4 text-white">
            <br/><br/>
            <h1 className="text-2xl font-bold">Third Generation</h1>
            <p className="font-light text-gray-400">Starting in the 1960s</p>

            <div className="mt-4">
                <Slider {...settings}>
                <ScrollCard 
                        name="Convair F-102 Delta Dagger"
                        description="The Convair F-102 Delta Dagger was an interim delta-wing interceptor design fielded by the USAF until the arrival of the more capable Convair F-106 Delta Dart series."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Convair F-106 Delta Dart"
                        description="Description"
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Dassualt Mirage F1"
                        description="Description"
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Dassault Mirage III"
                        description="The Dassault Mirage III interceptor-strike fighter series proved a commercial success for the French company with combat advertising courtesy of Israel during the 1967 Six Day War."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Dassault Super Mystere"
                        description="Description"
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="General Dynamics F-111 Aardvark"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Hawker Siddeley AV-8 Harrier"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Lockheed F-104 Starfighter"
                        description="The Lockheed F-104 Starfighter served a greater role with air forces abroad than it did with the USAF, though its operational service was not without issues."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="McDonnell Douglas F-4 Phantom II"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="McDonnell F-101 Voodoo"
                        description="The McDonnell F-101 Voodoo achieved several endurance and speed records during her time aloft, earning the nickname of One-Oh-Wonder in the process."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Mikoyan-Gurevich MiG-17"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Mikoyan-Gurevich MiG-19"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Mikoyan-Gurevich MiG-21"
                        description="The successful Mikoyan-Gurevich MiG-21 Fishbed was a giant leap from earlier MiG turbojet-powered, swept-wing fighters for the Soviets"
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Mikoyan-Gurevich MiG-23"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="North American F-100 Super Sabre"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Republic F-105 Thunderchief"
                        description="The large Republic F-105 Thundercheif was the most technologically advanced aircraft of its type when introduced in the late-1950s."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Shenyang J-8 / J-8 II"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Sukhoi Su-17/20/22"
                        description=""
                        date="Date"
                        developer="developer"
                    />
                </Slider>
            </div>
            <br/><hr className='border-sky-700 bg-sky-700 border-2'/>
        </div>
    )
}