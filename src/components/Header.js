import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/textarea'>Textarea</NavLink>
            <NavLink to='/select'>Select</NavLink>
            <NavLink to='/input'>Input</NavLink>
        </div>
    );
}

export default Header;