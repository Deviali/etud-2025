import React, { useEffect, useState } from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram,FaFacebook,FaSpotify } from "react-icons/fa";

function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to the bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;

      // Consider it "bottom" when scroll position + window height is within 10px of document height
      if (scrollPosition + windowHeight >= documentHeight - 10) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a  href="https://www.facebook.com/etudbaku/" target='_blank' rel="noopener noreferrer" ><FaFacebook/></a>
        <a  href="https://www.instagram.com/etudbaku/" target='_blank' rel="noopener noreferrer" ><FaInstagram /></a>
        <a  href="https://www.spotify.com" target='_blank' rel="noopener noreferrer" ><FaSpotify/></a>

        <a
          href="https://www.linkedin.com/in/ali-pashmineh-3ab0bb1bb/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p__catorze made-by ${isAtBottom ? "visible" : ""}`}
        >
          Made By Ali-Pa
        </a>      
      </div>
      {/* <ul className="footer-list">
        <li className="footer-list-item">
          <Link to='/location' className="Navbar-item-link">Location</Link>
        </li>
        <li className="footer-list-item">
          <Link to='/contact' className="Navbar-item-link">Contact Us</Link>
        </li>
      </ul> */}
    </div>
  )
}

export default Footer