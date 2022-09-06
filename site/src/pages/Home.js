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

        await delay(0.1);

        setTopBarOffset(tick);

        if (tick <= -0.0025)
        {
            recurAnim(tick + (tick/-100) * 2, callback);
            //brezier curve
        }
        else {
            setTopBarOffset(0);
            if (callback != null)
            {
                callback();
            }
        }
    }

    return(
        <div>
            <NavBar t={topBarOffset}/>
            <h1 className="big-center-header" style={{top: 750 +  50 + topBarOffset * 10 , position: "absolute"}}>
                {
                    TypeWriter(
                        [                            
                            // "ENGINEERS",
                            // "INNOVATORS",
                            // "WE ARE BETTER THAN LARRY",
                            // "FTC21630",
                            " "
                        ],
                        true,
                        true,
                        () => {
                            recurAnim(-100, () => {
                                setAnimDone(true);
                                // console.log(topBarOffset);
                                // console.log(animDone);
                            });
                            // if (window.pageYOffset != 0) return;
                            // divRef.current.scrollIntoView()
                        },
                        50,
                        1000
                    )
                }
            </h1>
            
            {/* <Canvas */}

            <div ref={divRef} 
            style={{
                top: -500 * topBarOffset + 700,
                position: "absolute",
                width: "100vw",
                padding: 25, backgroundColor: "rgba(256, 256, 256, 0.025)", borderTopLeftRadius: 25, borderTopRightRadius: 25
            }}>
                <p className="header" style={{padding: 0, margin: 0}}>
                    RPS Argonauts
                </p>
                <p style={{marginBottom: 25}}>
                    The RPS Argonauts is ...
                </p>
                {
                    Array(100).fill(<p>a</p>)
                }
            </div>
        </div>
    );
}