import NavBar from "../Components/NavBar";


export default function Contact(){
    return (
        <div style={{color: "black"}}>
            <NavBar background={"transparent"}/>
            <h1 className="big-center-header">
                Contact Us
            </h1>
            Emails:
            <ul>
                <li><a href="mailto:info@argonautsftc.org">info@argonautsftc.org</a></li>
                <li><a href="rutgerspreprobotics@gmail.com">rutgerspreprobotics@gmail.com</a></li>
            </ul>
            Socials:
            <ul>
                <li><a href="">YouTube</a></li>
            </ul>
        </div>
    );
}