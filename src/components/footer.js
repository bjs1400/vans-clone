import React from 'react';

import '../index.css';

import vansLogo from '../images/vans_logo.png';
import instagram from '../images/instagram.png';
import pinterest from '../images/pinterest.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

const footer = () => {
    return (
        <>
            <footer>
                <div className="join-the-club">
                    <h1>JOIN THE CLUB</h1>
                    <div style={{ width: '25%' }}>Sign up for taste recipes, Van's Foods-inspired treats, special offers, and more!</div>
                    <div style={{ display: 'flex', height: 'auto' }}>
                        <input style={{ marginRight: '5px' }} id="email-signup" value="Enter your email address" type="email" />
                        <div className="signup-btn">SIGN UP</div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="footer-logos">
                        <a style={{ marginRight: '2px' }} target="_blank" href="https://www.vansfoods.com"><img className="footer-logo" src={vansLogo} /></a>
                        <a><img className="footer-logo" src={facebook} /></a>
                        <a><img className="footer-logo" src={twitter} /></a>
                        <a><img className="footer-logo" src={pinterest} /></a>
                        <a><img className="footer-logo" src={instagram} /></a>
                    </div>
                    <nav className="footer-nav">
                        <div className="footer-nav-section" style={{ borderRight: '1px solid maroon' }}>
                            <a>OUR PRODUCTS</a>
                            <a>RECIPES</a>
                            <a>ABOUT VAN'S</a>
                            <a>JOIN THE CLUB</a>
                        </div>
                        <div className="footer-nav-section" style={{ borderRight: '1px solid maroon' }} >
                            <a>WHERE TO BUY</a>
                            <a>FAQ</a>
                            <a>CONTACT US</a>
                        </div>
                        <div className="footer-nav-section">
                            <a>TERMS OF USE</a>
                            <a>PRIVACY POLICY</a>
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default footer; 