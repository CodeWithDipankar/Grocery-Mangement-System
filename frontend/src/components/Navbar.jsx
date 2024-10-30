import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo-grocery.jpg";
import navbarLi from "./constant";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full backdrop-blur-lg bg-transparent p-2 flex items-center border-b border-slate-200 z-50">
            <div className="flex items-center justify-between w-full px-4">
                <div className="flex items-center">
                    <img className="h-8 w-8 rounded" src={logo} alt="Logo" />
                    <span className="w-full text-sm font-semibold ml-2 text-slate-700">Fresh Grocery</span>
                </div>
                
                {/* Hamburger Menu Button for Mobile */}
                <button
                    className="block lg:hidden text-slate-700 hover:text-slate-900 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Nav Links for Desktop and Mobile */}
                <div className={`lg:flex lg:items-center lg:justify-center lg:static absolute top-full left-0 w-full bg-transparent border-t border-slate-200 lg:border-none transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center p-4 lg:p-0">
                        {navbarLi.map((item, index) => (
                            <li
                                key={index}
                                className="text-sm font-medium cursor-pointer px-3 py-1 transition-all duration-200 ease-in-out rounded-full hover:bg-slate-700 hover:text-white"
                            >
                                <div onClick={() => {
                                    navigate(item.path);
                                    setIsOpen(false);
                                }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {item.Name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
