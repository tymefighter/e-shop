import React from "react";

import './styles/Nav.scss';

const Nav = function() {
    return (
        <nav className="nav">
            <a className="nav__item" href="/home">e-shop</a>
            <a className="nav__item" href="/admin">Admin</a>
            <a className="nav__item" href="/user">User</a>
        </nav>
    );
}

export default Nav;