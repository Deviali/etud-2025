import React from 'react'
import Navbar from './../Navbar';
import './Location.css';
import Maps from './../maps';

function Location() {
  





  return (
    <div className='Location'>
        <Navbar/>
        <div className="location-info">
          <div className="location-info-text">
            <p className="h__catorze">Hours & Location</p>
            <p className="p__catorze contacts-highlight">
            Address:<br/>
             İslam Səfərli 16, Baku, Azerbaijan,<br/>
             Working Hours:<br/>
              17:00 – 01:00 (Sunday to Thursday)<br/>
              18:00 – 02:00 (Friday & Saturday)<br/></p>
            <p className="p__catorze">ETUD is located in the heart of Baku — tucked just enough out of sight to feel like a hidden spot.</p>
            <p className="p__catorze">Live music usually starts after 21:00</p>
            <p className="p__catorze">The entrance is half below street level. Look for the black door, the quiet steps, and the sound beneath. </p>
         
          </div>
          <div className="location-info-pic">
          <Maps />
          </div>
        </div>
        {/* <div className="location-map-container">
        <Maps />
        </div> */}
    </div>
  )
}

export default Location