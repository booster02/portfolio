import React from "react";

export const About: React.FC = () => {
    return (<>
        <a id="about" className="anchor"/>
        <div className="aboutContainer">
            <div className="aboutText">
                <h2 className="subHeadline" id="aboutHeadline">About Me</h2>
                <p className="aboutMeText">
                    irony direct trade. DIY letterpress stumptown, kitsch mukbang kogi keffiyeh eiusmod hexagon
                    tonx
                    semiotics. Eiusmod health goth gochujang, ut forage paleo bitters man bun. Freegan retro
                    lo-fi art party Brooklyn fam.
                </p>
            </div>
            <img src="/assets/Me.jpeg" alt="Me" id="portrait" className="picture"/>
        </div>
    </>)
}