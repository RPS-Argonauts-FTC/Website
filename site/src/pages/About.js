import NavBar from "../Components/NavBar";
import { TypeWriter } from "../Components/TypeWriter";

export default function About(){
    return (
        <>
            <NavBar />
            <h1 className="big-center-header">
            {
                    TypeWriter(
                        [                            
                            // "ENGINEERS",
                            // "INNOVATORS",
                            // "BETTER THAN LARRY",
                            "ABOUT"
                        ],
                        true,
                        true,
                        null,
                        50,
                        1000
                    )
                }
            </h1>
            <p>
                
            </p>
        </>
    );
}