import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import AdultProfiles from './AdultProfiles';
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState } from "react";
import Header from "./Header";
import Count from "./Count";
import Selection from "./Selection";
import Course_cart from "./Course_cart";
import ProMemberCourses from "./ProMemberCourses";
import Powerful from "./Poweful";
import Learning from "./Learning";
import Quessions from "./Quessions";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
 
      <Header setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Count/>
      <Selection/>
      <Course_cart/>
      <ProMemberCourses/>
      <Powerful/>
      <AdultProfiles />
      <Learning/>
      <Quessions/>
      <Footer setIsMenuOpen={setIsMenuOpen}/>
    {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
