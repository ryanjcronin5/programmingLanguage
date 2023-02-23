export default function ScrollCard(props) {
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="0" className="w-11/12 ml-6 p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-72">
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light text-justify px-6 md:text-lg">{props.description}</p>
                <ul>
                    <li className="font-light">Span: {props.wingSpan}&emsp;Area: {props.wingArea}</li>
                    <li className="font-light">Length: {props.length}&emsp;Height: {props.height}</li>
                </ul>
                <p className="font-light md:text-base">First Flight: {props.date}</p>
                <p className="font-light md:text-base">Developer: {props.developer}</p>
                <button type="button" className="font-light md:text-base bg-sky-700 px-5 py-1 mt-1 rounded-md hover:bg-sky-500">Read more</button>
            </div>
        </div>
    )
}