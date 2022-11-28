import React from "react";

interface navbarProps {
    toggleTheme: () => void;
    getWhiteTheme: boolean;
    mobile: boolean;
}

export const Navbar: React.FC<navbarProps> = ({toggleTheme, getWhiteTheme, mobile}) => {
    const text = getWhiteTheme ? "Light" : "Dark";
    const imgPath = text === "Dark" ? "/assets/DarkmodeSwitch.svg" : "/assets/LightmodeSwitch.svg";
    const button =
        <button className="theme-toggle navItem" onClick={toggleTheme}>
            <div id="outerSwitch">
                <div id="innerSwitch"></div>
            </div>
            <p className="pageTheme">{text}</p>
        </button>
    return (<nav className="navBarContainer">
        {mobile? <ul className="navBar">
            <li className="navItem"><a className="hyperlink navLink" href="#about">About</a></li>
            <li className="navItem"><a className="hyperlink navLink" href="#projects">Projects</a></li>
            <li className="navItem"><a className="hyperlink navLink" href="#contact">Contact</a></li>
        </ul>: null}
        {button}
    </nav>)
}