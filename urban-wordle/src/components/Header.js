import React from "react";
import Icon from "../imgs/icons";

const Header = ({ callback }) => {
    return (
        <div className="bg-gray-800 py-4 h-[68px]">
            <img
                className="absolute w-[135px] cursor-pointer top-2 left-1/2 -translate-x-1/2"
                src={Icon.logo}
            />
            <div className="absolute right-10 top-5 flex flex-column space-x-8">
                <a onClick={callback}>
                    <img className="w-7 cursor-pointer" src={Icon.help} />
                </a>
            </div>
        </div>
    );
};

export default Header;
