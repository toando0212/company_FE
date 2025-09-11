import React from 'react';
import { Link } from 'react-router-dom';
import '../css/page-common.css';

const Customer: React.FC = () => {
  return (
    <>
      {/* Page Title Section */}
      <section className="page-title">
        <h2>Customer Portal</h2>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>&gt;</span> <span>Customer</span>
        </div>
      </section>

      {/* Customer Section */}
      <section className="customer-section">
        <div className="container">
          <div className="customer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <h2>Welcome to Our Customer Portal</h2>
              <p>Here you can view your orders, manage your account, and get support.</p>
            </div>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
