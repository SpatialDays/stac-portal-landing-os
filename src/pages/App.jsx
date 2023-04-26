import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Contact from "./Contact";
import Navbar from "../components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

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
