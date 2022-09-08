import { useEffect, useState, useRef, Suspense } from "react";
import NavBar from "../Components/NavBar";
import { TypeWriter } from "../Components/TypeWriter";

import Computer from "../Components/Robot";

import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import { useNavigate } from "react-router-dom";

import { a, useSpring } from "@react-spring/three";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);  

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default function Home(){

    const [scrollY, setScrollY] = useState(0);

    let navigate = useNavigate();

    window.addEventListener("scroll", function(){
        setScrollY(window.scrollY);

        // console.log(window.scrollY);

        if (window.scrollY >= 1300 && !redirAlready)
        {
            redirAlready = true;
            console.log("over at " + window.scrollY);
            navigate("/about") 
        }
    });

    //for scrolling
    const divRef = useRef(null);
    // const [redirAlready, setRedirAlready] = useState(false);
    let redirAlready = false;

    const [topBarOffset, setTopBarOffset] = useState(-100);
    // const [rot, setRotation] = useState([0, 0, 0]);

    const animProps = useSpring({
        rotation: scrollY >= 0 ? [0, 0, 0] : [0, Math.PI * 100, 0],
    })

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
            {/* 0 at top 1 at y=200 */}
            <NavBar t={topBarOffset} background={"#000"}/>
            <h1 className="big-center-header" style={{top: 750 +  50 + topBarOffset * 10, position: "absolute", textAlign: "center", width: "100%"}}>
                {
                    TypeWriter(
                        [                            
                            // "ENGINEERS",
                            // "INNOVATORS",
                            // "BETTER THAN LARRY",
                            "FTC21630",
                            " "
                        ],
                        true,
                        true,
                        () => {
                            recurAnim(-100);
                            // if (window.pageYOffset != 0) return;
                            // divRef.current.scrollIntoView()
                        },
                        50,
                        1000
                    )
                }
            </h1>
            
            <Canvas style={{position: "fixed", height: "100vh", width: "100%", top : -75 * topBarOffset + 120}}>
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
                    <a.group rotation={animProps.rotation}>
                        <Computer/>
                    </a.group>
                </Suspense>
                <planeGeometry args={[100, 100]} />

                <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
            </Canvas>

            <div className="first-scroll-div" style={{
                position: "absolute",
                top: 800,
                // width: "50vw",
                // position: clamp(scrollY - 400, -500, 25) >= 25 ? "fixed" : "absolute",
                left: clamp(scrollY - 400, -500, 0),
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                // borderRadius: 25,
                padding: 25
            }}>
                <h1>Our Robot</h1>
                <p>A 3D Rendering of our team's robot. <br/> <br/> <b>Drag to spin around.</b></p>
            </div>

            {/* <div className="first-scroll-div" style={{
                position: "absolute",
                top: 1200,
                right: clamp(scrollY - 900, -700, 0),
                backgroundColor: "rgba(222, 2, 2, 0.15)",
                // borderRadius: 25,
                padding: 25
            }}>
                <h1></h1>
                <p>lorem ipusm asdlfjskjallfjdfskjjafsd</p>
            </div> */}

            {/* closing div */}
            {/* <div style={{
                position: "fixed",
                // top: 1500,
                right: clamp(scrollY - 1200, -1000, 0),
                backgroundColor: "#000",
                width: "50vw",
                height: "100vh",
                zIndex: -1,
            }} /> */}

            {/* <div style={{
                position: "fixed",
                // top: 1500,
                left: clamp(scrollY - 1200, -1000, 0),
                backgroundColor: "#000",
                width: "50vw",
                height: "100vh"
            }} /> */}

            <div style={{
                position: "fixed",
                // top: 1500,
                left: clamp(scrollY - 1100, -1000, 0),
                backgroundColor: "rgba(0, 0, 0, " + clamp(scrollY - 700, 0, 500)/500 + ")",
                width: "50vw",
                height: "100vh"
            }} />

            <div style={{
                position: "fixed",
                // top: 1500,
                right: clamp(scrollY - 1100, -1000, 0),
                backgroundColor: "rgba(0, 0, 0, " + clamp(scrollY - 700, 10, 500)/500 + ")",
                width: "50vw",
                height: "100vh"
            }} />

            {/* make site scrollable */}
            <div ref={divRef} 
            style={{
                // top: 0,
                position: "absolute",
                width: "100vw",
                height: (100 + topBarOffset) / 100 * 5000,
                padding: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25, zIndex: -1,
            }}>
            </div>
        </div>
    );
}