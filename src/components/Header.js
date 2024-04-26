// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import About from './About'
export const Header = () => {
  return (
    <div>
      <header className="main-header">
        <div className="logo">Logo</div>
        
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/acerca">Servicios</Link></li>
            <li><Link to="/about" component={About}>Acerca de</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            
          </ul>
        </nav>
      </header>
    </div>
  );
};