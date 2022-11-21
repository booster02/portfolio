import React from "react";

interface projectShowInterface {
    pictureName: string;
    descriptionText: string;
    link: string;
}

export const ProjectShow: React.FC<projectShowInterface> = ({pictureName, descriptionText, link}) => {
    const imageLink = `/assets/${pictureName}`
    return (<>
        <a id="projects" className="anchor"/>
        <a href={link} className="projectLink" target="_blank" rel="noreferrer noopener">
            <div className="projectCard">
                <img className="projectPicture" src={imageLink} alt="Project Preview"/>
                <div className="projectInfo">
                    <h2 className="projectHeadline">Wetterprojekt</h2>
                    <p>
                        {descriptionText}
                    </p>
                </div>
            </div>
        </a>
    </>)
}