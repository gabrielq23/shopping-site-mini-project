import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeFromCart, decreaseCartQuantity, increaseCartQuantity, clearCartItems, getAllTotals } from '../features/cartSlice';


const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const handleDecreaseQuantity = (cartItem) => {
        dispatch(decreaseCartQuantity(cartItem));
    }

    const handleIncreaseCartQuant = (cartItem) => {
        dispatch(increaseCartQuantity(cartItem));
    }

    const handleClearCart = (cart) => {
        dispatch(clearCartItems(cart));
    }

    useEffect(() => {
        dispatch(getAllTotals());
        console.log(cart.cartTotalAmt);
    }, [cart, dispatch])

    return (
        <>
            <div className='cart-container'>
                <h2>Cart</h2>
                {cart.cartItems.length <= 0 ? (
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
                                        <div className='card-product-details'>
                                            <h3>{cartItem.name}</h3>
                                            <p>{cartItem.description}</p>
                                            <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart-product-price">${cartItem.price}</div>
                                    <div className="cart-product-quant">
                                        <button onClick={() => handleDecreaseQuantity(cartItem)}>-</button>
                                        <div className="cart-count">{cartItem.cartQuant}</div>
                                        <button onClick={() => handleIncreaseCartQuant(cartItem)}>+</button>
                                    </div>
                                    <div className="cart-total-price">
                                        ${cartItem.price * cartItem.cartQuant}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <button onClick={() => handleClearCart(cart)} className='clear-cart'>Clear Cart</button>
                            <div className="cart-right">
                                <div className="cart-checkout">
                                    <div className="cart-total-prices">
                                        <span>Subtotal</span>
                                        <span className='cart-subtotal'>${cart.cartTotalAmt}</span>
                                    </div>
                                </div>
                                <button className='checkout'>
                                    Checkout
                                </button>
                                <div className="continue-shop">
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faArrowLeftLong} />
                                        <span>Back to shop</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Cart
