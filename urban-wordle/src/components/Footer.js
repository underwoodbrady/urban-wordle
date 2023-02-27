import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-800 fixed bottom-0 left-0 w-full text-white text-sm p-1 font-light ">
            <p className="float-left">
                Not affiliated with{" "}
                <a className="underline font-semibold text-yellow-500" href="https://www.urbandictionary.com/" target="_blank">
                    Urban Dictionary
                </a>{" "}
                or{" "}
                <a className="underline font-semibold text-green-500" href="https://www.nytimes.com/games/wordle/index.html" target="_blank">
                    Wordle
                </a>
            </p>
            <p className=" float-right">
                Made by{" "}
                <a className="underline font-semibold" href="https://brady.games" target="_blank">
                    Brady Underwood
                </a>
            </p>
        </div>
    );
};

export default Footer;
