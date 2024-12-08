import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">AutoML</a>
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="#file-upload">File Upload</a>
                </li>
                <li>
                    <a href="#preprocessing">Preprocessing</a>
                </li>
                <li>
                    <a href="#results">Results</a>
                </li>
                <li>
                    <a href="#progress">Progress</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
