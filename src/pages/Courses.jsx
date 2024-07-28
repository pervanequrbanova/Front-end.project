import React from 'react'

import Quessions from "./Homepages/Quessions";
import Footer from "../components/Footer";
import Powerful from "./Homepages/Poweful";
import Navbar from '../components/Navbar';


function Courses() {
  return (
    <div> 
      <Navbar/>
      <Powerful/>
   
       <Quessions/>
       <Footer/>
       </div>
  )
}

export default Courses