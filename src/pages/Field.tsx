import React, { useState } from "react";
import "../css/field.css";
import auBg1 from "../assets/carbon1.jpg";
import auBg2 from "../assets/carbon2.jpg";
import auBg3 from "../assets/carbon3.png";


const Field: React.FC = () => {
  // Tabs data
  const TABS = [
    {
      key: "bfsi",
      label: "AI & Data-driven Innovation",
      desc: "AIDC invests in research and development of advanced AI and data-driven solutions. \
        Our offerings include intelligent recognition systems, predictive analytics tools, process automation platforms, and customized R&D services. \
        The goal is to empower businesses to leverage cutting-edge technologies, enhance competitiveness, innovate products and services, expand market presence, \
        and unlock the full potential of their data.",
    },
    {
      key: "enterprise",
      label: "Green Agriculture & Smart Automation",
      desc: "AIDC develops and delivers AI-powered and smart automation solutions for green agriculture. \
        Our products and services support intelligent farming process management, crop environment monitoring, \
        yield prediction, resource optimization (water, fertilizer, energy), and CO₂ emission control. \
        These solutions help agribusinesses increase productivity, reduce operational costs, achieve sustainable growth, and meet environmental compliance requirements.",
    },
    {
      key: "telecom",
      label: "Digital Transformation & Enterprise Solutions",
      desc:
        "AIDC provides comprehensive digital transformation solutions, including enterprise management software, data analytics systems, and integration platforms. \
        Our services are designed to help organizations optimize operational efficiency, strengthen data-driven decision-making, enhance customer experience, and improve management agility. \
        At the same time, we enable enterprises to meet governance, regulatory, and industry-specific compliance standards.",
    },
  ] as const;

  const [active, setActive] = useState<(typeof TABS)[number]["key"]>("bfsi");
  const current = TABS.find((t) => t.key === active)!;

  return (
    <>
      <section className="field-hero-wrap">
        <div className="field-content">
          <div className="about-field-intro">
            <h2 className="field-title">
              The fields in which we operate are highly sought after and demand
              a workforce of exceptional quality.
            </h2>
          </div>
        </div>
        <div className="about-field field-bg" style={{ display: 'flex', gap: '24px', background: 'none', boxShadow: 'none' }}>
          <div style={{ flex: 1, minWidth: 0, minHeight: '320px', height: '380px', borderRadius: '18px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${auBg1})` }} />
          <div style={{ flex: 1, minWidth: 0, minHeight: '320px', height: '380px', borderRadius: '18px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${auBg2})` }} />
          <div style={{ flex: 1, minWidth: 0, minHeight: '320px', height: '380px', borderRadius: '18px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${auBg3})` }} />
        </div>
      </section>

      {/* ===== Tabs section ===== */}
      <section className="field-tabs">
        <div className="fld-tabbar" role="tablist" aria-label="Business fields">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              className={`fld-tab ${active === t.key ? "is-active" : ""}`}
              aria-selected={active === t.key}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="fld-panel">
          <p className="fld-desc">{current.desc}</p>
        </div>
      </section>
    </>
  );
};

export default Field;
