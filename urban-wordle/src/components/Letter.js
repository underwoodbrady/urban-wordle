import React, {useContext, useEffect} from "react";
import { AppContext } from "../App";

const Letter = ({letterPos = 0, attemptNum = 0})=>{
    const {board, correctWord, currPos, setDisabledLetters, setCloseLetters, closeLetters} = useContext(AppContext);
    const letter = board[attemptNum][letterPos];
    let finalState = ""; //Variable for green yellow or grey

    if( currPos.attempt > attemptNum ){

        const correct = correctWord[letterPos] === letter;

        //Array for storing remaining letters after correct guesses
        let remainingLetters = [];

        for(let i = 0; i<5; i++){
            if(board[attemptNum][i] != correctWord[i])
                remainingLetters.push(correctWord[i]);
        }

        //Check how many of letter are in remainingLetters
        let numOccurances = correctWord.split(letter).length - 1;
        //Check if current letter is within that range
        let numInGuess = board[attemptNum].join("").split(letter).length - 1;

        let almost = false,
            count = 0; 

        if(numInGuess<=numOccurances)
            almost = remainingLetters.includes(letter);
        else{
            for(let i = 0; i<letterPos; i++){
                if(board[attemptNum][i] == letter)
                    count++;
            }
            if(count<numOccurances)
                almost = remainingLetters.includes(letter);
        }

        finalState = (correct ? "rightGuess" : almost ? "closeGuess" : "wrongGuess");
    }

    useEffect(()=>{
        if(finalState == "wrongGuess")
            setDisabledLetters((prevDisabled) => [...prevDisabled, letter]);
        if(finalState == "closeGuess")
            setCloseLetters((prevClose) => [...prevClose, letter]);
    }, [currPos.attempt])

    return(
        <div className={"letter " + finalState + " delay" + letterPos}>{letter}</div>
    );
}

export default Letter;