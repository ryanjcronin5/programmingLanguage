import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollCard from "./ScrollCard.js"
import { version } from 'react';

export default function PatchList() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    const data = [
        {
            name: "Python",
            version: "3.11.2",
            description: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.",
            link: "https://www.python.org"
        },
        {
            name: "HyperText Markup Language",
            version: "5.3",
            description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
            link: "https://whatwg.org"
        }
    ];

    return (
        <div id='first' className='mt-4 text-white'>
            <h1 className='text-2xl font-bold'>Current Languages Used In Computer Science</h1>
            <p className='font-light text-gray-400'></p>

            <div className='mt-4'>
                <Slider {...settings}>
                    {data.map((cardData, index) => (
                        <ScrollCard
                            key={index}
                            name={cardData.name}
                            version={cardData.version}
                            description={cardData.description}
                            link={cardData.link}
                        />
                    ))}
                </Slider>
            </div>
            <br /><br /><hr className='border-sky-700 bg-sky-700 border-2' />
        </div>

    )
}