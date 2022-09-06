import { useEffect, useState, useRef } from "react";
import NavBar from "../Components/NavBar";
import { TypeWriter } from "../Components/TypeWriter";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);  

export default function Home(){

    const [scrollY, setScrollY] = useState(0);

    window.addEventListener("scroll", function(){
        setScrollY(window.scrollY);
    });

    //for scrolling
    const divRef = useRef(null);
    const [animDone, setAnimDone] = useState(false);

    const [topBarOffset, setTopBarOffset] = useState(-100);

    const recurAnim = async (tick = -100, callback = null) => {

        setTopBarOffset(tick);

        await delay(0.1);

        console.log(tick);

        if (tick <= -1)
        {
            recurAnim(tick + (tick/-100) * 2, callback);
            //brezier curve
        }
        else {
            if (callback != null)
            {
                callback();
            }
        }
    }

    return(
        <div>
            <NavBar t={topBarOffset}/>
            {!animDone && <h1 className="big-center-header" style={{top: 750 +  50 + topBarOffset * 10 , position: "absolute"}}>
                {
                    TypeWriter(
                        [
                            "A",
                            "B",
                            "C"
                            // "WE ARE ENGINEERS",
                            // "WE ARE INNOVATORS",
                            // "WE ARE BETTER THAN LARRY",
                            // "WE ARE CHAMPIONS"
                        ],
                        true,
                        true,
                        () => {
                            recurAnim(-100, () => {
                                setAnimDone(true);
                                console.log(topBarOffset);
                            });
                            // if (window.pageYOffset != 0) return;
                            // divRef.current.scrollIntoView()
                        },
                        50,
                        1000
                    )
                }
            </h1>}
            <div style={{height: "100vh"}} />
            {animDone && <div ref={divRef} style={{bottom: topBarOffset}}>
                {/* {
                    Array(10).fill(<p>aaaaa</p>)
                } */}
                <p>
                    FTC 21630 - RPS Argonauts.
                </p>
            </div>}
        </div>
    );
}