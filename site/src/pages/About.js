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

    return (
        <div style={{backgroundColor: "rgb(" + String(scrollY/100 * 255) + ", " + String(scrollY/100 * 255) + ", " + String(scrollY/100 * 255) + ")"}}>
            <NavBar color={"rgb(" + String(255 - scrollY/100 * 255) + ", " + String(255 - scrollY/100 * 255) + ", " + String(255 - scrollY/100 * 255) + ")"}/>
            <h1 className="big-center-header" style={{position: "absolute", textAlign: "center", width: "100%"}}>
            {
                    TypeWriter(
                        [
                            "ABOUT"
                        ],
                        true,
                        true,
                        () => {
                            setTypeWriteEnd(true);
                        },
                        50,
                        1000
                    )
                }
            </h1>

            <center>
                <h1 className="big-center-header" style={{position: "absolute", top: 75, textAlign: "center", width: "100%", color: "black", lineHeight: scrollY / 75}}>THE RPS ARGONAUTS</h1>
            </center>n 

            {typeWriteEnd && <div style={{
                color: "black", 
                padding: 25,
                fontFamily: "'Montserrat', sans-serif"}}>
                <div
                    style={{height: "100vh", width: "100%"}}    
                />
                <p>
                    <b>Welcome to our webpage!</b><br />
                    Since 2022, the Argonauts team are a coalition of students passionate for STEM and outreach for others intersted in FTC or STEM.
                </p>
            </div>}
        </div>
    );
}