import React from "react";

interface projectShowInterface {
    pictureName: string;
    descriptionText: string;
    link: string;
}

export const ProjectShow: React.FC<projectShowInterface> = ({pictureName, descriptionText, link}) => {
    const imageLink = `${import.meta.env.BASE_URL}assets/${pictureName}`
    return (<>
        <a href={link} className="projectLink" target="_blank" rel="noreferrer noopener">
            <div className="projectCard">
                <img className="projectPicture" src={imageLink} alt="Project Preview"/>
                <div className="projectInfo">
                    <h2 className="projectHeadline">Wetterprojekt</h2>
                    <p>
                        {descriptionText}
                        &nbsp;Noch mehr description text, wow
                    </p>
                </div>
            </div>
        </a>
    </>)
}