import "./App.css";
import Textbox from "./components/Textbox";
import Buttons from "./components/Buttons";
import React from "react";

import { useState, createContext, useEffect } from "react";
import { createCorrectWord, createTextFile } from "./words";

export const AppContext = createContext(); // Used to call update list function

function App() {
    //Starting lists
    const [wordList, setWordList] = useState([]);
    const [defintionList, setDefinitionList] = useState([]);
    const [currentWord, setCurrentWord] = useState(448);

    //Ending list
    const [finalList, setFinalList] = useState([]);
    const [nameList, setNameList] = useState([]);

    //For download file
    const [linkHref, setlinkHref] = useState();

    useEffect(() => {
        //Use to initialize wordlist
        createCorrectWord().then((word) => {
            setWordList(word.wordArr);
            setDefinitionList(word.defArr);
        });
    }, []);

    const updateFinalList = (newWord) => {
        setFinalList(prevList => [...prevList, newWord]);
    };

    const updateNameList = (newWord) =>{
        setNameList(prevList => [...prevList, newWord]);
    }

    const printFinalList = () => {
      console.log(finalList);
    }

    const printNameList = () => {
        console.log(nameList);
    }

    const setHref = (href) =>{
        setlinkHref(href);
    }

    const onButtonPress = (button) => {
        console.log(button);
        switch (button) {
            case "Yes":
                updateFinalList(wordList[currentWord])
                break;
            case "No":
                break;
            case "Name":
                updateNameList(wordList[currentWord]);
                break;
            default:
                break;
        }
        setCurrentWord(currentWord+1);
    };

    return (
        <div className="App">
            <h1 className="text-4xl text-center mt-16">Filter Wordlist</h1>
            <button onClick={printFinalList} className="absolute top-6 right-4 style-button bg-purple-700">Console Log New Wordlist</button>
            <button onClick={printNameList} className="absolute top-32 right-4 style-button bg-orange-600">Console Log Name List</button>
            <Textbox word={wordList[currentWord]} definition={defintionList[currentWord]} i={currentWord} />
            <AppContext.Provider value={{ onButtonPress }}>
                <Buttons />
            </AppContext.Provider>
            <button onClick={() => setHref(createTextFile(finalList))} className="style-button bg-white text-black absolute left-4 bottom-16">Create File</button>
            {linkHref && <a download={wordList[currentWord-1] + ".txt"} href={linkHref} className="absolute left-4 bottom-6 underline">Download File</a>}
        </div>
    );
}

export default App;
