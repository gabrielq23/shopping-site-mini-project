import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTotals } from '../features/cartSlice'

const Navbar = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTotals());
        console.log(cart.cartTotalQuant);
    })

    return (
        <div className='nav-bar'>
            <Link to="/">
                <h2>Shop Name</h2>
            </Link>
            <Link to="/cart">
                <div className='nav-cart'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className='nav-count'>{cart.cartTotalQuant}</span>
                </div>
            </Link>
        </div >
    )
}

export default Navbar
