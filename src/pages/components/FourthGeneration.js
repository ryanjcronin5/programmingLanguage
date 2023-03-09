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

    const data = [
        {
            name: "Boeing (McDonnell Douglas) F-15 Eagle",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Boeing (McDonnell Douglas) F-15E Strike Eagle",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Boeing (McDonnell Douglas) F/A-18 Hornet",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Boeing F-15SE (Silent Eagle)",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Boeing F/A-18 Advanced Super Hornet",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Boeing F/A-18 Super Hornet",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Grumman F-14 Tomcat",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Lockheed Martin F-16 Fighting Falcon",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Lockheed Martin F-16V (Viper)",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        },
        {
            name: "Northrop F-20 Tigershark",
            description: "",
            wingSpan: "m (ft)",
            wingArea: "m (ft)",
            length: "m (ft)",
            height: "m (ft)",
            date: "",
            developer: ""
        }
    ];

    return (
        <div id="fourth" className="mt-4 text-white">
            <br /><br />
            <h1 className="text-2xl font-bold">Fourth Generation</h1>
            <p className="font-light text-gray-400">American</p>

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