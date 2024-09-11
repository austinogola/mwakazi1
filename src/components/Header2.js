import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiPhone } from "react-icons/fi";
import '../styles/Header.css'

const Header = () => {
    return (
        <header className="header">
            {/* <div className="logo">
                <span className="logo-icon">🧳</span>
                <span className="logo-text">Mwakazi Adventures</span>
            </div> */}
            <div className='allContacts'>
                <div className="social-info">
                    <span><FiFacebook size='20px' /></span>
                    <span><FiInstagram size='20px' /></span>
                    <span><FiTwitter size='20px' /></span>
                </div>
                <div className="phone-info">
                    <span className="phone"><FiPhone size='16px' /> +25423595924</span>
                </div>
                <div className="contact-info">
                    <span className="email">contact@mwakaziadventures.com</span>
                </div>
            </div>

            <div className="auth-place">
                <a href='/login'>Login</a>
                <a href='/signup'>Signup</a>
            </div>

            <style jsx>{`
                
            `}</style>
        </header>
    );
}

export default Header;
