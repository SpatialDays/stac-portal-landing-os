import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

function App() {
  return (
    <div className="app">
      <div className="sticky-header">
        <Navbar />
        <Heading />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
