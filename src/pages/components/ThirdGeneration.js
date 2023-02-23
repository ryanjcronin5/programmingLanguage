import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollCard from './ScrollCard';

export default function ThirdGeneration() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const data = [
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
            name: "Convair F-106 Delta Dart",
            description: "The Convair F-106 Delta Dart jet-powered interceptor began life as the Convair F-102 Delta Dagger.",
            wingSpan: "11.67m (38.3ft)",
            wingArea: "m (ft)",
            length: "21.55m (70.7ft)",
            height: "6.18m (20.3ft)",
            date: "Date",
            developer: "Convair"
        },
        {
            name: "Dassualt Mirage F1",
            description: "The French Dassault Mirage F.1 became one of the most successful fighter designs of the Cold War period.",
            wingSpan: "8.40m (27.6ft)",
            wingArea: "m (ft)",
            length: "15.30m (50.2ft)",
            height: "4.50m (14.8ft)",
            date: "Date",
            developer: "Dassault Avaition"
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
            name: "Dassault Super Mystere",
            description: "The Super Mystere was the ultimate from of the line of swept-back jet fighters begun with the original Mystere aircraft of 1954.",
            wingSpan: "10.50m (34.4ft)",
            wingArea: "m (ft)",
            length: "11.15m (36.6ft)",
            height: "4.60m (15.1ft)",
            date: "Date",
            developer: "Dassault Avaition"
        },
        {
            name: "General Dynamics F-111 Aardvark",
            description: "The General Dynamics F-111 Aardvark swing-wing bomber was retired in 1996 from active service with the Unuted States Air Force followed shortly by its counterpart - the EF-111 Raven.",
            wingSpan: "19.20m (63.0ft)",
            wingArea: "m (ft)",
            length: "22.40m (73.5ft)",
            height: "5.22m (17.1ft)",
            date: "Date",
            developer: "General Dynamics"
        },
        {
            name: "Hawker Siddeley AV-8 Harrier",
            description: "The Hawker Siddeley Harrier was the first generation Harrier jump jet to see service and saw combat action in the Falklands War of 1982.",
            wingSpan: "7.70m (25.3ft)",
            wingArea: "m (ft)",
            length: "13.90m (45.6ft)",
            height: "3.45m (11.3ft)",
            date: "Date",
            developer: "Hawker Siddeley"
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
            name: "McDonnell Douglas F-4 Phantom II",
            description: "The classic McDonnell Douglas F-4 Phantom II is widely regarded as on of the most successful fighter designs of all time and saw considerable combat service in the Vietnam War.",
            wingSpan: "11.77m (38.6ft)",
            wingArea: "m (ft)",
            length: "19.20m (63.0ft)",
            height: "5.02m (16.5ft)",
            date: "Date",
            developer: "McDonnell Douglas"
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
            name: "Mikoyan-Gurevich MiG-17",
            description: "The Soviet Mikoyan-Gurevich MiG-17 jet fighter was a major improvement over the classic MiG-15 series.",
            wingSpan: "9.62m (31.6ft)",
            wingArea: "m (ft)",
            length: "11.26m (36.9ft)",
            height: "3.80m (12.5ft)",
            date: "Date",
            developer: "Mikoyan-Gurevich"
        },
        {
            name: "Mikoyan-Gurevich MiG-19",
            description: "The Mikoyan-Gurevich MiG-19 Farmer brought with it a critical supersonic fighter jet capability for the Soviet Union when introduced for service in 1955.",
            wingSpan: "9.00m (29.5ft)",
            wingArea: "m (ft)",
            length: "12.54m (41.1ft)",
            height: "3.88m (12.7ft)",
            date: "Date",
            developer: "Mikoyan-Gurevich"
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
            name: "Mikoyan-Gurevich MiG-23",
            description: "The Mikoyan-Gurevich MiG-23 Flogger was the first Soviet aircraft to feature variable sweep wings and paved the way for the equally-successful MiG-27 Flogger ground strike variant.",
            wingSpan: "14.25m (46.8ft)",
            wingArea: "m (ft)",
            length: "16.80m (55.1ft)",
            height: "4.35m (14.3ft)",
            date: "Date",
            developer: "Mikoyan-Gurevich"
        },
        {
            name: "North American F-100 Super Sabre",
            description: "Though not without issues early on, the North American F-100 Super Sabre jet evolved into one of the finest American fighter aircraft.",
            wingSpan: "11.81m (38.7ft)",
            wingArea: "m (ft)",
            length: "15.09m (49.7ft)",
            height: "4.95m (16.2ft)",
            date: "Date",
            developer: "North American Aviation"
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
            name: "Shenyang J-8 / J-8 II",
            description: "J-8 development overcame many setbacks - most of these being political in nature - and maintains an active presence in the Chinses attack fleet.",
            wingSpan: "9.34m (30.6ft)",
            wingArea: "m (ft)",
            length: "21.59m (70.8ft)",
            height: "5.41m (17.7ft)",
            date: "Date",
            developer: "Shenyang AVIC"
        },
        {
            name: "Sukhoi Su-17/20/22",
            description: "The Soviet Sukhoi Su-17 Fitter - and its export derivaties, the Su-20 and Su-22 - were swing-wing developments of the original Su-7 Fitter fixed-wing design.",
            wingSpan: "13.68m (44.9ft)",
            wingArea: "m (ft)",
            length: "19.02m (62.4ft)",
            height: "5.12m (16.8ft)",
            date: "Date",
            developer: "Sukhoi"
        }

    ];

    return (
        <div id="third" className="mt-4 text-white">
            <br /><br />
            <h1 className="text-2xl font-bold">Third Generation</h1>
            <p className="font-light text-gray-400">Starting in the 1960s</p>

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