import { Link } from "react-router-dom";

export default function NavBar({t, background = "", color = "black"}){
    return (
    <nav className="nav-no-space" style={{top: t, position: "fixed", width: "100%", zIndex: 2, backgroundColor: background}}>
        <ul className="nav-list">
            <li className="nav-item">
                <img src={require("../Image/Logo.png")} alt="logo" width="40" height="40"/>
                <Link to="/" style={{color: color}}>21630</Link>
            </li>
            <li className="nav-item">
                <Link to="/competitions" style={{color: color}}>Powerplay 22-23</Link>
            </li>
            <li className="nav-item">
                <Link to="/" style={{color: color}}>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" style={{color: color}}>About Us</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" style={{color: color}}>Contact</Link>
            </li>
            <li className="nav-item">
                <a href="https://github.com/RPS-Argonauts-FTC/" target="_blank" style={{color: color}}>GitHub</a>
            </li>
        </ul>
    </nav>
    );
}