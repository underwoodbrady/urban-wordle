import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../App";

import Key from "./Key";

const Keyboard = () => {
    const { onLetter, onEnter, onDelete  } = useContext(AppContext);

    const keysOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keysTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keysThree = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyBoard = useCallback((event)=>{
        if(event.key === "Enter"){
            onEnter();
            return;
        }
        if(event.key === "Backspace"){
            onDelete();
            return;
        }
        if(event.keyCode >= 65 && event.keyCode <= 122){
            onLetter(event.key.toUpperCase())
        }

    });

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyBoard);

        return ()=>{
            document.removeEventListener("keydown", handleKeyBoard);
        }
    },[handleKeyBoard])

    return (
        <div className="mb-10" onKeyDown={handleKeyBoard}>
            <div className="flex flex-row justify-center">
                {keysOne.map((key) => {
                    return <Key keyVal={key} />;
                })}
            </div>
            <div className="flex flex-row justify-center">
                {keysTwo.map((key) => {
                    return <Key keyVal={key} />;
                })}
            </div>
            <div className="flex flex-row justify-center">
                <Key keyVal = {"DELETE"}/>
                {keysThree.map((key) => {
                    return <Key keyVal={key} />;
                })}
                <Key keyVal = {"ENTER"}/>
            </div>
        </div>
    );
};

export default Keyboard;
