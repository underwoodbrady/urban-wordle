import "./App.css";
import Header from "./components/Header";
import Definition from "./components/Definition";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import Footer from "./components/Footer";
import GameOver from "./components/GameOver";
import Help from "./components/Help";
import { useState, createContext, useEffect } from "react";
import { boardDefault, createWordSet, createCorrectWord } from "./words";

export const AppContext = createContext();

function App() {
    const [board, setBoard] = useState(boardDefault);
    const [currPos, setCurrPos] = useState({ attempt: 0, letterPos: 0 });
    const [wordSet, setWordSet] = useState(new Set());

    const [correctLetters, setCorrectLetters] = useState(["", "", "", "", ""]);
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [closeLetters, setCloseLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });

    const [correctWord, setCorrectWord] = useState("");
    const [correctDefinition, setCorrectDefinition] = useState("");
    const [helpOpen, setHelpOpen] = useState(false);

    useEffect(() => {
        createWordSet().then((words) => {
            setWordSet(words.wordSet);
        });
        createCorrectWord().then((word) =>{
            setCorrectWord(word.correctWord);
            setCorrectDefinition(word.correctDefinition);
        })
    }, []);

    const onLetter = (keyVal) => {
        if (currPos.letterPos > 4 || gameOver.gameOver) return;

        const newBoard = [...board];
        newBoard[currPos.attempt][currPos.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrPos({ ...currPos, letterPos: currPos.letterPos + 1 });
    };

    const onEnter = () => {
        if (currPos.letterPos !== 5) return;

        let word = board[currPos.attempt].join("");

        if (!wordSet.has(word.toLowerCase())) return;

        let correctArr = correctLetters;
        for (let i = 0; i < 5; i++) {
            if (correctWord[i] === board[currPos.attempt][i])
                correctArr[i] = correctWord[i];
        }

        setCorrectLetters(correctArr);
        setCurrPos({ attempt: currPos.attempt + 1, letterPos: 0 });

        if(word === correctWord){
            setTimeout(()=>{
                setGameOver({gameOver:true, guessedWord:true}); 
            },600);
            return;
         }
         
         if(currPos.attempt === 5){
            setTimeout(()=>{
                setGameOver({gameOver:true, guessedWord:false}); 
            },600);         
        }
    };

    const onDelete = () => {
        if (currPos.letterPos > 0) {
            const newBoard = [...board];
            newBoard[currPos.attempt][currPos.letterPos - 1] = "";
            setBoard(newBoard);
            setCurrPos({ ...currPos, letterPos: currPos.letterPos - 1 });
        }
    };

    const onToggleMenu = () => {
        setHelpOpen(!helpOpen);
    }

    return (
        <div className="App">
            <Header callback={onToggleMenu} />
            <AppContext.Provider
                value={{
                    board,
                    setBoard,
                    currPos,
                    setCurrPos,
                    onLetter,
                    onEnter,
                    onDelete,
                    correctWord,
                    correctDefinition,
                    correctLetters,
                    disabledLetters,
                    setDisabledLetters,
                    closeLetters,
                    setCloseLetters,
                    gameOver,
                    setGameOver,
                }}>
                <Definition />
                <GameBoard />
                <Keyboard />
                {gameOver.gameOver && <GameOver/>}
            </AppContext.Provider>
            {helpOpen && <Help callback={onToggleMenu}/>}
            <Footer />
        </div>
    );
}

export default App;
