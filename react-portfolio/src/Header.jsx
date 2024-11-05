import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Portfolio</div>
      <nav className="nav-tabs">
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
      </nav>
    </header>
  );
};

export default Header;
