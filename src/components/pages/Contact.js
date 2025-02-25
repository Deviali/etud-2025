import React from 'react'
import images from '../../constants/images';
import Navbar from './../Navbar';
import Slider from './../Slider';
import './Contact.css'

function Contact() {
  const imageItems = [
    images.barfiller1, // Example image from your constants
    images.barfiller2,
    images.special1,
  ];





  return (
    <div className='Contacts'>
      <Navbar />
      <Slider  items={imageItems} TextForMiddle='Work With us' autoPlayInterval={3000} />
      <div className="contacts-text">
        <p className="h__catorze">WORK WITH US</p>
        <p className="p__raleway">Join the talented family at Dante</p>
        <p className="p__raleway">From our award-winning chefs to the friendly wait staff, the Dante Famiglia is welcoming and diverse - and the one thing we have in common is that we love what we do, and it shows.</p>
        <p className="p__raleway">We’re gearing up for another exciting Spring, and we couldn’t do it without our fabulous people.</p>
        <p className="p__raleway">We’re always on the lookout for the right people to join our team and help us grow, so if you’re passionate and proud of what you do, we would love to hear from you! </p>
        <p className="p__raleway">+123456789</p>
      </div>
    </div>
  )
}

export default Contact