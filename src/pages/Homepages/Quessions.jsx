import React, { useState } from 'react';


function Quessions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='container2'>
      <div className="leftquession">
        <h2>Frequently Asked</h2>
        <span>Questions</span>
        <p>
          Welcome to our Frequently Asked Questions section, where we've compiled essential information to
          address your inquiries and provide clarity about our offerings. Whether you're curious about course enrollment, payment options,
          technical support, or navigating our platform, you'll find comprehensive answers to your most common queries.
        </p>
      </div>

      <div className="rightquession">
        <ul>
          <li className='investopiya' onClick={() => toggleAnswer(0)}>
           <div className='activeinvestopiya'> <i>{activeIndex === 0 ? '-' : '+'}</i>
           <span>Is the Investopia free to use?</span></div>
            {activeIndex === 0 && (
              <div className='answer'>
                <p>Yes, Investopia offers a free plan for all users, with additional premium features available for those who choose to upgrade.</p>
              </div>
            )}
          </li>

          <li className='investopiya' onClick={() => toggleAnswer(1)}>
           <div className="activeinvestopiya">
           <i>{activeIndex === 1 ? '-' : '+'}</i>
            <span className='friendly'>
              <h3>What is Investopia?</h3>  </span>
           </div>
              {activeIndex === 1 && (
<div className="answer">
<p>Investopia is a user-friendly mobile application that helps you manage your personal finances. It allows you to track your expenses, set budgets, monitor investments, and stay on top of your financial goals.</p>

</div>              )}
          
          </li>

          <li className='investopiya' onClick={() => toggleAnswer(2)}>
           <div className="activeinvestopiya"> <i>{activeIndex === 2 ? '-' : '+'}</i>
           <span>How do I get started with Investopia?</span></div>
            {activeIndex === 2 && (
              <div className='answer'>
                <p>To get started with Investopia, simply download the app, create an account, and follow the onboarding process to set up your financial profile.</p>
              </div>
            )}
          </li>

          <li className='investopiya' onClick={() => toggleAnswer(3)}>
           <div className="activeinvestopiya"> <i>{activeIndex === 3 ? '-' : '+'}</i>
           <span>Is my financial data secure in the app?</span></div>
            {activeIndex === 3 && (
              <div className='answer'>
                <p>Investopia prioritizes your data security, employing advanced encryption and privacy measures to protect your financial information.</p>
              </div>
            )}
          </li>

          <li className='investopiya' onClick={() => toggleAnswer(4)}>
           <div className="activeinvestopiya"> <i>{activeIndex === 4 ? '-' : '+'}</i>
           <span>Can I set a budget using the Finance App?</span></div>
            {activeIndex === 4 && (
              <div className='answer'>
                <p>Yes, Investopia allows you to set and track budgets, helping you stay within your financial limits and reach your savings goals.</p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quessions;