import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Committee from "./pages/Committee";
import CallForPapers from "./pages/CallForPapers";
import ImportantDates from "./pages/ImportantDates";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/callforpapers" element={<CallForPapers />} />
            <Route path="/importantdates" element={<ImportantDates />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
