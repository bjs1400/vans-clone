import React from 'react';

import vansLogo from '../images/vans_logo.png';
import instagram from '../images/instagram.png';
import pinterest from '../images/pinterest.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

// import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../../node_modules/@ortawesome/fontawesome-free/js/all.js';

const Navbar = () => {
    return (
        <div className="nav-container">
            <a><img src={vansLogo} /></a>
            <nav>
                <ul className="navlist-main">
                    <li className="navlink-main"><a>OUR PRODUCTS</a></li>
                    <li className="navlink-main"><a>RECIPES</a></li>
                    <li className="navlink-main"><a>ABOUT VAN'S</a></li>
                    <li className="navlink-main"><a>JOIN THE CLUB</a></li>
                </ul>
            </nav>
            <span className="where-to-buy">
                <i class="fas fa-map-marker-alt"></i>
                WHERE TO BUY
            </span>
            <ul className="social-links-main">
                <li><a><img src={facebook} /></a></li>
                <li><a><img src={twitter} /></a></li>
                <li><a><img src={pinterest} /></a></li>
                <li><a><img src={instagram} /></a></li>
            </ul>
        </div>
    );
}

export default Navbar; 