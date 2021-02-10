import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const MainMenu = () => {
    return (
        <nav className="main navbar sticky-top navbar-expand-lg navbar-light bg-light ">
            <div className="container ">
                <a className="navbar-brand " href="!#"><img className="brand-logo" src="./image/DentialClinic_logo.svg" alt=""/></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-link" exact to="/about">About</NavLink>
                    <NavLink className="nav-link" exact to="/services">Services</NavLink>
                    <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
}