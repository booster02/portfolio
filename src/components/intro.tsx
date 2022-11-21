import React, {useEffect, useRef, useState} from "react";

interface infotextProps {

}

export const Intro: React.FC<infotextProps> = () => {
    return (<div className="infoText">
        <h1 className="infoHeadline">
            <div ref={editableRef => editableRef && editableRef.focus()}
                 onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                 contentEditable="true"  className="headlineTextArea">Hello <br />World<span className="blink">_</span></div>
        </h1>
    </div>)
}