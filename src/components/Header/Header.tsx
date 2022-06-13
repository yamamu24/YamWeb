import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../images/Logo/logo.png';

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