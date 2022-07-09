import React from 'react';
import logo from '../assets/img/logo.png'
import BasketPrice from '../assets/img/basket_price.png'
import {Link} from "react-router-dom";
import Search from "./search";

function Header() {

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>It's most delicious pizza in universe</p>
                        </div>
                    </div>
                </Link>
                <Search />
               <Link to="/cart">
                   <div className="header__cart">
                       <a href="../public/cart.html" className="button button--cart">
                           <span>520 ₽</span>
                           <div className="button__delimiter"></div>
                           <img src={BasketPrice} alt=""/>
                           <span>3</span>
                       </a>
                   </div>
               </Link>
            </div>
        </div>
    );
}

export default Header;