import React from 'react'

export const MainMenu = () => {
    return (
        <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light ">
            <div className="container ">
                <a className="navbar-brand" href="!#">LOGO</a>
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
                    <a className="nav-link " aria-current="page" href="!#">Home</a>
                    <a className="nav-link" href="!#">About</a>
                    <a className="nav-link" href="!#">Services</a>
                    <a className="nav-link " href="!#" tabindex="-1">Contact</a>
                </div>
                </div>
            </div>
        </nav>
    )
}