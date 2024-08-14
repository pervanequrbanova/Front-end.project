import React from 'react';

const MapPage = () => {
  return (
  <div className="content">
     <div className='container'>
    <div className='leftcontact1'> 
      <div className="leftcontact">
<div><i class="fa-solid fa-location-dot"></i><span><h4>Location</h4><b>San Francisco, CA</b></span></div>
<div><i class="fa-solid fa-phone"></i><span><h4>Phone</h4><b>(555) 123-4567</b></span></div>
<div><i class="fa-solid fa-envelope"></i><span><h4>Email</h4><b>Digilearn@gmail.com</b></span></div>
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
     <div 
      style={{
        height: '900px',
         backgroundImage:' url("https://s3-alpha-sig.figma.com/img/86b5/867f/0f733183a75f37a443debc4785aef55b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=je1FUDbZfavVtNyEVndfPi117UV0KROs6Dl07NCoM~ijutadO2GmRLKkJUfGw4wxda5zKoTXcfxPCgAYJMKoGRAUO5f8utRKEGthxPn1605YTx7zZ93ySKThqgZMr86PEuZA-txw6XOeoCENjzH-0d0t6nqyX9OaYimHz43tjoKLb1RcajbQliHFjoXuHJGtnt0yma52ngE70DOhTzf7ECVuZdzDTBycwVZJG1p7KSGNvc0iO1QlxrzOw~zU8vzZeZ573Kra8gStbB0Ys2gxGHE8mcUVFx3hPF64q6dfGDmyLjaRnWHpz37ParBqlDMcJG5x1nO3oP6qfRMHLeW8dw__")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
   
    </div>
   </div>
  </div>
  );
}

export default MapPage;