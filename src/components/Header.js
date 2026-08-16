import React from 'react';
import logoImg from '../assets/half-sun-logo.png';

const Header = () => {

    return (
        <header className="blur-header">
            <div className="header-container">
                <div className="logo">
                    <img src={logoImg} alt="Weather logo" style={{width: '50px', height: '50px'}} />
                </div>
            </div>
        </header>
    );
};

export default Header;
