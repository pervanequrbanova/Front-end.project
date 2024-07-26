import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import AdultProfiles from './AdultProfiles';
import Home from "./pages/Homepages/Home";
import Courses from "./pages//Homepages/Courses";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

import { useState } from "react";
import Header from "./components/Header";
import Selection from "./pages/Homepages/Selection";
import Course_cart from "./pages/Homepages/Course_cart";
import ProMemberCourses from "./pages/Homepages/ProMemberCourses";
import Powerful from "./pages/Homepages/Poweful";
import Learning from "./pages/Homepages/Learning";
import Quessions from "./pages/Homepages/Quessions";
import Count from "./pages/Homepages/Count";
import Footer from "./components/Footer";
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
   
    </>
  );
}

export default App;
