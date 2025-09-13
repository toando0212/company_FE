import React from 'react';
import footerLogo from '../assets/qe.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <img 
              src={footerLogo} 
              alt="AIDC Logo" 
              className="footer-logo"
              style={{ width: '64px', height: '64px', marginBottom: '0', objectFit: 'contain' }}
            />
            <p>We work with a passion of taking challenges and creating new ones in information technology sector.</p>
          </div>
          
          <div className="footer-column">
            <h4>Newsletter</h4>
            <p>Subscribe our newsletter to get our latest update & news</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
            {/* <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
              <a href="https://behance.com" target="_blank" rel="noopener noreferrer">Behance</a>
            </div> */}
          </div>

          <div className="footer-column">
            <h4>Official Info:</h4>
            <div className="contact-info">
              <p><i className="fas fa-map" style={{ marginRight: 6 }} />19n7b KĐT Trung Hòa Nhân Chính, Thanh Xuân, Hà Nội</p>
              
              <p><i className="fas fa-phone-flip" style={{ marginRight: 6 }} />0865903798</p>
              <p><i className="fas fa-map-pin" style={{ marginRight: 6 }} />Open Hours:<br />Mon - Sat: 8 AM - 17:30 PM<br />Sunday: CLOSED</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>2025 © All rights reserved by AIDC Corp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;