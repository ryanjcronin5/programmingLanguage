import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollCard from './ScrollCard';

export default function SecondGeneration() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const data = [
        {
            name: "Chengdu J-7",
            description: "The widely-eported Chengdu J-7 was nothing more than a Chinese license-production copy of the Soviet-era Mikoyan-Gurevich MiG-21 Fishbed.",
            wingSpan: "8.32m (27.3ft)",
            wingArea: "m (ft)",
            length: "14.88m (48.8ft)",
            height: "4.11m (13.5ft)",
            date: "Date",
            developer: "Chengdu / AVIC"
        },
        {
            name: "Convair F-102 Delta Dagger",
            description: "The Convair F-102 Delta Dagger was an interim delta-wing interceptor design fielded by the USAF until the arrival of the more capable Convair F-106 Delta Dart series.",
            wingSpan: "11.62m (38.1ft)",
            wingArea: "m (ft)",
            length: "20.84m (68.4ft)",
            height: "6.46m (21.2ft)",
            date: "Date",
            developer: "Convair"
        },
        {
            name: "Dassault Mirage III",
            description: "The Dassault Mirage III interceptor-strike fighter series proved a commercial success for the French company with combat advertising courtesy of Israel during the 1967 Six Day War.",
            wingSpan: "8.22m (27.0ft)",
            wingArea: "m (ft)",
            length: "14.75m (48.4ft)",
            height: "4.50m (14.8ft)",
            date: "Date",
            developer: "Dassault Avaition"
        },
        {
            name: "Dassault Mirage V",
            description: "The Dassault Mirage V fighter-bomber did not encounter the excellent global acceptance that the preceding Mirage III series managed.",
            wingSpan: "8.22m (27.0ft)",
            wingArea: "m (ft)",
            length: "15.55m (51.0ft)",
            height: "4.50m (14.8ft)",
            date: "Date",
            developer: "Dassault Avaition"
        },
        {
            name: "Douglas F4D / F-6 Skyray",
            description: "The Douglas F4D Skyray was the quintessentail jet fighter of the 1950's, appearing in limited service though possessing an impressive rate-of-climb.",
            wingSpan: "10.21m (33.5ft)",
            wingArea: "m (ft)",
            length: "13.93m (45.7ft)",
            height: "3.96m (13.0ft)",
            date: "Date",
            developer: "Douglas Aircraft Company"
        },
        {
            name: "English Electric / BAC Lightning",
            description: "The potent English Electric Lightning supersonic fighter remains the only Mach 2-capable jet-powered fighter to emerge from British industry during the Cold War period.",
            wingSpan: "10.62m (34.8ft)",
            wingArea: "m (ft)",
            length: "16.84m (55.2ft)",
            height: "5.97m (19.6ft)",
            date: "Date",
            developer: "English Electric Company / British Aircraft Company"
        },
        {
            name: "Grumman F11 Tiger",
            description: "Engine unreliability eventually limited the operational service life of the US Navy high-performance carrier-based F11F Tiger fighter.",
            wingSpan: "9.64m (31.6ft)",
            wingArea: "m (ft)",
            length: "14.31m (46.9ft)",
            height: "4.03m (13.2ft)",
            date: "Date",
            developer: "Grumman Aircraft"
        },
        {
            name: "Lockheed F-104 Starfighter",
            description: "The Lockheed F-104 Starfighter served a greater role with air forces abroad than it did with the USAF, though its operational service was not without issues.",
            wingSpan: "6.36m (20.9ft)",
            wingArea: "m (ft)",
            length: "16.66m (54.7ft)",
            height: "4.09m (13.4ft)",
            date: "Date",
            developer: "Lockheed Aircraft Corporation"
        },
        {
            name: "McDonnell F-101 Voodoo",
            description: "The McDonnell F-101 Voodoo achieved several endurance and speed records during her time aloft, earning the nickname of One-Oh-Wonder in the process.",
            wingSpan: "12.10m (39.7ft)",
            wingArea: "m (ft)",
            length: "20.55m (64.7ft)",
            height: "5.50m (18.0ft)",
            date: "Date",
            developer: "McDonnell Aircraft Corporation"
        },
        {
            name: "McDonnell F3H Demon",
            description: "The F3H Demon was the first swept-wing, turbojet-powered fighter design offered by McDonnell Aircraft.",
            wingSpan: "10.75m (35.3ft)",
            wingArea: "m (ft)",
            length: "17.98m (59.0ft)",
            height: "4.45m (14.6ft)",
            date: "Date",
            developer: "McDonnell Aircraft Corporation"
        },
        {
            name: "Mikoyan-Gurevich MiG-21",
            description: "The successful Mikoyan-Gurevich MiG-21 Fishbed was a giant leap from earlier MiG turbojet-powered, swept-wing fighters for the Soviets",
            wingSpan: "7.15m (23.5ft)",
            wingArea: "m (ft)",
            length: "15.76m (51.7ft)",
            height: "4.10m (13.5ft)",
            date: "Date",
            developer: "Mikoyan-Gurevich"
        },
        {
            name: "Northrop F-5 Freedom Fighter",
            description: "The Northrop F-5 Freedom Fighter grew into the F-5 Tiger II, which sprouted the ill-fated F-20 Tigershark.",
            wingSpan: "8.13m (26.7ft)",
            wingArea: "m (ft)",
            length: "14.45m (47.4ft)",
            height: "4.06m (13.3ft)",
            date: "Date",
            developer: "Northrop Aircraft Corporation"
        },
        {
            name: "Republic F-105 Thunderchief",
            description: "The large Republic F-105 Thundercheif was the most technologically advanced aircraft of its type when introduced in the late-1950s.",
            wingSpan: "10.65m (34.9ft)",
            wingArea: "m (ft)",
            length: "19.58m (64.2ft)",
            height: "5.97m (19.6ft)",
            date: "Date",
            developer: "Republic Avaition Corporation"
        },
        {
            name: "Shenyang J-6",
            description: "The Shenyang J-6 was nothing more than a direct copy of the Soviet-era Mikoyan-Gurevich MiG-19 Farmer jet-powered fighter.",
            wingSpan: "9.20m (30.2ft)",
            wingArea: "m (ft)",
            length: "12.50m (41.0ft)",
            height: "3.90m (12.8ft)",
            date: "Date",
            developer: "Shenyang / AVIC"
        },
        {
            name: "Vought F-8 Crusader",
            description: "The storied Vought F-8 Crusader carrier-based fighter served in an operational role for over 40 years in the United States, the Philippines and France.",
            wingSpan: "10.72m (35.2ft)",
            wingArea: "m (ft)",
            length: "16.61m (54.5ft)",
            height: "4.80m (15.7ft)",
            date: "Date",
            developer: "Vought"
        }
    ];

    return (
        <div id="second" className="mt-4 text-white">
            <br /><br />
            <h1 className="text-2xl font-bold">Second Generation</h1>
            <p className="font-light text-gray-400">Starting in the 1950s</p>

            <div className="mt-4">
                <Slider {...settings}>
                    {data.map((cardData, index) => (
                        <ScrollCard
                            key={index}
                            name={cardData.name}
                            description={cardData.description}
                            wingSpan={cardData.wingSpan}
                            wingArea={cardData.wingArea}
                            length={cardData.length}
                            height={cardData.height}
                            date={cardData.date}
                            developer={cardData.developer}
                        />
                    ))}
                </Slider>
            </div>
            <br /><hr className='border-sky-700 bg-sky-700 border-2' />
        </div>
    )
}