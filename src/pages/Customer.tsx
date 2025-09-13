import React from 'react';
import '../css/customer.css';
import auBg from "../assets/hp_bg.jpg";

const Customer: React.FC = () => {
  const bullets = [
    "Continuous innovation to deliver outstanding value.",
    "Transparency and trust in every partnership.",
    "Long-term commitment to our customers' sustainable growth.",
  ];

  return (
    <>
      <section className="cus-par-heading" style={{ backgroundImage: `url(${auBg})` }}>
        <div className='cus-par-content'>
          {/* LEFT */}
          <div className='cus-par-content-left'>
            <h1>Customers & Partners</h1>
            <p>Our Commitment</p>
            <i className="fas fa-arrow-right-long" />
          </div>

          {/* RIGHT */}
          <div className='cus-par-content-right'>
            <ul className="cus-cards">
              {bullets.map((text, i) => (
                <li className="cus-card" key={i}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}.</span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
