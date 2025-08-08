import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../constants/images";
import { RxCross1,RxHamburgerMenu } from "react-icons/rx";
import { FaArrowUp } from "react-icons/fa";
import './Navbar.css';


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);  
  const closeMobileMenu= () => setClick(false);
  const location = useLocation(); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]); 

  useEffect(() => {
      // Handle scroll event to detect when to change the navbar background
      const handleScroll = () => {
          if (window.scrollY > 50) { // When scroll is more than 50px, change background
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);




  return (
      <div className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Navbar-container">
        <div className="Navbar-logo">
          <Link to='/'> 
          <img src={images.etudlogo}  alt="Etuds Logo" />
           </Link>
        </div>
            <div className="Navbar-icon-container">
              <div className="Navbar-icon" onClick={handleClick}>
                {click ? <RxCross1 /> : <RxHamburgerMenu />}
               </div>
            </div>
            
            <ul className={click ? 'Navbar-list active' : 'Navbar-list'} >
              <li className="Navbar-list-item">
                <Link to='/' className={`Navbar-item-link ${location.pathname === "/" ? "navbar-active-link" : ""}`} onClick={closeMobileMenu}> Home </Link>
              </li>
              {/* <li className="Navbar-list-item">
                <Link to='/StoryOfJazz' className="Navbar-item-link" onClick={closeMobileMenu} > Jazz </Link>
              </li> */}
              <li className="Navbar-list-item">
                <Link to='/About-us' className={`Navbar-item-link ${location.pathname === "/About-us" ? "navbar-active-link" : ""}`} onClick={closeMobileMenu}> Our Story </Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='/Menu' className={`Navbar-item-link ${location.pathname === "/Menu" ? "navbar-active-link" : ""}`} onClick={closeMobileMenu}> Menu </Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='/location' className={`Navbar-item-link ${location.pathname === "/location" ? "navbar-active-link" : ""}`}>Location</Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='/contact' className={`Navbar-item-link ${location.pathname === "/contact" ? "navbar-active-link" : ""}`}>Contact Us</Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='/Tickets' className="Navbar-item-link" onClick={closeMobileMenu}>Buy Tickets</Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='https://wolt.com/az/aze/baku/restaurant/etud-baku?srsltid=AfmBOopjZ8h88wXlKhC3tKhH3NhWZlpIAa5_EFHmoZBbpkQLu1tonWZy' className="Navbar-item-link" onClick={closeMobileMenu}> Delivery </Link>
              </li>
              {/* <li className="Navbar-list-item mobile">
                <Link to='/location' className={`Navbar-item-link ${location.pathname === "/location" ? "navbar-active-link" : ""}`}>Location</Link>
              </li>
              <li className="Navbar-list-item mobile">
                <Link to='/contact' className={`Navbar-item-link ${location.pathname === "/contact" ? "navbar-active-link" : ""}`}>Contact Us</Link>
             </li> */}
            </ul>
          </div>
          <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  )
}

export default Navbar