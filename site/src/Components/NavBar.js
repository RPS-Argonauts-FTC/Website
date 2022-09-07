import { Link } from "react-router-dom";

export default function NavBar({t}){
    return (
    <nav className="nav-no-space" style={{top: t, position: "fixed", width: "100vw", zIndex: 2}}>
        <ul className="nav-list">
            <li className="nav-item">
                <img src={require("../Image/Logo.png")} alt="logo" width="35" height="35"/>
                <Link to="/">FTC 21630</Link>
            </li>
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about">About Us</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact">Contact</Link>
            </li>
            {/* <li className="nav-item">
                <Link to="/competitions">Competitions</Link>
            </li> */}
            <li className="nav-item">
                <a href="https://github.com/RPS-Argonauts-FTC/" target="_blank">GitHub</a>
            </li>
        </ul>
    </nav>
    );
}