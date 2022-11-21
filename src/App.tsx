import './App.css'
import {Navbar} from "./components/navbar";
import {Intro} from "./components/intro";
import {ProjectShow} from "./components/project-show";
import {Contact} from "./components/contact";
import {About} from "./components/about";
import {useEffect, useLayoutEffect, useRef, useState} from "react";

enum Theme {
    DARK, LIGHT, NONE
}

function App() {
    const app = useRef<HTMLDivElement>(null);
    const [lightMode, setLightMode] = useState(false);
    useLayoutEffect(() => {
        if (!window.matchMedia) return;
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            console.log(window.matchMedia('(prefers-color-scheme: light)').matches)
            toggleTheme(Theme.LIGHT);
        }
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
            toggleTheme(event.matches ? Theme.LIGHT : Theme.DARK);
        });
    }, [])
    const toggleTheme = (setTheme = Theme.NONE) => {
        if (!app?.current) return;
        const classList = app.current.classList;

        if (setTheme !== Theme.NONE) {
            switch (setTheme) {
                case Theme.DARK:
                    classList.remove("whiteMode");
                    setLightMode(false)
                    return
                case Theme.LIGHT:
                    if (!classList.contains("whiteMode")) {
                        classList.add("whiteMode");
                        setLightMode(true);
                    }
                    return;
            }
        }

        if (classList.contains("whiteMode")) {
            classList.remove("whiteMode");
            setLightMode(false);
            console.log("set dark theme");
        } else {
            classList.add("whiteMode");
            setLightMode(true);
            console.log("set white theme");
        }
    }

    return (<div ref={app} className="App">
        <Navbar toggleTheme={toggleTheme} getWhiteTheme={lightMode}/>
        <Intro/>
        <About/>
        <div className="projects">
            <ProjectShow pictureName="weatherPage.png" descriptionText="Das hier ist description text"
                         link="https://booster02.github.io/weather/"/>
            <ProjectShow pictureName="weatherPage.png" descriptionText="Das hier ist description text"
                         link="https://booster02.github.io/weather/"/>
            <ProjectShow pictureName="weatherPage.png" descriptionText="Das hier ist description text"
                         link="https://booster02.github.io/weather/"/>
            <ProjectShow pictureName="weatherPage.png" descriptionText="Das hier ist description text"
                         link="https://booster02.github.io/weather/"/>
            <ProjectShow pictureName="weatherPage.png" descriptionText="Das hier ist description text"
                         link="https://booster02.github.io/weather/"/>
            <ProjectShow pictureName="weatherPage.png" descriptionText="Das hier ist description text"
                         link="https://booster02.github.io/weather/"/>
        </div>
        <Contact/>
    </div>)
}

export default App