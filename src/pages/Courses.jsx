import React from 'react'

import Quessions from "./Homepages/Quessions";
import Footer from "../components/Footer";
import Powerful from "./Homepages/Poweful";
import Navbar from '../components/Navbar';
import ProMemberCourses from './Homepages/ProMemberCourses';
import OtherMember from './Homepages/OtherMembers';
import Decide from './Homepages/Decide';


function Courses() {
  return (
    <div> 
      
      <Navbar/>
      <Decide/>
      <ProMemberCourses/>
      <Powerful/>
      <OtherMember/>
       <Quessions/>
       <Footer/>
       </div>
  )
}

export default Courses