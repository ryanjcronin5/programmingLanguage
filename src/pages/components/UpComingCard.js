export default function UpComingCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100"  className="w-11/12  p-3 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-auto">
            {/* <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img> */}
            <a href="#">
                <div className="mt-2">
                    <h1 className="font-bold md:text-xl">{props.name}</h1>
                    <p className="font-light md:text-lg">{props.description}</p>
                    <p className="font-light md:text-md">{props.date}</p>
                    <p className="font-light md:text-md">{props.location}</p>
                </div>
            </a>
        </div>
    )
}