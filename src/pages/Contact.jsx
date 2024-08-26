import React from 'react'
import Navbar from '../components/Navbar'
import Quessions from './Homepages/Quessions'
import Footer from '../components/Footer'
import MapPage from './Homepages/MapPage'
import Waiting from './Homepages/Waiting'
import Menubar from './Homepages/Menubar'
function Contact() {
  return (
    <div>  
           <Menubar/>

       <Navbar/>
    <Waiting/>
    <MapPage/>
      <Quessions/>
      <Footer/>
      </div>
  )
}

export default Contact