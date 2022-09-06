import './App.css';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <nav>
    //     <ul className="nav-list">
    //       <li className="nav-item">
    //         <img src={require("./Image/Logo.png")} alt="logo" width="35" height="35"/>
    //         <Link to="/Unrealify-Website/">Unrealify</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/Unrealify-Website/#features">Features</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/Unrealify-Website/#download">Download</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/Unrealify-Website/docs">Docs</Link>
    //       </li>
    //       <li className="nav-item">
    //         <a href="https://github.com/Cowland-Game-Studios/Unrealify" target="_blank">Github</a>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
    // <p>aaa</p>
    <Home />
  );
}

export default App;