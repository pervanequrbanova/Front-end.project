import React from 'react';

const MapPage = () => {
  return (
  <div className="content">
     <div className='container'>
    <div className='leftcontact1'> 
      <div className="leftcontact">
<div className='adress'><i class="fa-solid fa-location-dot"></i><span><h4>Location</h4><b>San Francisco, CA</b></span></div>
<div className='adress'><i class="fa-solid fa-phone"></i><span><h4>Phone</h4><b>(555) 123-4567</b></span></div>
<div className='adress'><i class="fa-solid fa-envelope"></i><span><h4>Email</h4><b>Digilearn@gmail.com</b></span></div>
      </div>
      <div className="rightcontact">
        <label htmlFor="name">
        Full Name*
        </label>
        <input type="text" id='name' />
        <label htmlFor="mail">
        Email Address*
        </label>
        <input type="email" id='mail' />
        <label htmlFor="num">
        Phone Number*
        </label>
        <input type="number" id='num' />
        <label htmlFor="message">Message*</label>
        <textarea name="mes" id="message"></textarea>
        <button>Submit</button>
      </div>
    </div>
     <div className='maps'>
   
    </div>
   </div>
  </div>
  );
}

export default MapPage;