import React from 'react'
import Navbar from '../components/Navbar'
import Count from './Homepages/Count'
import Learning from './Homepages/Learning'
import Quessions from './Homepages/Quessions'
import Footer from '../components/Footer'
import Feature from './Homepages/Feature'
import Menubar from './Homepages/Menubar'
function Pricing() {
  return (
    <div>
           <Menubar/>

        <Navbar/>
        <Feature/>
      <Count/>
   
      <Learning/>
  
        <Quessions/>
        <Footer/>
    </div>
  )
}

export default Pricing