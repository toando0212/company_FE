import React from 'react';
import { Link } from 'react-router-dom';
import sampleImage from '../assets/sample2.jpg'; // Import the image
const About: React.FC = () => {
  const timelineEvents = [
    { year: '2010', title: 'Get Award', description: 'A People Ops leader who is committed to the growth and development of leaders.' },
    { year: '2012', title: 'Started business', description: 'A People Ops leader who is committed to the growth and development of leaders.' },
    { year: '2016', title: 'Survival during wartime', description: 'A People Ops leader who is committed to the growth and development of leaders.' },
    { year: '2017', title: 'Crisis and opportunity', description: 'A People Ops leader who is committed to the growth and development of leaders.' }
  ];

  const stats = [
    { number: '15+', label: 'Years of experiences' },
    { number: '20+', label: 'Team members' },
    { number: '5+', label: 'Winning awards' },
    { number: '20+', label: 'Completed projects' },
    { number: '500+', label: "Client's reviews" }
  ];

  return (
    <>
      {/* Page Title Section */}
      <section className="page-title">
        <h2>About Us</h2>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>&gt;</span> <span>About Us</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            {/* Ảnh minh họa lớn bên trái */}
            
            <div className="about-text">
              <h2>Choose The Best IT Service Company</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna.</p>
              <div className="mission-vision">
                <div className="mission">
                  <h4>Our Mission</h4>
                  <p>An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that's what they are supposed to do.</p>
                </div>
                <div className="vision">
                  <h4>Our Vision</h4>
                  <p>Many IT firms struggle to keep themselves and their IT from falling apart. We've raised the standards in this industry and are a leading cybersecurity.</p>
                </div>
                <div className="value">
                  <h4>Our Value</h4>
                  <p>We adapt our delivery to the way your work, whether as an external provider or as an integrated part of your team.</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32, color: '#FFF', fontWeight: 'bold' }}>
                <Link  to="/" className="video-link"  rel="noopener noreferrer">
                  Check details about our company
                </Link>
              </div>
            </div>
            <div className="about-image">
              <img 
                src={sampleImage}
                alt="Vietnam AI & Digital Logo" 
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;