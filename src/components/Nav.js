import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <div className="nav-item">Home</div>
            </Link>
            <Link to="/about">
                <div className="nav-item">About</div>
            </Link>
            <Link to="/page">
                <div className="nav-item">Page</div>
            </Link>
        </nav>
    );
}

export default Nav;