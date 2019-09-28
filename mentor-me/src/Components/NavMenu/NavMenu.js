import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';
import '../../App.css';

const NavMenu = () => {
    return (
        <nav className="mainNav">
            <a href='https://build1mentorme.netlify.com/'>
            <h2 className="logo">Mentor Me</h2>
            </a>
            <div className="mobileLogInContainer">
                <NavLink className="logIn" to="/login">
                    Log In
                </NavLink>
                <i className="fas fa-sign-in-alt"></i>
            </div>
            <ul className="mainUl">
                <li className="mainLI">
                    <a href='https://build1mentorme.netlify.com/'>
                    <p className='mainLI'>Home</p>
                    </a>
                    </li>
                <li className="mainLI">
                    <NavLink to="/profiles">Profiles</NavLink>
                </li>
                <li className="mainLI">
                    <NavLink to ="/questions">Questions</NavLink>
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