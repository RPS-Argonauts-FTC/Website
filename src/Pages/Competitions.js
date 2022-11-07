import NavBar from "../Components/NavBar";

export default function Competitions(){
    return (
        <div style={{color: "black"}}>
            <NavBar background={"transparent"}/>
            <h1 className="big-center-header">
                Competitions
            </h1>
            <a href="http://www.ftcstats.org/2023/index.html" target="_blank" style={{paddingLeft: 25}}>Powerplay 22-23 Scores for FTC21630</a>

            <div style={{padding: 25}}>
                <h1>[6-0] November 6th, 2022 - Northern NJ Qualifiers</h1>
                <h3>Debrief:</h3>
                Great matches overall
                <ul>
                    <li>A few mishaps in the beginning (replaced claw didn't fit servo but got it in 10 mins before first match)</li>
                    <li>Ended 6-0 in qualifiers and beat our mentor team (5-1) for first place.</li>
                    <li>Almost got autonomous award but lost by 1 successful parking - our camera sucks</li>
                    <li>Almost got highest alliance score award but our mentor team pulled ahead of our 148 with a 164</li>
                </ul>
                <h3>Videos:</h3>
                <p>tbd</p>
                <h3>Picture dump:</h3>
                <img src="https://media.discordapp.net/attachments/1025573301474574396/1038943122866049044/IMG_4971.jpg"
                alt="picking up larry like a viper slide.jpg" width="70%"/>
                <p>Picked up Larry (red) like a viper slide.</p>
                <img src="https://media.discordapp.net/attachments/1025573301474574396/1038943122455011469/IMG_5013.jpg"
                alt="picking up larry again.jpg" width="70%"/>
                <p>Picked up Larry (orange) again. Helping his team throw Larry out for treason since he helped us get first.</p>
            </div>
        </div>
    );
}