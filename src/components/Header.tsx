import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo_aidc-rm.png";
const Header: React.FC = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

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
          <div className="header-contact-row">
            <span className="header-contact-item"><i className="fas fa-phone-flip" style={{marginRight: '6px'}}></i> 0123456789</span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item"><i className="fas fa-envelope" style={{marginRight: '6px'}}></i> quyetdevil@gmail.com</span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item"><i className="fas fa-map" style={{marginRight: '6px'}}></i> 19n7b KĐT Trung Hòa Nhân Chính, Thanh Xuân, Hà Nội</span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" style={{marginLeft: '8px'}}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" style={{marginLeft: '8px'}}>
                <i className="fab fa-linkedin"></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
          <div className="logo-box">
            <Link to="/">
              <img  
                  src={logo}
                  alt="Company Logo"
              />
            </Link>
          </div>
          <div className='main-nav-block'>
            <nav className="main-nav">
              <ul>
                {navItems.map((item) => (
                  <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="language-switcher">
              <div className="language-dropdown">
                {/** Language Switcher with VI as default, EN as dropdown */}
                <button className="dropdown-toggle" onClick={() => setDropdownOpen((open) => !open)}>
                  <i className="fas fa-globe" style={{marginRight: '6px'}}></i> VI
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <button onClick={() => setDropdownOpen(false)}>EN</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
      </header>
    </>
  );
};

export default Header;