
import '@css/about-header.css';

function App() {
  const timelineEvents = [
    { year: '2010', title: 'Get Award', description: 'A People Ops leader who is committed to the growth and development of leaders.' },
    { year: '2012', title: 'Started business', description: 'A People Ops leader who is committed to the growth and development of leaders.' },
    { year: '2016', title: 'Survival during wartime', description: 'A People Ops leader who is committed to the growth and development of leaders.' },
    { year: '2017', title: 'Crisis and opportunity', description: 'A People Ops leader who is committed to the growth and development of leaders.' }
  ];

  // const teamMembers = [
  //   { name: 'Arnold Burner', position: 'Former Manager, Intime', image: 'https://via.placeholder.com/200x200', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  //   { name: 'Sarah Johnson', position: 'Lead Developer', image: 'https://via.placeholder.com/200x200', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  //   { name: 'Mike Chen', position: 'Project Manager', image: 'https://via.placeholder.com/200x200', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  //   { name: 'Lisa Wang', position: 'UI/UX Designer', image: 'https://via.placeholder.com/200x200', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  // ];

  const stats = [
    { number: '15+', label: 'Years of experiences' },
    { number: '20+', label: 'Team members' },
    { number: '5+', label: 'Winning awards' },
    { number: '20+', label: 'Completed projects' },
    { number: '500+', label: "Client's reviews" }
  ];

  return (
    <div className="app-bg">
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <ul className="info-list">
            <li><span role="img" aria-label="phone">📞</span> 0123456789</li>
            <li><span role="img" aria-label="email">✉️</span> quyetdevil@gmail.com</li>
            <li><span role="img" aria-label="map">📍</span> 36 Chua Lang, Hanoi, Vietnam</li>
          </ul>
          <div className="social">
            <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="main-header-inner">
          <div className="logo-box">
            <i className="fa-solid fa-laptop-code footer-logo" style={{ fontSize: '68px', color: '#1877f3', marginTop: '22px' }}></i>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li className="active"><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Title Section */}
      <section className="page-title">
        <h2>About Us</h2>
        <div className="breadcrumb">
          <a href="#">Home</a> <span>&gt;</span> <span>About Us</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
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

              <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="video-link">
                Check details about our company
              </a>
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

      {/* Team Section */}
      {/* <section className="team-section">
        <div className="container">
          <h2>Passionate Personalities, Versatile Brains</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p className="position">{member.position}</p>
                  <p className="quote">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="cta-section">
        <div className="container">
          <h2>Looking for the Best IT Business Solutions?</h2>
          <p>As a app web crawler expert, We will help to organize.</p>
          <a href="#" className="cta-button">Get A Quote</a>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <i className="fa-solid fa-laptop-code footer-logo" style={{ fontSize: '48px', color: '#1877f3', marginBottom: '20px' }}></i>
              <p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
            </div>
            
            <div className="footer-column">
              <h4>Newsletter</h4>
              <p>Subscribe our newsletter to get our latest update & news</p>
              <div className="newsletter">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
              <div className="social-links">
                <a href="https://twitter.com">Twitter</a>
                <a href="https://facebook.com">Facebook</a>
                <a href="https://dribbble.com">Dribbble</a>
                <a href="https://behance.com">Behance</a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Official Info:</h4>
              <div className="contact-info">
                <p>36 Chua Lang<br />Hanoi, Vietnam</p>
                <p>0123456789</p>
                <p>Open Hours:<br />Mon - Sat: 8 am - 5 pm<br />Sunday: CLOSED</p>
              </div>
            </div>

        
          </div>
          
          <div className="footer-bottom">
            <p>2025 © All rights reserved by IT Firm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
