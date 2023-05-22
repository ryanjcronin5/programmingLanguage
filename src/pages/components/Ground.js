import GroundCard from "./GroundCard";

export default function Ground() {
    const data = [
        {
            Title: "qBasic",
            Subtitle: "An IDE first appearing in 1991",
            Text: "QBasic is an integrated development environment and interpreter for a variety of dialects of BASIC which are based on QuickBASIC. Code entered into the IDE is compiled to an intermediate representation, and this IR is immediately executed on demand within the IDE."
        },
        {
            Title: "Assembly",
            Subtitle: "The assembler language is the symbolic programming",
            Text: "In computer programming, assembly language, often referred to simply as Assembly and commonly abbreviated as ASM or asm, is any low-level programming language with a very strong correspondence between the instructions in the language and the architecture's machine code instructions."
        },
        {
            Title: "Scheme",
            Subtitle: "A dialect of the Lisp programming language family.",
            Text: "Scheme is a classic programming language, emphasising functional programming and domain-specific languages. Known for its clean and minimalist design, Scheme is one of the longest lived and best studied dynamic languages."
        },
        {
            Title: "Pascal",
            Subtitle: "Pascal often comes under attack as a language which should be dead, or as a language not suitable for very much.",
            Text: "Pascal is a very clean programming language, which looks more like real languages in the sense that it uses real English words as keywords rather than random ASCII characters. This is important in understanding existing code as well as debugging because people do not read individual characters but whole words."
        }
    ];

    return (
        <div id='second' className="mt-4 text-white">
            <br /><br />
            <h1 className="text-2xl font-bold">Languages That Layed The Groundwork</h1>
            <p className="font-light text-gray-400">Yes they are old, but they were important.</p>

            <div className="grid grid-cols-1 md:grid-cols-1 justify-center mt-4 gap-5">
                {data.map((cardData, index) => (
                    <GroundCard
                        key={index}
                        Title={cardData.Title}
                        Subtitle={cardData.Subtitle}
                        Text={cardData.Text}
                    />
                ))}
            </div>
            <br /><br />
        </div>
    )
}