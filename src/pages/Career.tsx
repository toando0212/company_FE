import React from "react";
import { Link } from "react-router-dom";
import "../css/page-common.css";
import "../css/career.css";
import auBg from "../assets/hp_bg.jpg";

const positions = [
  {
    icon: "fas fa-laptop-code",
    title: "Software Engineer",
    description:
      "Develop and maintain web applications using modern frameworks.",
  },
  {
    icon: "fas fa-database",
    title: "Data Scientist",
    description:
      "Analyze data and build predictive models to drive business insights.",
  },
  {
    icon: "fas fa-tasks",
    title: "Project Manager",
    description: "Lead project teams and ensure timely delivery of solutions.",
  },
  {
    icon: "fas fa-pencil-ruler",
    title: "UI/UX Designer",
    description: "Design user-friendly interfaces and improve user experience.",
  },
  {
    icon: "fas fa-headset",
    title: "Customer Support Specialist",
    description: "Provide support and resolve customer issues efficiently.",
  },
  {
    icon: "fas fa-user-shield",
    title: "Security Analyst",
    description: "Monitor and secure company systems and data.",
  },
];

const Career: React.FC = () => {
  return (
    <div className="career-page">
      {/* Page Title Section */}
      <section
        className="career-heading"
        style={{ backgroundImage: `url(${auBg})` }}
      >
        <div className="career-hero">
          <h1 className="career-title">Grow with us, succeed with us</h1>

          <form className="career-search" onSubmit={(e) => e.preventDefault()}>
            <span className="icon">
              <i className="fa-solid fa-magnifying-glass" />
           
            </span>
            <input
              type="text"
              className="career-input"
              placeholder="Enter job title, location, skills..."
            />
            <button type="submit" className="sr-only">
              Tìm kiếm
            </button>
          </form>
        </div>
      </section>

      {/* Career Section */}
      <section className="career-section">
        <div className="container">
          <div className="section-header">
            <h2>Join Our Team</h2>
            <p>
              Explore career opportunities with us. Check out our open positions
              and apply to join our team!
            </p>
          </div>
          <div className="career-list-container">
            <div className="career-list-grid">
              {positions.map((pos, idx) => (
                <div key={idx} className="career-item">
                  <div className="career-item__icon">
                    <i className={pos.icon}></i>
                  </div>
                  <h3 className="career-item__title">{pos.title}</h3>
                  <p className="career-item__desc">{pos.description}</p>
                  <Link to="" className="career-item__btn">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
