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
                    style={{position: "absolute", top: 1200, left: (scrollY - 300) / 2 - 600}}
                >
                    <img
                        src="https://www.rutgersprep.org/uploaded/admission/campus-aerial-visit-rutgers-prep-banner.jpg"
                        alt="Rutgers Prep"
                    />
                    <h1 style={{position: "absolute", bottom: 25, left: 25}}>Image of our school.</h1>
                </div>

                <p>
                    <h1>Welcome to our webpage!</h1><br />
                    Founded this year in 2022 (rookie team), the Argonauts are a coalition of students passionate for STEM and outreach for others intersted in FTC or STEM. We are a school team out of Rutgers Preparatory school.
                </p>
            </div>}
        </div>
    );
}