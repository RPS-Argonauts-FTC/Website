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