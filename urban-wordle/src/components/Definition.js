import React, {useContext} from "react";
import { AppContext } from "../App";

const Definition = () => {

    const {correctLetters, correctDefinition} = useContext(AppContext);
    
    return (
        <div className="absolute left-1/2 top-[88px] translate-x-[-560px] w-80 p-7 bg-gray-800 text-white rounded-md max-h-[300px] overflow-auto">
            <div className="flex flex-row">
                <h2 className="text-2xl pr-4 font-semibold">Word:</h2>
                <DefinitionLetter letter={correctLetters[0]} />
                <DefinitionLetter letter={correctLetters[1]} />
                <DefinitionLetter letter={correctLetters[2]} />
                <DefinitionLetter letter={correctLetters[3]} />
                <DefinitionLetter letter={correctLetters[4]} />
            </div>
            <h3 className="pt-3 text-lg font-semibold text-yellow-500 border-b-2 border-yellow-500">Definition:</h3>
            <p className="pt-3 font-li indent-3">{correctDefinition}</p>
        </div>
    );
};

const DefinitionLetter = ({ letter = "" }) => {
    return <div className={letter === "" ? "border-b-2 border-neutral-300 w-5 mx-1 text-sm h-7 font-bold bg-gray-600 rounded-sm" : "border-b-2 border-neutral-300 w-5 mx-1 text-sm h-7 font-bold bg-green-500 text-center rounded-sm"}>{letter}</div>;
};

export default Definition;
