
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Hero from "./components/Hero";
import Steps from "./Steps";
import Offers from "./Offers";
import Blogs from "./Blogs";
import Features from "./Features";
import Download from "./Download";
import Testimonies from "./Testimonies";
import FAQs from "./FAQs";
import Footers from "./Footers";

import "./App.css"; // Import CSS file

// ✅ Responsive Navbar with Toggle Button
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">MyApp</h1>
        
        {/* Hamburger Button (Mobile) */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/steps">Steps</Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/download">Download</Link></li>
          <li><Link to="/testimonies">Testimonies</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/download" element={<Download />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/footers" element={<Footers />} />
      </Routes>
    </Router>
  );
}

export default App;
