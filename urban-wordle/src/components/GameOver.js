import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
    const { gameOver, correctWord, currPos } = useContext(AppContext);

    return (
        <div className="fixed z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-7 rounded-md drop-shadow-lg">
            <h5 className="text-xl font-semibold">
                {gameOver.guessedWord ? "Congrats!" : "Good try!"}
            </h5>
            <p className="pt-3">You took {currPos.attempt} guesses</p>
            <p>
                Correct word was{" "}
                <span className="font-semibold">{correctWord}</span>
            </p>
            <div className="pt-3">
                <a className="text-yellow-500 underline" href="">View Definition</a>
                <a
                    className="bg-green-500 ml-9 font-bold rounded-sm py-1 px-2 text-sm"
                    href="">
                    Play Again
                </a>
            </div>
        </div>
    );
};

export default GameOver;
