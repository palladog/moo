import React from 'react';
import './nav.css';
import { Link } from "react-router-dom";

export default () => {
    return(
          <nav>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/home">All</Link>
              </li>
              <li className="menu-item">
                <Link to="/watched">Watched</Link>
              </li>
              <li className="menu-item">
                <Link to="/not-watched">Not Watched</Link>
              </li>
            </ul>
          </nav>      
    )
};