import TextCard from "./EventCard";


export default function Event(){
    return (
        <div id="events" className="mt-4 text-white">
            <br/><br/>
            <h1 className="text-2xl font-bold">Area for text</h1>
            <p className="font-light text-gray-400">Subtitles</p>

            <div className="grid grid-cols-1 md:grid-cols-1 justify-center mt-4 gap-5">
                <TextCard
                    Title = "Title of Text box"
                    Subtitle = "Subtitle"
                    Text = "This would be used for updates of the website. Having text for the update will users now what is happening with development"
                    Date = ""
                />

            </div>
            <br/>
        </div>
    )
}