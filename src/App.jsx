import React from "react";

import { Routes, Route } from "react-router-dom";
import "./style/App.css";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";


function App() {

  return (
  
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

    </div>
  
  );
}

export default App;
