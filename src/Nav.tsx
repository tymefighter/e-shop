import React from "react";

import './styles/Nav.scss';

export interface NavPropsType {
    setRouteName: (routeName: string) => void;
};

const Nav = function({setRouteName}: NavPropsType) {
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