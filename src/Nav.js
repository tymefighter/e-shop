import React from "react";

import './styles/Nav.scss';

const Nav = function({setRouteName}) {
    return (
        <nav className="nav">
            <button 
                className="nav__item" 
                onClick={() => setRouteName("home")}>
                e-shop
            </button>
            <button 
                className="nav__item" 
                onClick={() => setRouteName("admin")}>
                Admin
            </button>
            <button 
                className="nav__item" 
                onClick={() => setRouteName("user")}>
                User
            </button>
        </nav>
    );
}

export default Nav;