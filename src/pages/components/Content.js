import ContentCard from "./ContentCard"

export default function Content() {
    const data = [
        {
            title: "Explaining Consequences of Programming Language Development",
            subtitle: "The development of a programming language can have significant consequences on software development over time. These consequences can range from influencing the way developers write code to impacting the overall efficiency and productivity of software development processes.",
            textIntro: "Here are some key consequences to consider:",
            LI1: "Increased productivity",
            LI2: "Improved code quality",
            LI3: "Easier maintenance and scalability",
            LI4: "Expanded developer community",
            LI5: "Compatibility and longevity",
            LI6: "Performance considerations"
        },
        {
            title: "Discussing Consequences of Programming Language Development",
            subtitle: "The consequences of programming language development in software development have certainly influenced the responsibilities of technologists over time.",
            textIntro: "Here's a discussion on how these consequences have shaped the role and responsibilities of technologists:",
            LI1: "Language proficiency",
            LI2: "Language selection and architecture design",
            LI3: "Code quality and best practices",
            LI4: "Performance optimization",
            LI5: "Community engagement and collaboration",
            LI6: "Evaluating and adopting new technologies"
        },
        {
            title: "Discussing the responsibilities of technologists in programming language development in the field of software development",
            subtitle: "The responsibilities of technologists in programming language development within the software development field evolve over time as new languages are created or existing ones are enhanced.",
            textIntro: "Here's a discussion on the responsibilities of technologists in this context:",
            LI1: "Designing language features",
            LI2: "Implementing language specifications",
            LI3: "Improving performance and efficiency",
            LI4: "Documentation and educational resources",
            LI5: "Engaging with the developer community",
            LI6: "Contributing to language standardisation"
        },
        {
            title: "Explaining how technological intervention challenges people's perceptions of what it means to be human",
            subtitle: "",
            textIntro: "Technological intervention, including advancements in programming language development, can challenge people's perceptions of what it means to be human in several ways:",
            LI1: "Automation and efficiency",
            LI2: "Artificial Intelligence (AI) and machine learning",
            LI3: "Human-machine interaction",
            LI4: "Ethical considerations",
            LI5: "Creativity and expression",
            LI6: "Evolving societal roles"
        },
        {
            title: "Discussing the probable future of programming language developments in the field of software development, justifying these with past and/or contemporary evidence",
            subtitle: "The future of programming language development in the field of software development is likely to be shaped by several factors, including technological advancements, evolving developer needs, and emerging trends.",
            textIntro: "Here's a discussion on the probable future of programming language development, along with justifications based on past and contemporary evidence:",
            LI1: "Increased focus on simplicity and productivity",
            LI2: "Concurrency and parallelism",
            LI3: "Integration with emerging technologies",
            LI4: "Improved safety and security",
            LI5: "Community-driven development",
            LI6: "Language-level support for concurrency and distributed computing"
        },
        //{
        //    title: "",
        //    subtitle: "",
        //    textIntro: "",
        //    LI1: "",
        //    LI2: "",
        //    LI3: "",
        //    LI4: "",
        //    LI5: "",
        //    LI6: "",
        //    closing: ""
        //}
    ]

    return (
        <div id="mainContent" className="mt-4 text-white">
            <h1 className='text-2xl font-bold'>Thing to think about</h1>
            <p className='font-light text-gray-400'></p>

            <div className="grid grid-cols-1 md:grid-cols-1 justify-center mt-4 gap-5">
                {data.map((cardData, index) => (
                    <ContentCard
                        key={index}
                        Title={cardData.title}
                        Subtitle={cardData.subtitle}
                        TextIntro={cardData.textIntro}
                        li1={cardData.LI1}
                        li2={cardData.LI2}
                        li3={cardData.LI3}
                        li4={cardData.LI4}
                        li5={cardData.LI5}
                        li6={cardData.LI6}
                        Closing={cardData.closing}
                    />
                ))}
            </div>
            <br /><br />
            <div className="text-justify px-12">
                <h1 className="text-xl font-bold pb-1">Final Statments:</h1>
                <p className="underline underline-offset-2 pb-2">
                    These closing statements where generated by OpenAI's ChatGBT, in order to gauge how the tool views the topics discussed.
                </p>
                <p className="pb-2">
                    Overall, the consequences of programming language development in software development are wide-ranging and can have a profound impact on how software is built, maintained, and scaled over time. The choice of a programming language should consider the requirements of the project, the available ecosystem, the development team's expertise, and the long-term goals of the software.
                </p>
                <p className="pb-2">
                    The consequences of programming language development have influenced the responsibilities of technologists in various ways. They must continually update their skills, make informed language and architecture choices, prioritize code quality and performance, engage with the community, evaluate new technologies, and adapt to domain-specific language requirements. By embracing these responsibilities, technologists can effectively leverage the advantages offered by programming language development and deliver high-quality software solutions.
                </p>
                <p className="pb-2">
                    Programming language development, along with other technological advancements, can challenge people's perceptions of what it means to be human. It raises questions about human labour and productivity, intelligence and cognition, creativity, ethics, human-machine interactions, and societal roles. As technology continues to evolve, it is essential to engage in critical discussions and reflections on these topics to shape a future that aligns with our values and aspirations.
                </p>
                <p className="pb-2">
                    Justifications for these future trends can be found in past and contemporary evidence, such as the adoption and growth of languages like Python, JavaScript, and Rust, which have demonstrated the success of simplicity, concurrency, and safety-focused language design. Additionally, the integration of programming languages with emerging technologies like machine learning and the rise of domain-specific languages provide evidence of the industry's current trajectory.
                    <br />
                    As software development continues to advance and evolve, programming language development will play a vital role in enabling developers to build robust, scalable, and secure applications. The future of programming languages in the field of software development holds exciting possibilities, from simplified and productive language design to enhanced support for concurrency, security, and emerging technologies.
                    <br />
                    By studying past and contemporary trends, engaging with developer communities, and embracing technological advancements, programming language developers can shape the future of software development. It is through their dedication and innovation that we can expect to see programming languages that empower developers to tackle complex challenges, accelerate development cycles, and push the boundaries of what can be achieved in the digital age.
                </p>
            </div>
        </div >
    )
}