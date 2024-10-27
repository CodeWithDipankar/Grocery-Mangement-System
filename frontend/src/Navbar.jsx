import { Link } from "react-router-dom";
import logo from "./img/logo-grocery.jpg";
import navbarLi from "./constant";

export default function Navbar() {
    return (
        <div class="fixed top-0 left-0 w-full backdrop-blur-lg bg-transparent p-2 flex items-center border-y">
            <div class="p-1">
                <img class="h-8 w-8 rounded" src={logo} alt="Logo" />
            </div>
            <div class="flex-grow text-center text-slate-700 font-normal font-mono text-base">
                <ul class="flex gap-4 justify-center">
                    {navbarLi.map((item, index) => (
                        <li key={index} class="hover:text-gray-500 cursor-pointer">
                            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
