import React, { useState, useEffect } from 'react';
import '../styles/ResponsiveNavbar.css'
import Logo from '../images/logoW.jpg'

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <img src={Logo}/>
          </a>
        </div>
        {isMobile ? (
          <button className="hamburger" onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        ) : (
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/trips">Trips</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        )}
      </div>
      {isMobile && (
        <ul className={`mobile-nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/destinations" onClick={toggleMenu}>Destinations</a></li>
          <li><a href="/trips" onClick={toggleMenu}>Trips</a></li>
          <li><a href="/activities" onClick={toggleMenu}>Activities</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;