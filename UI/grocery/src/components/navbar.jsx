import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../static/logo-grocery.png'; // Update the path to your logo image
import { BsBell, BsMoon, BsSun, BsPerson } from "react-icons/bs"; // Import icons from react-icons

function Navbar() {
    const [navItems] = useState([
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
        { name: "About", path: "/about" },
        { name: "Categories", path: "/categories" }, // Single Categories page
        { name: "Search", path: "/categories" },
    ]);
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('bg-dark', !isDarkMode);
        document.body.classList.toggle('text-white', !isDarkMode);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`} style={{ backgroundColor: isDarkMode ? '#343a40' : '#e9ecef' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Brand Logo" style={{ width: "40px", marginRight: "8px" }} />
                    Grocery Shop
                </a>
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={() => navigate(item.path)}
                                    aria-label={`Navigate to ${item.name}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    <div className="vr mx-1"></div> 
                    <li className="nav-item">
                            <button className="nav-link" aria-label="Notifications">
                                <BsBell />
                                {/* Uncomment the next line if you want to display notification count */}
                                <span className="badge bg-danger top-0">3</span>
                            </button>
                        </li>
                    <div className="vr mx-1"></div> 

                    <button className="nav-link" onClick={toggleDarkMode} aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                        {isDarkMode ? <BsSun /> : <BsMoon />}
                    </button>
                    <div className="vr mx-1"></div> 

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="profileDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                aria-label="Profile menu"
                            >
                                <BsPerson />
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                                <li><a className="dropdown-item" href="#">My Account</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
