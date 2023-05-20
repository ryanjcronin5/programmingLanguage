export default function ContentCard(props) {
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="0" className="w-full ml-6 p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-auto">
            <div className="mt-2">
                <h2 className="font-bold text-center px-6 md:text-xl capitalize">{props.Title}</h2>
                <h4 className="font-light text-center px-6 md:text-lg">{props.Subtitle}</h4>
                <p className="font-light text-center px-6 pt-2 md:text-lg">{props.TextIntro}
                    <ul className="list-disc list-inside">
                        <li>{props.li1}</li>
                        <li>{props.li2}</li>
                        <li>{props.li3}</li>
                        <li>{props.li4}</li>
                        <li>{props.li5}</li>
                        <li>{props.li6}</li>
                    </ul>
                </p>
                <p className="font-light py-2 px-24 text-justify md:text-lg">{props.Closing}</p>
            </div>
        </div>
    )
}