import React from 'react';
import { Link } from 'react-router-dom';
import '../css/page-common.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business'
    },
    {
      icon: 'fas fa-database',
      title: 'Data Analytics',
      description: 'Turn your data into actionable business insights'
    },
    {
      icon: 'fas fa-cogs',
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmaps'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Title Section */}
      <section className="page-title">
        <h2>Our Services</h2>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>&gt;</span> <span>Services</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Comprehensive IT solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="service-link">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;