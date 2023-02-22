import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollCard from "./ScrollCard.js"

export default function FirstGeneration() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div id='first' className='mt-4 text-white'>
            <h1 className='text-2xl font-bold'>First Generation</h1>
            <p className='font-light text-gray-400'>Starting in the 1940s</p>

            <div className='mt-4'>
                <Slider {...settings}>
                    <ScrollCard 
                        name="Me 262"
                        description="The German Messerchmitt Me 262 Schwalbe of World War II became the first operational jet-powered fighter in military history."
                        wingSpan="12.50m (41ft)"
                        wingArea="21.7m&sup2; (234ft&sup2;)"
                        length="10.6m (34.8ft)"
                        height="3.84m (12.5ft)"
                        date="18 July 1942 (jet)"
                        developer="Messerschmitt"
                    />
                    <ScrollCard 
                        name="Heinkel He 162"
                        description="The German Heinkel He 162 was of an advanced, single-seat, single jet engine design of World War II - it appeared in limited numbers towards the end of the conflict."
                        wingSpan="7.2m (23ft 7in)"
                        wingArea="11.2m&sup2; (121ft&sup2;)"
                        length="9.05m (29ft 8in)"
                        height="2.55m (8ft 4in)"
                        date="6 December 1944"
                        developer="Heinkel"
                    />
                    <ScrollCard 
                        name="Gloster Meteor"
                        description="The Gloster Meteor became the first operational British jet-powered fighter on July 27th, 1944 - this during World War II."
                        wingSpan="13.11m (43.0ft)"
                        wingArea="33m&sup2; (350ft&sup2;)"
                        length="12.57m (41.2ft)"
                        height="3.96m (13.0ft)"
                        date="5 March 1943"
                        developer="Gloser Aircraft Company"
                    />
                    <ScrollCard
                        name="de Havilland DH.100 Vampire"
                        description="The de Havilland Vampire series of fighter aircraft was the second jet-powered aircraft to be produced by Britain after World War II."
                        wingSpan="12.2m (40ft)"
                        wingArea="24.3m&sup2; (262ft&sup2;)"
                        length="9.37m (30ft 8in)"
                        height="2.69m (8ft 10in)"
                        date="20 September 1943"
                        developer="de Havilland"
                    />
                    <ScrollCard
                        name="Lockheed F-80"
                        description="Though developed as early as 1943, the Lockheed F-80 (P-80) jet fighter arrived too late to be used in World War II, playing a larger role in the Korean War instead."
                        wingSpan="11.81m (38.7ft)"
                        wingArea="22.07m&sup2; (237.6ft&sup2;)"
                        length="10.49m (34.4ft)"
                        height="3.43m (11.3ft)"
                        date="8 January 1944"
                        developer="Lockheed Corporation"
                    />
                    <ScrollCard
                        name="Mikoyan-Gurevich MiG-15"
                        description="The Mikoyan-Gurevich MiG-15 jet-powered fighter proved to be a potent adversary in the Korean War - particularly when flown by Soviet pilots."
                        wingSpan="10.8m (35.4ft)"
                        wingArea="20.6m&sup2; (222ft&sup2;)"
                        length="10.86m (35.6ft)"
                        height="3.7m (12.1ft)"
                        date="30 December 1947"
                        developer="Mikoyan-Gurevich"
                    />
                    <ScrollCard
                        name="North American F-86 Sabre"
                        description="A star performer for its time, the North American F-86 Sabre achieved 757 air victories to just 103 losses in the Korean War of 1950-1953."
                        wingSpan="11.3m (37.1ft)"
                        wingArea="29.12m&sup2; (313.4ft&sup2;)"
                        length="11.43m (37.5ft)"
                        height="4.57m (15ft)"
                        date="1 October 1947"
                        developer="North American Aviation Company"
                    />
                    <ScrollCard
                        name="Hawker Hunter"
                        description="The Hawker Hunter was the longest-serving British jet fighter and found many foreign operators abroad."
                        wingSpan="10.2m (33.5ft)"
                        wingArea="32.4m&sup2; (349ft&sup2;)"
                        length="14m (45.9ft)"
                        height="4.01m (13.2ft)"
                        date="20 July 1951"
                        developer="Hawker Siddeley"
                    />
                </Slider>
            </div>
            <br/><br/><hr className='border-sky-700 bg-sky-700 border-2'/>
        </div>

        
    )
}