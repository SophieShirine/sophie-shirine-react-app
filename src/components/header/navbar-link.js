import React from 'react';
import './navbar-link.css';

function NavBarLink(data) {
    const text = data.text;
    const path = data.path;
    
    return (
      <div className='navbar-link-container'>
        <a className='navbar-link-text' href={path}> {text} </a>
      </div>
    );
  }

export default NavBarLink;