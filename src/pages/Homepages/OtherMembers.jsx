import React from 'react';
import photo1 from "../../Images/Photo 1.png";
import photo2 from "../../Images/Photo 2.png";
import photo3 from "../../Images/Photo 3.png";
const OtherMember = () => {
  return (
    <div className="pro-member-containers">
      <div className="headr">
        <h2 >Other<i>Courses</i></h2>
      </div>
      <div className="course-grids">
        <div className="grid-items">
        <img src={photo1} alt="Logo 3"  width={98} height={98}/>
          <span>Digital marketing</span>
          <h3>Google Analytics 101</h3>
          <p>Forget costly site visits and solve any IT problem remotely with the market’s most secure and powerful support platform.</p>
          <button>Learn More  <i className='arrow'>&rarr;</i></button>
        </div>
        <div className="grid-items">
        <img src={photo2} alt="Logo 3"  width={98} height={98}/>
          <span>UX/UI Principles</span>
          <h3>User Experience</h3>
          <p>Forget costly site visits and solve any IT problem remotely with the market’s most secure and powerful support platform.</p>
          <button>Learn More  <i className='arrow'>&rarr;</i></button>
        </div>
        <div className="grid-items">
        <img src={photo3} alt="Logo 3"  width={98} height={98}/>
          <span>WEB DEVELOPMMENT</span>
          <h3>SEO For Developers</h3>
          <p>Forget costly site visits and solve any IT problem remotely with the market’s most secure and powerful support platform.</p>
          <button>Learn More <i className='arrow'>&rarr;</i></button>
        </div>
        <div className="grid-items">
        <img src={photo1} alt="Logo 3"  width={98} height={98}/>
          <span>Digital marketing</span>
          <h3>Google Analytics 101</h3>
          <p>Forget costly site visits and solve any IT problem remotely with the market’s most secure and powerful support platform.</p>
          <button>Learn More <i className='arrow'>&rarr;</i></button>
        </div>
        <div className="grid-items">
        <img src={photo2} alt="Logo 3"  width={98} height={98}/>
          <span>UX/UI Principles</span>
          <h3>User Experience</h3>
          <p>Forget costly site visits and solve any IT problem remotely with the market’s most secure and powerful support platform.</p>
          <button>Learn More <i className='arrow'>&rarr;</i></button>
        </div>
        <div className="grid-items">
        <img src={photo3} alt="Logo 3"  width={98} height={98}/>
          <span>WEB DEVELOPMMENT</span>
          <h3>SEO For Developers</h3>
          <p>Forget costly site visits and solve any IT problem remotely with the market’s most secure and powerful support platform.</p>
          <button>Learn More  <i className='arrow'>&rarr;</i></button>
        </div>
      </div>
    </div>
  );
};

export default OtherMember;