import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import Showcase from "./components/Showcase/Showcase";
import Contact from "./components/Contact/Contact";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--primary)]">
        <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
