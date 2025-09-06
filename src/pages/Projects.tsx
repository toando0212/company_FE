import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x300',
      description: 'A modern e-commerce platform with advanced features'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://via.placeholder.com/400x300',
      description: 'Secure mobile banking application with biometric authentication'
    },
    {
      title: 'Cloud Infrastructure',
      category: 'Cloud Solutions',
      image: 'https://via.placeholder.com/400x300',
      description: 'Scalable cloud infrastructure for enterprise clients'
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Data Analytics',
      image: 'https://via.placeholder.com/400x300',
      description: 'Real-time analytics dashboard for business intelligence'
    },
    {
      title: 'Security Audit System',
      category: 'Cybersecurity',
      image: 'https://via.placeholder.com/400x300',
      description: 'Comprehensive security audit and monitoring system'
    },
    {
      title: 'IoT Management Platform',
      category: 'IoT Solutions',
      image: 'https://via.placeholder.com/400x300',
      description: 'IoT device management and monitoring platform'
    }
  ];

  return (
    <div className="projects-page">
      {/* Page Title Section */}
      <section className="page-title">
        <h2>Our Projects</h2>
        <div className="breadcrumb">
          <a href="/">Home</a> <span>&gt;</span> <span>Projects</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Latest Work</h2>
            <p>Discover some of our recent successful projects</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <span className="project-category">{project.category}</span>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;