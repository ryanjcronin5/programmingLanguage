export default function ScrollCard(props) {
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="0" className="w-11/12 ml-6 p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-auto">
            <div className="mt-2">
                <p className="font-light md:text-xl">{props.name}</p>
                <h1 className="font-bold md:text-lg">{props.version}</h1>
                <p className="font-light text-justify px-6 md:text-lg">{props.description}</p>
                <a href={props.link} target="_blank"><button type="button" className="font-light md:text-base bg-sky-700 px-5 py-1 mt-1 rounded-md hover:bg-sky-500">Read more</button></a>
            </div>
        </div>
    )
}