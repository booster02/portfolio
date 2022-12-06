import React, {useEffect, useRef, useState} from "react";
import {ScrollDownIndicator} from "./scroll-down-indicator";
interface infotextProps {}

export const Intro: React.FC<infotextProps> = () => {
    const [currentText, setCurrentText] = useState("H");
    const [textIndex, setTextIndex] = useState(0);
    const forward = useRef(false);
    const [delay, setDelay] = useState(200);
    const textList = ["Hello, Visitor", "My name is Béla", "What can I do for you?"];
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (currentText.length === 0) {
            setTextIndex(i => {
                return i === textList.length - 1 ? ((i + 1) % textList.length) : i + 1;
            });
        }
        const interval = setInterval(() => {
            setDelay(200);
            if (!forward.current && currentText.length === textList[textIndex].length - 1) {
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

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef?.current) {
                const offsetTop = window.scrollY;
                const windowHeight = window.innerHeight;
                if (window.innerWidth <= 1200) {
                    containerRef.current.style.position = "absolute";
                    return;
                }
                if (offsetTop >= windowHeight / 2 + 172) {
                    containerRef.current.style.position = "absolute";
                    containerRef.current.style.marginTop = (windowHeight / 2 + 172) + "px";
                } else {
                    containerRef.current.style.position = "fixed";
                    containerRef.current.style.marginTop = "0";
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })


    return (<>
        <div className="infoText" ref={containerRef}>
            <h1 className="infoHeadline">
                <div ref={editableRef => editableRef && editableRef.focus()}
                     className="headlineTextArea" spellCheck="false">{currentText}<span className="blink">_</span>
                </div>
            </h1>
        </div>
        {<div className="spaceHolder"></div>}
        <ScrollDownIndicator />
    </>)
}