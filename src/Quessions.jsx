import React from 'react'

function Quessions() {
  return (
    <div className='container2'> 
<div className="leftquession">
    <h2>Frequently Asked</h2>
    <span>Questions</span>
    <p>Welcome to our Frequently Asked Questions section, where we've compiled essential information to
         address your inquiries and provide clarity about our offerings. Whether you're curious about course enrollment, payment options, 
        technical support, or navigating our platform, you'll find comprehensive answers to your most common queries.</p>
</div>

<div className="rightquession">
   <ul>
   <li  className='investopiya'><i>+</i><span>Is the Investopia free to use?</span></li>
    <li className='investopiya'><i>-</i><span className='friendly'><h3>What is Investopia?</h3><p>Investopia is a user-friendly mobile application that
    helps you manage your personal finances. It allows you 
    to track your expenses, set budgets, monitor investments, and stay on top of your financial goals.</p></span> </li>
    <li  className='investopiya'><i>+</i><span>How do I get started with Investopia?</span></li>
    <li  className='investopiya'><i>+</i><span>Is my financial data secure in the app?</span></li>
    <li  className='investopiya'><i>+</i><span>Can I set a budget using the Finance App?</span></li>
   </ul>
</div>
    </div>
  )
}

export default Quessions