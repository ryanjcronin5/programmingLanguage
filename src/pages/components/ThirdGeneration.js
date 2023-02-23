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
            <br /><br />
            <h1 className="text-2xl font-bold">Third Generation</h1>
            <p className="font-light text-gray-400">Starting in the 1960s</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <ScrollCard
                        name="Convair F-102 Delta Dagger"
                        description="The Convair F-102 Delta Dagger was an interim delta-wing interceptor design fielded by the USAF until the arrival of the more capable Convair F-106 Delta Dart series."
                        wingSpan="11.62m (38.1ft)"
                        wingArea="m&sup2; (ft&sup2;)"
                        length="20.84m (68.4ft)"
                        height="6.46m (21.2ft)"
                        date="Date"
                        developer="Convair"
                    />
                    <ScrollCard
                        name="Convair F-106 Delta Dart"
                        description="Description"
                        wingSpan="11.67m (38.3ft)"
                        wingArea="m&sup2; (ft&sup2;)"
                        length="21.55m (70.7ft)"
                        height="6.18m (20.3ft)"
                        date="Date"
                        developer="Convair"
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
                        wingSpan="8.22m (27.0ft)"
                        wingArea="m&sup2; (ft&sup2;)"
                        length="14.75m (48.4ft)"
                        height="4.50m (14.8ft)"
                        date="Date"
                        developer="Dassault Avaition"
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
                        wingSpan="6.36m (20.9ft)"
                        wingArea="m&sup2; (ft&sup2;)"
                        length="16.66m (54.7ft)"
                        height="4.09m (13.4ft)"
                        date="Date"
                        developer="Lockheed Aircraft Corporation"
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
                        wingSpan="12.10m (39.7ft)"
                        wingArea="m&sup2; (ft&sup2;)"
                        length="20.55m (64.7ft)"
                        height="5.50m (18.0ft)"
                        date="Date"
                        developer="McDonnell Aircraft Corporation"
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
                        wingSpan="7.15m (23.5ft)"
                        wingArea="m&sup2; (ft&sup2;)"
                        length="15.76m (51.7ft)"
                        height="4.10m (13.5ft)"
                        date="Date"
                        developer="Mikoyan-Gurevich"
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
                        wingSpan="10.65m (34.9ft)"
                        wingArea="m&sup2; (ft&sup2;)"
                        length="19.58m (64.2ft)"
                        height="5.97m (19.6ft)"
                        date="Date"
                        developer="Republic Avaition Corporation"
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
            <br /><hr className='border-sky-700 bg-sky-700 border-2' />
        </div>
    )
}