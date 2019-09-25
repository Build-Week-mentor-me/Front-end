import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';
import '../../App.css';

const NavMenu = () => {
    return (
        <nav className="mainNav">
            <h2 className="logo">Mentor Me</h2>
            <div className="mobileLogInContainer">
                <NavLink className="logIn" to="/login">
                    Log In
                </NavLink>
                <i className="fas fa-sign-in-alt"></i>
            </div>
            <ul className="mainUl">
                <li className="mainLI">
                    <NavLink to="/loginform">Home</NavLink>
                </li>
                <li className="mainLI">
                    <NavLink to="/profiles">Profiles</NavLink>
                </li>
                <li className="mainLI">
                    <NavLink className="logIn" to="/loginform">
                        Log In/Sign Up
                    </NavLink>
                    <i className="fas fa-sign-in-alt"></i>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu