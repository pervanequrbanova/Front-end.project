import React from 'react'
import Navbar from '../components/Navbar'
import Count from './Homepages/Count'
import Learning from './Homepages/Learning'
import Quessions from './Homepages/Quessions'
import Footer from '../components/Footer'
import Feature from './Homepages/Feature'
function Pricing() {
  return (
    <div>
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