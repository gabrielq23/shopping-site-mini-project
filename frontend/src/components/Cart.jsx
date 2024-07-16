import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Cart = () => {

    const cart = useSelector(state => state.cart);

    console.log(cart.cartItems);

    return (
        <>
            <div className='cart-container'>
                <h2>Cart</h2>
                {cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>No items in cart</p>
                        <div className="back-to-shop">
                            <Link to="/">
                                <FontAwesomeIcon icon={faArrowLeftLong} />
                                <span>Back to shop</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="names">
                            <h3 className="product-name">Product</h3>
                            <h3 className="price">Price</h3>
                            <h3 className="quant">Quantity</h3>
                            <h3 className="total-price">Total</h3>
                        </div>
                        <div className="cart-items">
                            {cart.cartItems.map(cartItem => (
                                <div className="cart-item" key={cartItem.id}>
                                    <div className="cart-product">
                                        <img src={cartItem.image} alt={cartItem.name} />
                                        <>
                                            <h3>{cartItem.name}</h3>
                                            <p>{cartItem.description}</p>
                                            <button>Remove</button>
                                        </>
                                    </div>
                                    <div className="cart-product-price">${cartItem.price}</div>
                                    <div className="cart-product-quant">
                                        <button>-</button>
                                        <div className="cart-count">{cartItem.cartQuant}</div>
                                        <button>+</button>
                                    </div>
                                    <div className="cart-total-items">
                                        ${cartItem.price * cartItem.cartQuant}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <button className='clear-cart'>Clear Cart</button>
                            <div className="cart-checkout">
                                <div className="cart-total-prices">
                                    <span>Subtotal</span>
                                    <span className='cart-subtotal'>${cart.cartTotalAmount}</span>
                                </div>
                            </div>
                            <button className='checkout'>
                                Checkout
                            </button>
                            <Link to="/">
                                <FontAwesomeIcon icon={faArrowLeftLong} />
                                <span>Back to shop</span>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Cart
