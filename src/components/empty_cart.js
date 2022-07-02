import React from 'react';
import basketPrice from '../assets/img/basket_price.png'
import emptyCart from '../assets/img/empty-cart.png'
import logo from '../assets/img/logo.png'

function EmptyCart(props) {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>It's most delicious pizza in universe</p>
                        </div>
                    </div>
                    <div className="header__cart">
                        <div className="button button--cart">
                            <span>520 $</span>
                            <div className="button__delimiter"></div>
                            <img src={basketPrice} alt=""/>
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container container--cart">
                    <div className="cart cart--empty">
                        <h2>Basket empty <i>😕</i></h2>
                        <p>
                           Probably you're don't order pizza.<br/>
                            For it, go to next page.
                        </p>
                        <img src={emptyCart} alt="Empty cart"/>
                        <a href="/" className="button button--black">
                            <span>Come back</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmptyCart;