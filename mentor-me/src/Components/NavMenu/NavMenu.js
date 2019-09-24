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





    // <nav className="mainNav">
    //     <h2 className="logo">Mentor Me</h2>
    //     <div className="mobileLogInContainer">
    //             <NavLink className="logIn" to="#">
    //                 Log In
    //             </NavLink>
    //             <i className="fas fa-sign-in-alt"></i>
    //     </div>
    //     <ul className="mainUl">
    //         <li className="mainLI">
    //             <a href="#">Home</a>
    //         </li>
    //         <li className="mainLI">
    //             <a href="#">Contact</a>
    //         </li>
    //         <li className="mainLI">
    //             <a href="#">About</a>
    //         </li>
    //         <li className="mainLI">
    //             <a href="#">Pricing</a>
    //         </li>
    //         <li className="mainLI">
    //             <a href="#">Features</a>
    //         </li>
    //         <li className="mainLI">
    //             <a className="logIn"href="#">Log In</a>
    //             <i className="fas fa-sign-in-alt"></i>
    //         </li>
    //     </ul>
    // </nav> 


    // <Menu>
    //         <div className="nav-box-contain">
    //             <div className="nav-first-box">
    //                 <h1 className="navmenu-logo">Mentor Me</h1>
    //             </div>
    //             <div className="nav-second-box">
    //                 <Menu.Item>
    //                     <NavLink to="/">Home</NavLink>
    //                 </Menu.Item>
    //                 <Menu.Item>
    //                     <NavLink to="/login">Login</NavLink>
    //                 </Menu.Item>
    //             </div>
    //         </div>
    //     </Menu>