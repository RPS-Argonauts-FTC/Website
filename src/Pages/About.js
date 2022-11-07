import { useState } from "react";
import NavBar from "../Components/NavBar";
import { TypeWriter } from "../Components/TypeWriter";

export default function About(){

    const [typeWriteEnd, setTypeWriteEnd] = useState(false);

    const [scrollY, setScrollY] = useState(0);

    const scrollHandler = () =>{
        setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", scrollHandler);

    console.log(scrollY)

    return (
        <div style={{backgroundColor: "rgb(" + String(255 - scrollY/100 * 255) + ", " + String(255 - scrollY/100 * 255) + ", " + String(255 - scrollY/100 * 255) + ")"}}>
            <NavBar color={"rgb(" + String(scrollY/100 * 255) + ", " + String(scrollY/100 * 255) + ", " + String(scrollY/100 * 255) + ")"}/>
            <h1 className="big-center-header" style={{position: "absolute", textAlign: "center", width: "100%", color: "black"}}>
            {
                    <TypeWriter
                        text={[
                            "About"
                        ]}
                        callbackOnDone={() => {
                            setTypeWriteEnd(true);
                        }}
                        doOnce={true}
                        stopAtEmpty={true}
                        ms={50}
                        apexPause={1000}
                    />
                }
            </h1>

            <center>
                <h1 className="big-center-header" style={{position: "absolute", top: 75, textAlign: "center", width: "100%", color: "white", lineHeight: scrollY < 150 ? scrollY / 75 : 150 / 75}}>THE RPS ARGONAUTS</h1>
            </center>

            {typeWriteEnd && <div style={{
                color: "white", 
                padding: 25,
                fontFamily: "'Montserrat', sans-serif"}}>
                <div
                    style={{height: "100vh", width: "100%"}}    
                />
                <p>
                    <h1>Welcome to our webpage!</h1><br />
                    Founded this year in 2022 (rookie team), the Argonauts are a coalition of students passionate for STEM and outreach for others intersted in FTC or STEM. We are a school team out of Rutgers Preparatory school.
                </p>

                <div style={{height: 1050}} />
                <div
                    style={{position: "absolute", top: 1200, left: (scrollY - 300) / 2 - 600, overflowX: "hidden"}}
                >
                    <img
                        src="https://www.rutgersprep.org/uploaded/admission/campus-aerial-visit-rutgers-prep-banner.jpg"
                        alt="Rutgers Prep"
                    />
                    <h1 style={{position: "absolute", bottom: 25, left: 25}}>Our school.</h1>
                </div>

                <p>
                    <h1>Our Team</h1>
                    Here are all the active members of the Argonauts (as of 2022-2023 season):

                    <h2>Roster</h2>
                    <ul>
                        <li><p>Builders: Promit, Abigail, Jason, Max, Daniel, Tom, Arjan, Palash</p></li>
                        <li><p>Programmers: Promit, Abigail, Jason, Max, Daniel</p></li>
                        <li><p>Cad: Victor, Arnav, Ishan, Cheng</p></li>
                        <li><p>Spirit:  Ishan, Cheng, Mimansa </p></li>
                        <li><p>Photography/Video: Mimansa, Ishan</p></li>
                        <li><p>Scouts: Mimansa, Cheng, Promit</p></li>

                        <li><p>Players: Max (Driver 1), Daniel (Driver 2), Jason (Human), Tom (Coach)</p></li>
                    </ul>
                    
                    <h2>Shadows</h2>
                    <ul>
                        <li><p>Cad: Sasha</p></li>
                        <li><p>Builders: Sasha</p></li>
                    </ul>

                    <h2>Mentor Team</h2>
                    As a rookie, we have a mentor team; we would like to give special thanks to <a href="http://irobotics.org/" target="_blank">FTC11697 TECH-TONIC</a> for helping us in our first year.
                </p>
            </div>}
        </div>
    );
}