import React from "react";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
    return (<>
            <a id="contact" className="anchor"/>
            <div className="contactContainer">
                <a className="hyperlink " href="mailto:contact@contact.de"><span className="contactText">Contact@contact.de</span></a>
            </div>
        </>)
}