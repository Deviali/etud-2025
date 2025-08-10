import React from 'react'
import Navbar from './../Navbar';
import './Contact.css'

function Contact() {
  
  return (
    <div className='Contacts'>
      <Navbar />
      <div className="contacts-text">
        {/* <p className="h__catorze">Get in Touch</p> */}
        <p className="p__raleway">For reservations, private events, collaborations, or general questions </p>
        <p className="p__raleway">Feel free to reach out.</p>
        <p className="p__raleway contacts-highlight">Phone: +994 50 766 66 90 (17:00 – 21:00)</p>
        <p className="p__raleway contacts-highlight">Email: mail@etudbaku.com</p>
        <p className="p__raleway contacts-highlight">Events: events@etudbaku.com (for bookings, collaborations, or if you'd like us to be part of your event)</p>
        <p className="p__raleway contacts-highlight">Telegram: t.me/etudbaku</p>
        <p className="p__raleway">We typically respond to emails within one day.</p>

      </div>
    </div>
  )
}

export default Contact