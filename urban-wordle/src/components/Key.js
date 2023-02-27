import React, { useContext } from "react";
import { AppContext } from "../App";
import Icon from "../imgs/icons";

const Key = ({ keyVal = "#" }) => {
    const { onLetter, onEnter, onDelete, correctLetters, disabledLetters, closeLetters } = useContext(AppContext);

    const selectKey = () => {
        if (keyVal === "ENTER") {
            onEnter();
            return;
        }

        if (keyVal === "DELETE") {
            onDelete();
            return;
        }

        onLetter(keyVal);
    };

    let finalState = correctLetters.includes(keyVal) ? "rightGuess" : closeLetters.includes(keyVal) ? "closeGuess": disabledLetters.includes(keyVal) ? "wrongGuess" : "";

    return (
        <div
            className={keyVal.length > 1 ? "w-20 key" : "key " + finalState}
            onClick={selectKey}>
            {keyVal === "DELETE" ? (
                <img src={Icon.backspace} className={"w-8 m-auto mt-3"} />
            ) : (
                keyVal
            )}
        </div>
    );
};

export default Key;
