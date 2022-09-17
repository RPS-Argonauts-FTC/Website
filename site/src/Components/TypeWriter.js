import React, { useState, useEffect } from 'react';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);  

export function TypeWriter({text, doOnce=false, stopAtEmpty=true, callbackOnDone = null, ms=25, apexPause=1000, tag="typewriter"}) {

    const [displayText, setDisplayText] = useState("");

    let counter = 0;
    let incr = 1;
    let start = false;
    let ended = false;

    let textRotationIndex = 0;
    let currentText = text[textRotationIndex];

    useEffect(() => {
        async function updateText() {

            let currentProgressedText = currentText.substring(0, counter);
            setDisplayText(currentProgressedText);

            if (counter === currentText.length){

                await delay(apexPause);

                if (stopAtEmpty && text[(textRotationIndex + 1) % text.length].replace(" ", "") == "")
                {
                    if (ended) {return;}
                    callbackOnDone();
                    ended = (true);
                }

                incr *= -1;

                if (textRotationIndex + 1 === text.length && doOnce)
                {
                    if (ended) {return;}
                    callbackOnDone();
                    ended = (true);
                    return;
                }
            }

            if (
                (text[(textRotationIndex + 1) % text.length].includes(currentProgressedText) || counter === 0)
                && incr === -1
                )
            {
                incr *= -1;
                textRotationIndex++;
                if (textRotationIndex === text.length && doOnce && counter == 0)
                {
                    text = [" "];
                }
                textRotationIndex = textRotationIndex % text.length;
                currentText = text[textRotationIndex];
            }

            counter += incr;   
            
            await delay(ms);

            await updateText();
        }

        if (!start)
        {
            updateText();
            start = true;
        }
    }, []);

    return (
        <div className={tag}>
            <p><b>{displayText}</b></p>
            {/* {displayText.replace(" ", "") != "" && <button onClick={() => {
                if (ended) {return;}
                callbackOnDone(); 
                ended = (true)
            }} style={{position: "absolute", bottom: 10, left: 10, zIndex: 1, color: "#fff", backgroundColor: "#000"}}><u>Skip</u></button>} */}
        </div>
    );
}