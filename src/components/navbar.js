import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-front">
                    <div className="brand">
                        <span className="logo-text">Mi Portafolio</span>
                    </div>

                    <div id="toggle-nav" className="toggle-nav"></div>
                </div>
            </nav>
        )
    }
}

export default Navbar;