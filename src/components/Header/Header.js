import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <>
            <nav className="ls-nav">
                <Link to="/"> Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Header;