import React from 'react';
import { Icon } from 'semantic-ui-react';
import logoImg from '../assets/half-sun-logo.png';

const HeaderNavBar = () => {

    return (
        <header className="blur-header">
            <div className="header-container">
                <div className="logo">
                    <img src={logoImg} alt="Weather logo" style={{ width: '50px', height: '50px' }} />
                </div>
                <div className='header-title'>
                    LOCAL WEATHER
                </div>
                <div>
                    <Icon name='moon' size='big' />
                    <Icon name="sun" size='big' />
                </div>
            </div>
        </header>
    );
};

export default HeaderNavBar;
