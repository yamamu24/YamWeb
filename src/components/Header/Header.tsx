import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from './logo.png';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} className="logoimg" alt="YamWeb"></img>
            </Link>
        </div>
    );
}
export default Header;