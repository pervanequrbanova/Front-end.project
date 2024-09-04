import React from 'react';
import image1 from './Images/Group 75.png';
import image2 from './Images/Group 76.png';
import image3 from './Images/Group 77.png';
import image4 from './Images/Group 78.png';


const adults = [
  {
    id: 2,
    firstName: 'Sofia Knight',
    country: 'Paris, France',
    plays: '1.2M Plays',
    profileImage: image4,
   
  },
  {
    id: 4,
    firstName: 'Milan Turner',
    country: 'Sydney, Australia',
    plays: '1.1M Plays',
    profileImage: image3,
  },
  {
    id: 3,
    firstName: 'Cairo Sanchez',
    country: 'Sydney, Australia',
    plays: '1.1M Plays',
    profileImage: image1
  },
  {
    id: 1,
    firstName: 'Amelia Smith',
    country: 'Amelia Smith',
    plays: '1.2M Plays',
    profileImage: image2,
  }
];

const AdultProfiles = () => {
  return (
    <div>
      <h1 className='newest'>Meet With <i>Newest</i> Students</h1>
      <div className='fakejson1'>
        {adults.map((adult, index) => (
          <div 
            key={adult.id} 
            className={`adult-card ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <img 
              src={adult.profileImage} 
              alt={adult.firstName} 
              className="adult-image"
            />
            <div className='overlay'>
            <p> {adult.plays.toLocaleString()}</p>

              <h3>{adult.firstName}</h3>
              <p> {adult.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdultProfiles;