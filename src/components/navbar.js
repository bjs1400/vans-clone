import React, { useState } from 'react';

import vansLogo from '../images/vans_logo.png';
import instagram from '../images/instagram.png';
import pinterest from '../images/pinterest.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

import '../index.css';

const Navbar = () => {
    const [displayProducts, setDisplayProducts] = useState(false);

    let shownProducts = displayProducts ? (
        <div id="nm-products-after" />
    ) : null;

    const toggleDisplayProducts = () => {
        displayProducts ? setDisplayProducts(false) : setDisplayProducts(true);
    }
    return (
        <div className="nav-container">
            <a><img src={vansLogo} /></a>
            <nav>
                <ul className="navlist-main">
                    <div id="nm-products" onMouseEnter={toggleDisplayProducts} onMouseLeave={toggleDisplayProducts}>
                        <li className="navlink-main">
                            <a>OUR PRODUCTS</a>
                        </li>
                        {shownProducts}
                    </div>


                    <li id="nm-recipes" className="navlink-main"><a>RECIPES</a></li>
                    <li id="nm-about" className="navlink-main"><a>ABOUT VAN'S</a></li>
                    <li id="nm-join" className="navlink-main"><a>JOIN THE CLUB</a></li>
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