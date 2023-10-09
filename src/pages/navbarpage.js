// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

import "../App.css"; // Import your CSS file

function handleLogout() {
    localStorage.removeItem("username");
}

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/topics">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ranking">Ranking</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
