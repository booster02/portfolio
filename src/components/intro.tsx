import React, {useEffect, useRef, useState} from "react";

interface infotextProps {
}

export const Intro: React.FC<infotextProps> = () => {
    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const textList = ["Hello, Visitor", "My name is Béla", "What can I do for you?"]
    const forward = useRef(false);
    const [delay, setDelay] = useState(100);
    useEffect(() => {
        if (currentText.length === 0) {
            setTextIndex(i => {
                return i === textList.length - 1 ? ((i + 1) % textList.length) : i + 1;
            });
        }
        const interval = setInterval(() => {
            setDelay(100);
            if (!forward.current && currentText.length === textList[textIndex].length -1) {
                setDelay(1000);
            }
            setCurrentText(getText())
        }, delay)
        return () => clearInterval(interval);
    }, [currentText])

    const getText = () => {
        let baseText = textList[textIndex];
        let newText = "";
        if (forward.current) {
            if (currentText.length > 0) {
                newText = currentText.slice(0, currentText.length - 1)
            } else {
                forward.current = false;
            }
        } else {
            if (currentText.length === baseText.length) {
                forward.current = true;
            }
            if (currentText.length > 0) {
                newText = baseText.slice(0, currentText.length + 1)
            } else {
                let index = textIndex + 1;
                if (index > textList.length - 1) {
                    index = 0;
                }
                newText = textList[index][0];
            }
        }
        return newText;
    }

    return (<div className="infoText">
        <h1 className="infoHeadline">
            <div ref={editableRef => editableRef && editableRef.focus()}
                 className="headlineTextArea" spellCheck="false">{currentText}<span className="blink">_</span></div>
        </h1>
    </div>)
}