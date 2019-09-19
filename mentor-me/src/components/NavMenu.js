import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <Menu>
            <NavLink to="/">Home</NavLink>
        </Menu>
    )
}

export default NavMenu