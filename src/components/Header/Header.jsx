import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="md:px-2 bg-white/40 backdrop-blur-md fixed  w-full top-0 shadow relative z-50 ">

            <div className="container relative flex items-center justify-between h-16 mx-auto">
                <button onClick={toggleMenu} className="flex p-4 md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
                <Link
                    to="/"
                    className="flex items-center p-2 absolute left-1/2 md:left-0  md:relative"
                >
                    <div className='text-2xl font-bold tracking-wide text-gray-800 md:text-3xl'>
                        GULF ENTERPRISE
                    </div>
                </Link>
                <ul className="items-center hidden space-x-3 md:flex">
                    <li className="flex">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ${isActive ? "text-blue-700" : null}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/About"
                            className={({ isActive }) => `flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ${isActive ? "text-blue-700" : null}`}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/Products"
                            className={({ isActive }) => `flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ${isActive ? "text-blue-700" : null}`}
                        >
                            Our Products
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/Contact"
                            className={({ isActive }) => `flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ${isActive ? "text-blue-700" : null}`}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                {/* Mobile Navigation Links */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/90 backdrop-blur-md fixed w-full top-16 left-0 shadow">
                        <NavLink
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-4 py-2 text-lg ${isActive ? "text-blue-700" : "text-gray-800"}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/About"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-4 py-2 text-lg ${isActive ? "text-blue-700" : "text-gray-800"}`}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/Products"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-4 py-2 text-lg ${isActive ? "text-blue-700" : "text-gray-800"}`}
                        >
                            Our Products
                        </NavLink>
                        <NavLink
                            to="/Contact"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-4 py-2 text-lg ${isActive ? "text-blue-700" : "text-gray-800"}`}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header