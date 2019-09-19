import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <Menu>
            <div className="nav-box-contain">
                <div className="nav-first-box">
                    <h1 className="navmenu-logo">Mentor Me</h1>
                </div>
                <div className="nav-second-box">
                    <Menu.Item>
                        <NavLink to="/">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/login">Login</NavLink>
                    </Menu.Item>
                </div>
            </div>
        </Menu>
    )
}

export default NavMenu