import { useEffect, useState, useRef, Suspense } from "react";
import NavBar from "../Components/NavBar";
import { TypeWriter } from "../Components/TypeWriter";

import Robot from "../Components/Robot";

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
    const [done, setDone] = useState(false);

    let navigate = useNavigate();

    const scrollHandler = () =>{
        setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", scrollHandler);

    //for scrolling
    const divRef = useRef(null);
    // const [redirAlready, setRedirAlready] = useState(false);
    let redirAlready = false;

    const [topBarOffset, setTopBarOffset] = useState(-100);
    // const [rot, setRotation] = useState([0, 0, 0]);

    const animProps = useSpring({
        rotation: scrollY >= 1000 ? [0, Math.PI, 0] : scrollY >= 200 ? [0, 0, 0] : [0, 0, 0],
        scale: scrollY >= 100 ? [1 + (scrollY - 200)/3000 * 1, 1 + (scrollY - 200)/3000 * 1, 1 + (scrollY - 200)/3000 * 1] : [4, 4, 4],
        position: scrollY >= 100 ? [0, 1, 0] : [0, -10, 0],
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
            <NavBar t={topBarOffset} background={"transparent"}/>
            <h1 style={{fontSize: clamp(200 - scrollY * 2, 1, 200) , position: "fixed", textAlign: "center", width: "100%", height: "100%", justifySelf: "center", color: "#000", zIndex: scrollY >= 100 ? -1 : 1}}>
                {
                    <TypeWriter
                        text={[                            
                            // "ENGINEERS",
                            // "INNOVATORS",
                            // "BETTER THAN LARRY",
                            "FTC21630"
                        ]}
                        doOnce={true}
                        stopAtEmpty={true}
                        callbackOnDone = {() => {
                            recurAnim(-100);

                            // if (window.pageYOffset != 0) return;
                            // divRef.current.scrollIntoView()
                        }}
                        ms={50}
                        apexPause={1000}
                        />
                    }
            </h1>
            
            <Canvas 
            shadowMap
            colorManagement
            style={{position: "fixed", height: "100vh", width: "100%"}}>
                <ambientLight intensity={1}/>
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                    shadow-bias={-0.0005}
                    shadow-camera-near={0.01}
                    shadow-camera-far={40}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={-10}
                    shadow-camera-bottom={10}
                />
                {scrollY >= 100 && <group>
                <pointLight position={[50, 0, 50]} intensity={1} />
                <pointLight position={[-50, 0, 50]} intensity={1} />
                </group>}
                <Suspense>
                    <a.group castShadow position={animProps.position} rotation={animProps.rotation} scale={animProps.scale}>
                        <Robot/>
                    </a.group>
                </Suspense>

                <mesh rotation={[Math.PI/2 + Math.PI, 0, 0]} receiveShadow>
                    <planeBufferGeometry attach="geometry" args={[50, 50]} receiveShadow/>
                    <meshBasicMaterial attach="material" color="#aaf" />
                </mesh>

                {scrollY >= 100 && <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />}
            </Canvas>

            <div className="first-scroll-div" style={{
                position: "absolute",
                top: scrollY * 5 - 200,
                color: "black",
                paddingLeft: 25
            }}>
                <h1>Our Robot</h1>
                <p>A 3D Rendering of our team's robot built for the '22-'23 season. <br/> (will be disclosed when season ends)<br/> <br/> <b>Drag to spin around.</b></p>
                {/* Chlictor forever */}
            </div>

            <div style={{
                position: "absolute",
                justifyContent: "right",

                top: scrollY * 5 - 1200,
                color: "black",
                right: 25
            }}>
                <h1>Built To Win</h1>
                <p>We're currently 6-0 in qualifications. <br/> <b>Let's keep that up.</b> <br/></p>
                {/* Chlictor forever */}
            </div>

            {/* <div className="first-scroll-div" style={{
                position: "absolute",
                top: clamp(scrollY - 300, -1000, 0) * 3 + 500,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                padding: 25
            }}>
                <h1>Our Robot</h1>
                <p>A 3D Rendering of our team's robot. <br/> <br/> <b>Drag to spin around.</b></p>
            </div> */}

            <div style={{
                position: "fixed",
                // top: 1500,
                left: clamp(scrollY - 1100, -1000, 0),
                backgroundColor: "rgba(255, 255, 255, " + clamp(scrollY - 700, 0, 500)/500 + ")",
                width: "50vw",
                height: "100vh"
            }} />

            <div style={{
                position: "fixed",
                // top: 1500,
                right: clamp(scrollY - 1100, -1000, 0),
                backgroundColor: "rgba(255, 255, 255, " + clamp(scrollY - 700, 10, 500)/500 + ")",
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
            
            {
                scrollY >= 1200 && <h1 style={{fontSize: 100, position: "fixed", textAlign: "center", width: "100%", height: "100%", justifySelf: "center", color: "#000", zIndex: 10}}><TypeWriter
                    text={[                            
                        "• See you on the field •"
                    ]}
                    doOnce={true}
                    stopAtEmpty={true}
                    ms={50}
                    apexPause={1000}
                    callbackOnDone = {() => {
                        navigate("/about") 
                    }}
                />
                </h1>
            }
        </div>
    );
}