import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollCard from './ScrollCard';

export default function SecondGeneration() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div id="second" className="mt-4 text-white">
            <br/><br/>
            <h1 className="text-2xl font-bold">Second Generation</h1>
            <p className="font-light text-gray-400">Starting in the 1950s</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <ScrollCard 
                        name="Chengdu J-7"
                        description="The widely-eported Chengdu J-7 was nothing more than a Chinese license-production copy of the Soviet-era Mikoyan-Gurevich MiG-21 Fishbed."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Convair F-102 Delta Dagger"
                        description="The Convair F-102 Delta Dagger was an interim delta-wing interceptor design fielded by the USAF until the arrival of the more capable Convair F-106 Delta Dart series."
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
                        name="Dassault Mirage V"
                        description="The Dassault Mirage V fighter-bomber did not encounter the excellent global acceptance that the preceding Mirage III series managed."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Douglas F4D / F-6 Skyray"
                        description="The Douglas F4D Skyray was the quintessentail jet fighter of the 1950's, appearing in limited service though possessing an impressive rate-of-climb."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="English Electric / BAC Lightning"
                        description="The potent English Electric Lightning supersonic fighter remains the only Mach 2-capable jet-powered fighter to emerge from British industry during the Cold War period."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Grumman F11 Tiger"
                        description="Engine unreliability eventually limited the operational service life of the US Navy high-performance carrier-based F11F Tiger fighter."
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
                        name="McDonnell F-101 Voodoo"
                        description="The McDonnell F-101 Voodoo achieved several endurance and speed records during her time aloft, earning the nickname of One-Oh-Wonder in the process."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="McDonnell F3H Demon"
                        description="The F3H Demon was the first swept-wing, turbojet-powered fighter design offered by McDonnell Aircraft."
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
                        name="Northrop F-5 Freedom Fighter"
                        description="The Northrop F-5 Freedom Fighter grew into the F-5 Tiger II, which sprouted the ill-fated F-20 Tigershark."
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
                        name="Shenyang J-6"
                        description="The Shenyang J-6 was nothing more than a direct copy of the Soviet-era Mikoyan-Gurevich MiG-19 Farmer jet-powered fighter."
                        date="Date"
                        developer="developer"
                    />
                    <ScrollCard 
                        name="Vought F-8 Crusader"
                        description="The storied Vought F-8 Crusader carrier-based fighter served in an operational role for over 40 years in the United States, the Philippines and France."
                        date="Date"
                        developer="developer"
                    />
                </Slider>
            </div>
            <br/><hr className='border-sky-700 bg-sky-700 border-2'/>
        </div>
    )
}