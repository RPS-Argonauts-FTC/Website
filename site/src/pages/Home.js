import { useEffect, useState, useRef, Suspense } from "react";
import NavBar from "../Components/NavBar";
import { TypeWriter } from "../Components/TypeWriter";

import Computer from "../Components/Robot";

import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);  

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

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

    // console.log(scrollY);
    // console.log();

    return(
        <div>
            {/* 0 at top 1 at y=200 */}
            <NavBar t={-100 + clamp(scrollY, 0, 200)/200 * 100}/>
            <h1 className="big-center-header" style={{top: 750 +  50 + topBarOffset * 10 , position: "absolute"}}>
                {
                    TypeWriter(
                        [                            
                            // "ENGINEERS",
                            // "INNOVATORS",
                            // "BETTER THAN LARRY",
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
            
            <Canvas style={{position: "fixed", height: "70vh", width: "100%", top : 0}}>
                <ambientLight intensity={1}/>
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.0005}
                    shadow-camera-near={0.01}
                    shadow-camera-far={40}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={-10}
                    shadow-camera-bottom={10}
                />
                <pointLight position={[50, 0, 50]} intensity={1} />
                <pointLight position={[-50, 0, 50]} intensity={1} />
                <Suspense>
                    <Computer />
                </Suspense>
                <planeGeometry args={[100, 100]} />

                <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
            </Canvas>

            <div ref={divRef} 
            style={{
                // top: 0,
                position: "absolute",
                width: "100vw",
                padding: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25
            }}>
                {
                    Array(100).fill(<p>a</p>)
                }
            </div>
        </div>
    );
}