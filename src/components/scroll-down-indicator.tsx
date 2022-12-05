import React, {useEffect, useRef} from "react";

export const ScrollDownIndicator: React.FC = () => {
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function fadeOutOnScroll() {
            if (!scrollIndicatorRef?.current) return;
            const scrollIndicator = scrollIndicatorRef.current;
            if (!scrollIndicator) {
                return;
            }
            const scrollTop = document.documentElement.scrollTop;
            let opacity = 1 - scrollTop / 100;
            if (scrollTop >= 200 || opacity < 0) {
                opacity = 0;
            }
            console.log("opacity:", opacity);
            scrollIndicator.style.opacity = String(opacity);
        }

        window.addEventListener("scroll", fadeOutOnScroll);
        return () => {
            window.removeEventListener("scroll", fadeOutOnScroll)
        }
    })
    return (<div ref={scrollIndicatorRef} className="scrollDownIndicator">\/</div>)
}