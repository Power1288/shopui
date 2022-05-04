import React from 'react';
import {useDispatch} from "react-redux";
import {filterItem} from "../actions/filter.action";

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="header-left">
                <img src="./profil.jpg" alt=""/>
                <div className="header-left-content">
                    <p>Jason matel</p>
                    <div className="header-left-content-info">
                        <div className="money">
                            <i className="fa-solid fa-sack-dollar"></i>
                            <p>1002<span>$</span></p>
                        </div>
                        <div className="bank">
                            <i className="fa-brands fa-cc-mastercard"></i>
                            <p>1000<span>$</span></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="header-middle">
                <form>
                    <input placeholder="Rechercher" type="search" onChange={(e) => dispatch(filterItem(e.target.value))}/>
                </form>
            </div>
            <div className="header-right">
                <div className="content-cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <h3>acheter</h3>
                </div>
                <div className="price-cart">
                    <p>2000 <span>$</span></p>
                </div>
            </div>
        </div>
    );
};

export default Header;
