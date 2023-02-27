import React, { useContext } from "react";
import { AppContext } from "../App";

const Buttons = () => {
    const { onButtonPress } = useContext(AppContext);

    return (
        <div className="absolute left-1/2 bottom-16 -translate-x-1/2 flex flex-row space-x-4">
            <Button name="No" handleClick = {() => onButtonPress("No")}/>
            <Button name="Name" handleClick = {() => onButtonPress("Name")}/>
            <Button name="Yes" handleClick = {() => onButtonPress("Yes")}/>
        </div>
    );
};

const Button = ({ name, handleClick }) => (
    <>
        <button
            className={
                name == "Yes"
                    ? "bg-green-600 style-button font-bold"
                    : name == "No"
                    ? "bg-red-600 style-button font-bold"
                    : "bg-slate-600 style-button"
            }
            onClick={handleClick}
            >
            {name}
        </button>
    </>
);

export default Buttons;
