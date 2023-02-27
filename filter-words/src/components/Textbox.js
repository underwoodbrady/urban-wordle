const Textbox = ({word = "Word", definition = "Definition", i}) => {
    return(
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-600 p-6 w-96 rounded-md h-64 overflow-y-auto">
            <h1 className="font-bold text-2xl">{word}</h1>
            <p>{definition}</p>
            <span className="absolute top-4 right-4">{i}</span>
        </div>
    );
}

export default Textbox;