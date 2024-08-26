import React from 'react'
import Navbar from '../components/Navbar';
import Count from "./Homepages/Count";
import Footer from "../components/Footer";
import AdultProfiles from '../AdultProfiles';
import Learning from './Homepages/Learning';
import Quessions from './Homepages/Quessions';
import Dreams from './Homepages/Dreams';
import Unparalleled from './Homepages/Unparalleled';
import Menubar from './Homepages/Menubar';
function About() {
  return (
    <div>
           <Menubar/>

      <Navbar/>
      <Dreams/>
      <Count/>
      <Learning/>
<Unparalleled/>
      <AdultProfiles />
        <Quessions/>
        <Footer/>
    </div>
  )
}

export default About