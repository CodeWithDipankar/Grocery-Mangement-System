import React, { useState } from "react";
import '../style/navBar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [navItems] = useState([
        { name: 'Home', path: '/' },
        { name: 'Login', path: '/login' },
        { name: 'About', path: '/about' }
    ]);
    const navigate = useNavigate();

    return (
        <div className='navbar'>
                {navItems.map((item, index) => (
                    <div key={index} onClick={() => navigate(item.path)}>
                        {item.name}
                    </div>
                ))}
        </div>
    );
}

export default Navbar;
