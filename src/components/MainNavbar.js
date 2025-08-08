import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
import './MainNavbar.css';
import { RxCross1,RxHamburgerMenu } from "react-icons/rx";
import { FaArrowUp } from "react-icons/fa";



function MainNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);  
    const closeMobileMenu= () => setClick(false);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
      window.scrollTo(0, 0); 
    }); 

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
            <div className="Navbar-icon-container">
              <div className="Navbar-icon" onClick={handleClick}>
                {click ? <RxCross1 /> : <RxHamburgerMenu />}
               </div>
            </div>
            
            <ul className={click ? 'Navbar-list active' : 'Navbar-list'} >
              <li className="Navbar-list-item">
                <Link to='/' className="Navbar-item-link" onClick={closeMobileMenu}> Home </Link>
              </li>
              {/* <li className="Navbar-list-item">
                <Link to='/StoryOfJazz' className="Navbar-item-link" onClick={closeMobileMenu} > Jazz </Link>
              </li> */}
              <li className="Navbar-list-item">
                <Link to='/About-us' className="Navbar-item-link" onClick={closeMobileMenu}> Our Story </Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='/Menu' className="Navbar-item-link" onClick={closeMobileMenu}> Menu </Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='/location' className="Navbar-item-link" onClick={closeMobileMenu}>Location</Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='/contact' className="Navbar-item-link" onClick={closeMobileMenu}>Contact Us</Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='/Tickets' className="Navbar-item-link" onClick={closeMobileMenu}>Buy Tickets</Link>
              </li>
              <li className="Navbar-list-item">
                <Link to='https://wolt.com/' className="Navbar-item-link" onClick={closeMobileMenu}> Delivery </Link>
              </li>
              {/* <li className="Navbar-list-item mobile">
                <Link to='/location' className="Navbar-item-link">Location</Link>
              </li>
              <li className="Navbar-list-item mobile">
                <Link to='/contact' className="Navbar-item-link">Contact Us</Link>
             </li> */}
            </ul>
          </div>
          <button className="scroll-to-top scroll-to-top-2" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
        </div>
      )
}

export default MainNavbar