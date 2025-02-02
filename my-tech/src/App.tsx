import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Hero from "./components/Hero";
import Steps from "./Steps";
import Offers from "./Offers";
import Blogs from "./Blogs";
import Features from "./Features";
import Download from "./Download";
import Testimonies from "./Testimonies";
import FAQs from "./FAQs";
import Footers from "./Footers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Steps />} />
        <Route path="/" element={<Offers />} />
        <Route path="/" element={<Blogs />} />
        <Route path="/" element={<Features/>} />
        <Route path="/" element={<Download />} />
        <Route path="/" element={<Testimonies />} />
        <Route path="/" element={<FAQs />} />
        <Route path="/" element={<Footers />} />
      </Routes>
    </Router>
  );
}

export default App;

