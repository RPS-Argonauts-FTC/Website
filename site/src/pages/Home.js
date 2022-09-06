import { useEffect, useState } from "react";

export default function Home(){

    const [scrollY, setScrollY] = useState(0);

    window.addEventListener("scroll", function(){
        setScrollY(window.scrollY);
    });

    return(
        <div>
            <h1 className="big-center-header">
                Home
            </h1>
        </div>
    );
}