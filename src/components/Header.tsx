import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo_aidc-rm.png";
const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    // { path: '/projects', label: 'Projects' },
    // { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <ul className="info-list">
            <li><span role="img" aria-label="phone">📞</span> 0123456789</li>
            <li><span role="img" aria-label="email">✉️</span> quyetdevil@gmail.com</li>
            <li><span role="img" aria-label="map">📍</span> 36 Chua Lang, Hanoi, Vietnam</li>
          </ul>
          <div className="social">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="main-header-inner">
          <div className="logo-box">
            <Link to="/">
              <img  
                  src={logo}
                  alt="Company Logo"
              />
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;