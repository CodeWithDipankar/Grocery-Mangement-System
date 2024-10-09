import React from 'react';
import logo from './static/logo-grocery.png'; // Make sure the path is correct
import { Link } from 'react-router-dom'; // Import the Link component

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="Grocery-image" />
                </div>
                <div className="nav-links">
                    {/* Use Link instead of a tags */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


