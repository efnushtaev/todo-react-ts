import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC = () => {
  return <nav>
    <div className="nav-wrapper teal darken-3 px1">
      <a href='/index' className="brand-logo">React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to='/'>Список дел</NavLink></li>
        <li><NavLink to='/about'>Инофрмация</NavLink></li>
      </ul>
    </div>
  </nav>
}