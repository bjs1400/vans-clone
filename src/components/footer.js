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
                    <div>Sign up for taste recipes, Van's Foods-inspired treats, special offers, and more!</div>
                    <div>
                        <input id="email-signup" value="Enter your email address" type="email" />
                        <button className="signup-btn" />
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
                        <div className="footer-nav-section col-xs-6 col-sm-4">
                            <ul>
                                <li>
                                    <a>OUR PRODUCTS</a>
                                </li>
                                <li>
                                    <a>RECIPES</a>
                                </li>
                                <li>
                                    <a>ABOUT VAN'S</a>
                                </li>
                                <li>
                                    <a>JOIN THE CLUB</a>
                                </li>
                                <li className="hidden-sm">
                                    <a>WHERE TO BUY</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-nav-section col-sm-4 hidden-xs">
                            <ul>
                                <li>
                                    <a>WHERE TO BUY</a>
                                </li>
                                <li>
                                    <a>FAQ</a>
                                </li>
                                <li>
                                    <a>CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-nav-section col-xs-6 col-sm-4">
                            <ul>
                                <li className="visible-xs">
                                    <a>FAQ</a>
                                </li>
                                <li className="visible-xs">
                                    <a>CONTACT US</a>
                                </li>
                                <li>
                                    <a>TERMS OF USE</a>
                                </li>
                                <li>
                                    <a>PRIVACY POLICY</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default footer; 