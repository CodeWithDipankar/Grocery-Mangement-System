import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../static/logo-grocery.png'; 
import { BsBell, BsSun, BsPerson } from "react-icons/bs";


function Navbar() {
    const [navItems] = useState([
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
        { name: "About", path: "/about" },
        { name: "Categories", path: "/categories" },
        { name: "Search", path: "/categories" },
    ]);

    const [theme, setTheme] = useState('dark'); // Default to 'dark'
    const navigate = useNavigate();

    const applyTheme = (selectedTheme) => {
        setTheme(selectedTheme);
        document.body.classList.remove('bg-dark', 'bg-light', 'text-white', 'text-dark');

        if (selectedTheme === 'dark') {
            document.body.classList.add('bg-dark', 'text-white');
        } else if (selectedTheme === 'light') {
            document.body.classList.add('bg-light', 'text-dark');
        } else if (selectedTheme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark ? 'dark' : 'light');
        }
    };

    const handleThemeChange = (selectedTheme) => {
        if (selectedTheme === 'auto') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            applyTheme(mediaQuery.matches ? 'dark' : 'light');

            mediaQuery.addEventListener('change', e => {
                applyTheme(e.matches ? 'dark' : 'light');
            });
        } else {
            applyTheme(selectedTheme);
        }
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const initialTheme = mediaQuery.matches ? 'dark' : 'light';
        applyTheme(initialTheme);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`} style={{ backgroundColor: theme === 'dark' ? '#495057' : '#e9ecef' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Brand Logo" style={{ width: "35px", marginRight: "8px" }} />
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
                        <div className="vr mx-1 vr-bar" ></div> 
                        <li className="nav-item">
                            <button className="nav-link" aria-label="Notifications">
                                <BsBell />
                                <span className="badge bg-danger">3</span>
                            </button>
                        </li>
                        <div className="vr mx-1 vr-bar" ></div> 
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="themeDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                aria-label="Theme menu"
                            >
                                <BsSun />
                            </a>
                            <ul className={`dropdown-menu dropdown-menu-end ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-light text-dark'}`} aria-labelledby="themeDropdown">
                                <li><a className="dropdown-item" onClick={() => handleThemeChange('dark')}>Dark</a></li>
                                <li><a className="dropdown-item" onClick={() => handleThemeChange('light')}>Light</a></li>
                                <li><a className="dropdown-item" onClick={() => handleThemeChange('auto')}>System Default</a></li>
                            </ul>
                        </li>
                        <div className="vr mx-1 vr-bar" ></div> 
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
                            <ul className={`dropdown-menu dropdown-menu-end ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-light text-dark'}`} aria-labelledby="profileDropdown">
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
