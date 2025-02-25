import React from 'react'
import images from '../../constants/images';
import Navbar from './../Navbar';
import Slider from './../Slider';
import './Location.css';
import Maps from './../maps';

function Location() {
  // Change images to change slider photos
  const imageItems = [
    images.barfiller1, 
    images.barfiller2,
    images.special1,
  ];





  return (
    <div className='Location'>
        <Navbar/>
        <Slider items={imageItems} TextForMiddle='' autoPlayInterval={3000}/>
        <div className="location-info">
          <div className="location-info-text">
            <p className="h__catorze">Hours & Location</p>
            <p className="p__catorze">
             79-81 Macdougal St,<br/>
             New York, NY 10012<br/>
             (212) 982-5275</p>
            <p className="p__catorze">Join us at Caffe Dante on Macdougal Street for indoor & outdoor dining from 12pm weekdays & 10am Saturday and Sunday, serving food until 11 pm Sunday to Wednesday and 12 am Thursdays to Saturdays. Reservations are suggested (through Resy) and walk-ins are welcomed.</p>
            <p className="p__catorze">79-81 Macdougal St, Greenwich Village, New York 10012</p>
            <p className="p__catorze">Dante West Village  offers indoor and outdoor seating daily from 10am to 12pm for breakfast and all day dining until 12am Monday through Sunday. Brunch is served from 10am- 4pm on the weekends and public holidays, with dinner service commencing at 5pm Saturday and Sunday. Reservations for tables are suggested for breakfast, lunch and dinner (through Resy) and walk-ins are welcomed. We invite you to join us on a first come, first serve basis for cocktails at the bar. </p>
            <p className="p__catorze">551 Hudson St ( corner of Perry), West Village, New York 10014</p>
          
          </div>
          <div className="location-info-pic">
            <img src={images.map} alt="pic of etud" />
          </div>
        </div>
        <div className="location-map-container">
        <Maps />
        </div>
    </div>
  )
}

export default Location