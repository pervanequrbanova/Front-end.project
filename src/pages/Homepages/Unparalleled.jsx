import React from 'react'
import group92 from "../../Images/Group 92.png";
function Unparalled() {
  return (
    <div className='containers'>
        <div className='unparalled'>
            <h2>We treat our clients like <br/>family with an  <span>unparalleled</span><br/> level of service.</h2>
            <p className='unp'>This is a leading global technology company that provides a connectivity platform <br/> to remotely access, control, manage
                , monitor, and repair devices of any kind – from laptops and mobile phones to industrial machines and robots.<br/><br/>Although it is free of charge for private use, it has more than 620,000 subscribers <br/>and enables companies of all sizes and from all industries to digitize their <br/>business-critical processes through seamless connectivity. Against the backdrop <br/>of global 
                megatrends like device proliferation
         </p>
        </div>
        <div className='unpimg'><img src={group92} alt="Logo 1" /><img src={group92} alt="Logo 1" /></div>
    </div>
  )
}

export default Unparalled