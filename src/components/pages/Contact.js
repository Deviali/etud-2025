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
        <p className="h__catorze">Get in Touch</p>
        <p className="p__raleway">For reservations, private events, collaborations, or general questions —</p>
        <p className="p__raleway">Feel free to reach out.</p>
        <p className="p__raleway">Phone: +994 50 766 66 90 (17:00 – 21:00)</p>
        <p className="p__raleway">Email: mail@etudbaku.com</p>
        <p className="p__raleway">Events: events@etudbaku.com (for bookings, collaborations, or if you'd like us to be part of your event)</p>
        <p className="p__raleway">Telegram: t.me/etudbaku</p>
        <p className="p__raleway">We typically respond to emails within one day.</p>

      </div>
    </div>
  )
}

export default Contact