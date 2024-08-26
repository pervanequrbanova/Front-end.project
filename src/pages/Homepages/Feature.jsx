import React from 'react'


    const Feature =()=>{
  return (
    <div className='feature'>
         <div className="feature1">
          <h2><span>Pay Once, Use </span><i className='forever'>Forever</i></h2>
          <p> Elevate every moment and make a statement of refinement with our premium line. Your satisfaction is not just our goal; it's our commitment. Choose premium, because you deserve nothing but the extraordinary."</p>
         </div>
    <div className='containershp'>
      <ul className='menbership'>
        <li>
          <span >Free membership</span>
        <span className='usd'>   <h2>$ 0.00 USD</h2> <i>/month</i></span>
          <h3>Features</h3>
         <p> <input type="checkbox" className='custom'/><span>Access & Control Computers Remotely</span></p>
         <p> <input type="checkbox" className='custom'/><span>Secure Unattended Access</span></p>
         <p> <input type="checkbox" className='custom'/><span>File Sharing</span></p>
         <p> <input type="checkbox" className='custom'/><span>Tech support via phone</span></p>
         <button className='reg'>Register Now <i className='arrow'>&rarr;</i></button>
        </li>
        <li>
          <span>Free membership</span>
      <span  className='usd'>  <h2>$ 0.00 USD</h2> <i>/month</i></span>
          <h3>Features</h3>
         <p> <input type="checkbox" className='custom'/><span>Access & Control Computers Remotely</span></p>
         <p> <input type="checkbox" className='custom'/><span>Secure Unattended Access</span></p>
         <p> <input type="checkbox" className='custom'/><span>File Sharing</span></p>
         <p> <input type="checkbox" className='custom'/><span>Tech support via phone</span></p>
         <button className='reg2'>Register Now <i className='arrow'>&rarr;</i></button>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Feature