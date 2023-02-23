import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollCard from './ScrollCard';

export default function FourthGeneration() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const data = {
        name: "Convair F-102 Delta Dagger",
        description: "The Convair F-102 Delta Dagger was an interim delta-wing interceptor design fielded by the USAF until the arrival of the more capable Convair F-106 Delta Dart series.",
        wingSpan: "11.62m (38.1ft)",
        wingArea: "m (ft)",
        length: "20.84m (68.4ft)",
        height: "6.46m (21.2ft)",
        date: "Date",
        developer: "Convair"
    };

    return (
        <div id="fourth" className="mt-4 text-white">
            <br /><br />
            <h1 className="text-2xl font-bold">Fourth Generation</h1>
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