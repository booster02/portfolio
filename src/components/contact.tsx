import React, {useRef} from "react";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
    const contactContainerRef = useRef<HTMLDivElement>(null);
    return (<>
            <a id="contact" className="anchor"/>
            <div className="contactContainer" ref={contactContainerRef}>
                <a className="hyperlink " href="mailto:contact@contact.de"><span className="contactText">Contact@contact.de</span></a>
            </div>
        </>)
}