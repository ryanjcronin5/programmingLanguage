import * as React from 'react';

export default function TextCard(props) {
    return (
        <div data-aos="fade-right" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            <div id={props.link} className="mt-2">
                <h1 className="font-bold md:text-xl">{props.Title}</h1>
                <p className="font-light md:text-lg">{props.Subtitle}</p>
                <p className="font-light md:text-lg">Summary:</p>
                <p className="font-light md:text-md">Improvements</p>
                <p className="font-light md:text-sm">{props.Text}</p>
            </div>
        </div>
    )
}