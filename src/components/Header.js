import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';

export const Header = () => {
  return (
    <header className="main-header">
      <img src="https://image.freepik.com/vector-gratis/programador-hombre-joven-que-trabaja-computadora-codigo-pantalla-concepto-vector-programacion-estudiantes_53562-4999.jpg" className="logo" width="40px" height="40"/>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services" component={Services}>Servicios</Link></li>
          <li><Link to="/about" component={About}>Acerca de</Link></li>
          <li><Link to="/contact" component={Contact}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};
