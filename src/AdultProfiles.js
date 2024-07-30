
import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
  <h1 className='newest'>Meet With <i> Newest</i>  Students</h1>
          <div className='fakejson1'>
        
            {adults.map((adult) => (
              <div key={adult.id} style={{ margin: '10px', padding: '10px', borderRadius: '5px' }}>
                <img src={adult.profileImage} alt="${adult.firstName} " style={{ width: '292px', height: '464px',borderRadius:"25px" }} />
               <div className='fakejson'> <h2>{adult.firstName} </h2>
                <p>Yaş: {adult.age} </p>
                <p>Ölkə: {adult.country}</p>
                <p>Plays: {adult.plays.toLocaleString()}</p></div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default AdultProfiles;