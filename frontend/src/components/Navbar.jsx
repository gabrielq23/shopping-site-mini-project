import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link to="/">
                <h2>Shop Name</h2>
            </Link>
            <Link to="/cart">
                <div className='nav-cart'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className='nav-count'>3</span>
                </div>
            </Link>
        </div >
    )
}

export default Navbar
