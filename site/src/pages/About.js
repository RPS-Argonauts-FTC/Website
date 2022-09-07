import { useState } from "react";
import NavBar from "../Components/NavBar";
import { TypeWriter } from "../Components/TypeWriter";

export default function About(){

    const [typeWriteEnd, setTypeWriteEnd] = useState(false);

    return (
        <>
            <NavBar />
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
            {typeWriteEnd && <div>
                <div
                    style={{
                        height: "100vh",
                        width: "100%",
                    }}    
                />
                <h1>The RPS Argonauts</h1>
                <p>
                    <b>Welcome to our webpage!</b><br />
                    Since 2022, the Argonauts team are a coalition of students passionate for STEM and outreach for others intersted in FTC or STEM.
                </p>
            </div>}
        </>
    );
}