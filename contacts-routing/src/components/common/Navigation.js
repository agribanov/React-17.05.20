import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/about">About</NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
