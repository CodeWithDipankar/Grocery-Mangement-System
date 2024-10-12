import React, {useState} from 'react';
import logo from './static/logo-grocery.png'; 
import { NavLink } from 'react-router-dom';
import Popup from './Login';

const Navbar = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

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
                    <NavLink to="/login" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={()=> togglePopup()} >
                        Login
                    </NavLink>
                </div>
            </div>

            <Popup isVisible={isPopupVisible} onClose={togglePopup}>
            </Popup>
        </nav>
    );
}

export default Navbar;


