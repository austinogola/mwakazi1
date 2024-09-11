// src/Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css'
import Logo from '../images/logoW.jpg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleOpen=()=>{
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  }
  return (
    <nav class="navbar">
        <div class="logo">   

            <a href="#">Your Logo</a>
        </div>
        <ul class="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="hamburger-menu" onClick={toggleOpen}>
            <span class="menu-icon"></span>
        </div>
    </nav>
  );
};

export default Navbar;