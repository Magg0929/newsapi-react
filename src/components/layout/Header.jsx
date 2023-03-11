import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'

const Header = () => {
    return (
        <>
        <div className="navbar">
		<h2 className="navbar-brand">News Page</h2>
            <div>
                <nav id="navbar-right">
                    <NavLink className="navbar-links" to={"/search"}>Search</NavLink>
                    <NavLink className="navbar-links" to={"/"}>Home</NavLink>
                </nav>
            </div>

	    </div>

        {/*<header id="header" className="fixed-top header-inner-pages">
            <div className="contain-nav d-flex align-items-center justify-content-between">

                <h1 className="logo">News Page</h1>
                <nav id="navbar" className="navbar">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/search"}>Search</NavLink>
                </nav>
            </div>

        </header>*/}
        </>
    )
}

export default Header