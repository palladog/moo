import React from 'react';
import './header.css';
import logo from '../../logo.png'

export default () => {
return(
    <div>
        <header>
            <img src={logo} alt="Studio Ghibli logo" id="header-image"/>
            <h1 className="hidden">Ghibli Movie Marathon App</h1>
        </header>
    </div>
    )
};