const Help = ({ callback }) => (
    <div className="fixed left-0 top-0 w-full h-full bg-black/30 z-50">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-6 rounded-md text-white w-[420px] drop-shadow-xl">
            <h4 className="font-extrabold text-xl bg-yellow-500 pl-2 mb-2 pb-1 text-gray-800">
                How to play
            </h4>
            <a
                onClick={callback}
                className="text-gray-800 absolute top-6 right-10 font-extrabold text-xl cursor-pointer">
                &#10006;
            </a>
            <HelpText bullet={true}>
                Wordle clone made using{" "}
                <span className="font-bold">5-letter</span> urban dictionary
                words with <span className="font-bold">500+ likes</span>
            </HelpText>
            <HelpText bullet={true}>
                You are given a definition and you have to guess the word in{" "}
                <span className="font-bold">6 tries.</span>
            </HelpText>
            <HelpText bullet={true}>
                After each guess the tiles change color to reveal how close your
                guess is.
            </HelpText>
            <HelpText>
                <span className="text-green-500 font-bold">Green</span> means
                you guessed a letter in the right spot.
                <span className="text-yellow-500 font-bold"> Yellow</span> means
                you guessed a letter in a wrong spot.
                <span className="text-slate-500 font-bold"> Grey</span> means
                the letter is not in the word.
            </HelpText>
        </div>
    </div>
);

const HelpText = ({ children, bullet }) => (
    <p className="py-2">
        {bullet && (
            <span className="pr-2 text-yellow-500 text-4xl leading-6 align-text-bottom">
                &#9702;
            </span>
        )}
        {children}
    </p>
);

export default Help;
