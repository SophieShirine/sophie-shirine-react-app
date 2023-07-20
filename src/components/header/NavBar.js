import './NavBar.css';
import React, { useState } from "react";

function NavBar() {
    return (
        <>
            <ul id='nav-list'>
                <li><a href="http://localhost:3000/sophie-shirine-react-app/"> Home </a></li>
                <li><a href="http://localhost:3000/sophie-shirine-react-app/projects"> Projects</a></li>
            </ul>
        </>
    );
}

export default NavBar;