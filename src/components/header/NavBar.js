import './navbar.css';
import React, { useState } from "react";
import data from '../../../package.json';
import NavBarLink from './navbar-link';

function NavBar() {
    const homePath = window.location.origin +'/' + data.name + '/';
    const projectPath = window.location.origin +'/'+ data.name + '/projects';

    return (
        <div className='navbar-container'>
            <div className='navbar-links-left-container'>
                <NavBarLink text='About' path={homePath} />
                <NavBarLink text='Projects' path={projectPath} />
            </div>
            <div className='navbar-title-container'>
                <p className='navbar-title'>Sophie Shirine</p>
            </div>
            <div className='navbar-links-right-container'>
                <NavBarLink text='About' path={homePath} />
                <NavBarLink text='Projects' path={projectPath} />
            </div>
        </div>
    );
}

export default NavBar;