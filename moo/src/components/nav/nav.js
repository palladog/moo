import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom'

export default () => {
    return(
          <nav>
            <ul className="menu">
              <li className="menu-item">
                <NavLink to="/" activeClassName="active"><span className="title">Home</span></NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/watched" activeClassName="active"><span className="title">Watched</span></NavLink>
              </li>
              
              <li className="menu-item">
                <NavLink to="/not-watched" activeClassName="active"><span className="title">Not Watched</span></NavLink>
              </li>
            </ul>
          </nav>      
    )
};