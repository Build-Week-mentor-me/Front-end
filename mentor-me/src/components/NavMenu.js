import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <Menu>
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default NavMenu