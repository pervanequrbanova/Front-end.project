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
import Menubar from './Homepages/Menubar';



function Home() {
  return (
    
    <div >
     <Menubar/>
      <Header  />
  
      <Count/>
      <Selection/>
      <Course_cart/>
      <ProMemberCourses/>
      <Powerful/>
      <AdultProfiles />
      <Learning/>
      <Quessions/>
      <Footer />
    </div>
  )
}

export default Home