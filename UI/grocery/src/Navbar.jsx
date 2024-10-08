import React from 'react';
import './style/Navbar.css'; // Import the CSS for styling
import logo from './static/logo-grocery.png'; // Make sure the path is correct


const Navbar = () => {
    return(
        <nav class = 'navbar'>
            <div class = 'navbar-container'>
                <div class = 'logo'>
                    <img src={logo} alt="Grocery-image" />
                </div>
                <div class = 'nav-links'>
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                    <a href="/Login">Login</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

