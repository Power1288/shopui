import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterItem} from "../actions/filter.action";
import $ from 'jquery';
import {clearCart} from "../actions/cart.action";

const Header = () => {

    const dispatch = useDispatch();

    const handleClose = () => {
        let body = document.getElementsByTagName("body")[0];
        body.style.display = "none";

        $.post('http://shop/closeMenu', JSON.stringify({}));

        dispatch(clearCart([]))

        const priceCart = document.getElementById("cart-price");
        priceCart.innerHTML = 0 + "<span>$</span>";


    }
    const money = useSelector(state => state.userReducer.money)
    const bank = useSelector(state => state.userReducer.bank)
    const total = useSelector(state => state.cartReducer.total)
    const handleBuyCart = () => {
        if (money >= total) {

        }
    }

    return (
        <div className="header">
            <div className="header-left">
                <img src="./profil.jpg" alt=""/>
                <div className="header-left-content">
                    <p id="name">Jason matel</p>
                    <div className="header-left-content-info">
                        <div className="money">
                            <i className="fa-solid fa-sack-dollar"></i>
                            <p id="dataMoney">1002<span>$</span></p>
                        </div>
                        <div className="bank">
                            <i className="fa-brands fa-cc-mastercard"></i>
                            <p id="dataBank">1000<span>$</span></p>
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
                    <h3 onClick={handleBuyCart}>acheter</h3>
                </div>
                <div className="price-cart">
                    <p id="cart-price">0 <span>$</span></p>
                </div>
                <i style={{color:"white",cursor:"pointer",fontSize:"1rem"}} className="fa-solid fa-xmark" onClick={() => handleClose()}></i>
            </div>
        </div>
    );
};

export default Header;
