
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.css';

const AdultProfiles = () => {
  const [adults, setAdults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./data.json');
        setAdults(response.data);
      } catch (error) {
        console.error('Məlumatları çəkmək alınmadı:', error);
      }
    };

    fetchData();
  }, []);

    
      return (
     
<div >
  <h1 className='newest'>Meet With <i> Newest</i> Students</h1>
  <div className='fakejson1'>
    {adults?.map((adult) => (
      <div key={adult.id} className="adult-card">
        <img 
          src={adult.profileImage} 
          alt={`${adult.firstName}`} 
          className="adult-image"
        />
        <div className='fakejson'>
          <h2>{adult.firstName}</h2>
          <p>Yaş: {adult.age}</p>
          <p>Ölkə: {adult.country}</p>
          <p>Plays: {adult.plays.toLocaleString()}</p>
        </div>
      </div>
    ))}
  </div>
</div>
      );
    };

    export default AdultProfiles;