import React from "react";

interface navbarProps {
    toggleTheme: () => void;
    getWhiteTheme: boolean;
}

export const Navbar: React.FC<navbarProps> = ({toggleTheme, getWhiteTheme}) => {
    const text = getWhiteTheme? "Light": "Dark";
    console.log(text);
    return (<nav className="navBarContainer">
        <button className="theme-toggle navItem" onClick={toggleTheme}>
            <p className="pageTheme">{text} Theme</p>
        </button>
        <ul className="navBar">
            <li className="navItem"><a className="hyperlink navLink" href="#about">About</a></li>
            <li className="navItem"><a className="hyperlink navLink" href="#projects">Projects</a></li>
            <li className="navItem"><a className="hyperlink navLink" href="#contactHeadline">Contact</a></li>
        </ul>
    </nav>)
}