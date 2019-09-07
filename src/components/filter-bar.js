import React, { useState } from 'react';

const FilterBar = (props) => {

    const [shownProducts, setShownProducts] = useState(false);
    const [shownDR, setShownDR] = useState(false);
    const [shownOccasion, setShownOccasion] = useState(false);

    const toggleFilterProducts = () => {
        if (shownProducts === true) {
            setShownProducts(false);
        } else {
            setShownProducts(true);
        }
    }

    const toggleFilterDR = () => {
        if (shownDR === true) {
            setShownDR(false);
        } else {
            setShownDR(true);
        }
    }

    const toggleFilterOccasion = () => {
        if (shownOccasion === true) {
            setShownOccasion(false);
        } else {
            setShownOccasion(true);
        }
    }

    let productsOptions = shownProducts ? (
        <div className="filter-options">
            <div className="label-option">
                <label className="option-heading" htmlFor="waffles">Waffles</label>
                <input className="cb-option" type="checkbox" id="waffles" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="pancakes">Pancakes</label>
                <input className="cb-option" type="checkbox" id="pancakes" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="french-toast-sticks">French Toast Sticks</label>
                <input className="cb-option" type="checkbox" id="french-toast-sticks" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="cereals">Cereals</label>
                <input className="cb-option" type="checkbox" id="cereals" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="crackers">Crackers</label>
                <input className="cb-option" type="checkbox" id="crackers" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="snack-bars">Snack Bars</label>
                <input className="cb-option" type="checkbox" id="snack-bars" />
            </div>
            <div className="label-option">
                <label className="option-heading" for="granola">Granola</label>
                <input className="cb-option" type="checkbox" id="granola" />
            </div>
            <div className="done-btn">DONE</div>
        </div>
    ) : null;

    let restrictionsOptions = shownDR ? ( /* THIS PART NEEDS TO BE FIXED LATER! */
        <div className="filter-options">
            <div className="label-option">
                <label className="option-heading" htmlFor="waffles">Gluten Free</label>
                <input className="cb-option" type="checkbox" id="waffles" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="pancakes">Dairy Free</label>
                <input className="cb-option" type="checkbox" id="pancakes" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="french-toast-sticks">Corn Free</label>
                <input className="cb-option" type="checkbox" id="french-toast-sticks" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="cereals">Nut Free</label>
                <input className="cb-option" type="checkbox" id="cereals" />
            </div>
            <div className="done-btn">DONE</div>
        </div>
    ) : null;

    let occasionOptions = shownOccasion ? (
        <div className="filter-options">
            <div className="label-option">
                <label className="option-heading" htmlFor="waffles">Breakfast</label>
                <input className="cb-option" type="checkbox" id="waffles" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="pancakes">Lunch</label>
                <input className="cb-option" type="checkbox" id="pancakes" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="french-toast-sticks">Dinner</label>
                <input className="cb-option" type="checkbox" id="french-toast-sticks" />
            </div>
            <div className="label-option">
                <label className="option-heading" htmlFor="cereals">Snack Time</label>
                <input className="cb-option" type="checkbox" id="cereals" />
            </div>
            <div className="done-btn">DONE</div>
        </div>
    ) : null;


    return (
        <div className="filter-bar">
            <span><h4>{props.heading}</h4></span>
            <div className="dropdown-box">
                <div className="label-bar" onClick={toggleFilterProducts}>
                    <span className="label">PRODUCTS</span>
                    <i id="dropdown-btn" className="fas fa-caret-down"></i>
                </div>
                {productsOptions}
            </div>
            <div className="dropdown-box">
                <div className="label-bar" onClick={toggleFilterDR}>
                    <span className="label">DIETARY RESTRICTIONS</span>
                    <i id="dropdown-btn" className="fas fa-caret-down"></i>
                </div>
                {restrictionsOptions}
            </div>
            <div className="dropdown-box">
                <div className="label-bar" onClick={toggleFilterOccasion}>
                    <span className="label">OCCASION</span>
                    <i id="dropdown-btn" className="fas fa-caret-down"></i>
                </div>
                {occasionOptions}
            </div>

        </div>
    );
}

export default FilterBar; 