import React from 'react';
import logo from './static/logo-grocery.png'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="Grocery-image" />
                </div>
                <div className="nav-links">
                    {/* Use Link instead of a tags
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link> */}

                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                        About
                    </NavLink>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


