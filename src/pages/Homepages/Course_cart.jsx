import React from 'react';
import group70 from "../../Images/Group 70.png";
import group71 from "../../Images/Group 71.png";
import group72 from "../../Images/Group 72.png";
import group73 from "../../Images/Group 73.png";

const Course_cart = () => {
  return (
    <div className="courses-container">
      <div className="grid">
        <div className="header">
          <h2>What We Covered In The</h2>
          <p>Courses</p>
          <button>See All Courses &rarr;</button>
        </div>
        <div className="grid-item email-marketing">
          <span></span>
        <img src={group73} alt="Logo 1" width={70} height={70} />
          <h3>Email Marketing</h3>
          <p>Embrace the flexibility to stay industrious and effective no matter where you are, harnessing the benefits of unrestricted access to fuel your productivity journey.</p>
        </div>
        <div className="grid-item seo">
        <span></span>
        <img src={group71} alt="Logo 2"  width={70} height={70} />
          <h3>SEO</h3>
          <p>Achieve high levels of productivity no matter where you find yourself, thanks to freedom of unrestricted access. With unrestricted access, you can harness the power of productive tools.</p>
        </div>

        <div className="grid-item funnel-optimization">
        <span></span>
        <img src={group72} alt="Logo 3"  width={70} height={70}/>
          <h3>Funnel Optimization</h3>
          <p>Embrace the flexibility to stay industrious and effective no matter where you are, harnessing the benefits of unrestricted access to fuel your productivity journey.</p>
        </div>
        <div className="grid-item paid-advertising">
        <span></span>
        <img src={group70} alt="Logo 4" width={70} height={70} />
          <h3>Paid Advertising</h3>
          <p>Achieve high levels of productivity no matter where you find yourself, thanks to freedom of unrestricted access. With unrestricted access, you can harness the power of productive tools.</p>
        </div>
      </div>
    </div>
  );
};

export default Course_cart;