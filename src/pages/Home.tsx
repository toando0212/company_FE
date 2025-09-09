
import { Link } from 'react-router-dom';
import React from 'react';

import '../css/home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="page-title">
        <div className="container">
          <div className="hero-content" style={{justifyContent: 'center', textAlign: 'center'}}>
            <h2>Welcome to Vietnam AI & Digital transformation technology JSC</h2>
            <p>We provide the best solutions for your business needs</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">Our Services</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-code"></i>
              <h3>Expert Development</h3>
              <p>Our experienced developers create robust and scalable solutions</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-shield-alt"></i>
              <h3>Secure Solutions</h3>
              <p>We prioritize security in all our development processes</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-clock"></i>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support for all your technical needs</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-users"></i>
              <h3>Expert Team</h3>
              <p>Work with our team of certified professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Looking for the Best IT Business Solutions?</h2>
          <p>As a app web crawler expert, We will help to organize.</p>
          <Link to="/contact" className="cta-button">Get A Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
