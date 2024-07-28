import React from 'react'

import Header from "../components/Header";
import Selection from "./Homepages/Selection";
import Course_cart from "./Homepages/Course_cart";
import ProMemberCourses from "./Homepages/ProMemberCourses";
import Powerful from "./Homepages/Poweful";
import Learning from "./Homepages/Learning";
import Quessions from "./Homepages/Quessions";
import AdultProfiles from '../AdultProfiles';
import Count from "./Homepages/Count";
import Footer from "../components/Footer";


import { useState } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    
    <div>
   
      <Header setIsMenuOpen={setIsMenuOpen} />
    
      <Count/>
      <Selection/>
      <Course_cart/>
      <ProMemberCourses/>
      <Powerful/>
      <AdultProfiles />
      <Learning/>
      <Quessions/>
      <Footer setIsMenuOpen={setIsMenuOpen}/>
    </div>
  )
}

export default Home