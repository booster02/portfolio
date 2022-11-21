import React from "react";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
    return (<>
            <a id="contact" className="anchor"/>
            <div className="contactContainer">
                Contact@contact.de
            </div>
        </>)
}