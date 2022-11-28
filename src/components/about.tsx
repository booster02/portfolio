import React from "react";

export const About: React.FC = () => {
    return (<>
        <a id="about" className="anchor"/>
            <div className="aboutText">
                <img src="/assets/Me.jpeg" alt="Me" id="portrait" className="picture"/>
                <h2 className="subHeadline" id="aboutHeadline">Béla Oster</h2>
                <p className="aboutMeSubLine">Software Developer <span className="employedBy">currently @thepeaklab</span></p>
                <p className="aboutMeText">Author of Weather App and DND-Terminal Game,<br />
                    Currently working on a Portfoliopage <br />
                    yadayada blah yadayada </p>
                <div className="socials">
                    <div className="gitHub"><img className="gitHubLogo" src="/assets/github-logo.png" alt="github logo"/><p>@booster02</p></div>
                    <div className="email"><img className="emailLogo" src="/assets/emailLogo.svg" alt="email logo"/></div>
                </div>
        </div>
    </>)
}