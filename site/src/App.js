import './App.css';
import Home from './Pages/Home';
import About from "./Pages/About";
import Competitions from "./Pages/Competitions";
import Contact from "./Pages/Contact"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <img src={require("./Image/Logo.png")} alt="logo" width="35" height="35"/>
            <Link to="/">FTC 21630</Link>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/competitions" element={<Competitions />} />
      </Routes>
    </Router>
  );
}

export default App;