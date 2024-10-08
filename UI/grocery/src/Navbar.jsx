import React from 'react';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
    return(
        <nav class = 'navbar'>
            <div class = 'navbar-container'>
                <div class = 'logo'>
                    <img src="..\static\logo-grocery.jpg" alt="Grocery-image" />
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

