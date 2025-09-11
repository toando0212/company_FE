import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import "../css/home.css";
import bgImage from "../assets/hp_bg.jpg";
import item1 from "../assets/hp_item.png";
import item2 from "../assets/hp_item2.png";
import item3 from "../assets/hp_item3.png";
import aiIcon from "../assets/ai_icon.jpg";
import dataIcon from "../assets/data_icon.png";
import htmlIcon from "../assets/html_icon.png";
import consultingIcon from "../assets/consulting_icon.jpg";

const images = [item1, item2, item3];
const items = [
  { icon: "fas fa-network-wired", text: "Modern Management & Cutting-Edge Technology" },
  { icon: "fas fa-certificate", text: "Strong Expertise" },
  { icon: "fas fa-cogs", text: "Comprehensive & Customized Solutions" },
  { icon: "fas fa-handshake", text: "Extensive Partner Network" },
];

const DURATION = 6000; // mỗi item ~6 giây
const FADE = 2000; // hiệu ứng mờ/hiện kéo dài 2 giây
const OVERLAP = 400; // overlap nhẹ

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);

  // Preload ảnh để không “nháy”
  const preload = (src: string) =>
    new Promise<void>((res) => {
      const img = new Image();
      img.src = src;
      img.onload = () => res();
      img.onerror = () => res();
    });

  useEffect(() => {
    let cancelled = false;

    const step = async () => {
      const next = (index + 1) % images.length;
      await preload(images[next]);
      if (cancelled) return;

      setPrevIndex(index); // cho ảnh cũ bắt đầu fadeOut
      setIndex(next); // mount ảnh mới (sẽ chạy fadeIn)

      // sau khi fade xong thì bỏ ảnh cũ
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(
        () => setPrevIndex(null),
        FADE
      ) as unknown as number;
    };

    const id = window.setInterval(
      step,
      DURATION - OVERLAP
    ) as unknown as number;

    return () => {
      cancelled = true;
      window.clearInterval(id);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index]);

  return (
    <div className="home-page">
      <section
        className="page-title"
        style={{ background: `url(${bgImage}) center/cover no-repeat` }}
      >
        <div className="page-title-overlay">
          <div className="container">
            <div className="hero-row">
              <div className="hero-content">
                <h2>
                  AIDC corp. was established with the mission of pioneering in
                  the fields of AI, data, and digital technologies.
                </h2>
                <p>
                  We deliver end-to-end solutions in software development, data
                  analytics, and R&D in AI and AR/VR, enabling businesses to
                  optimize performance and strengthen competitiveness.
                  Innovation and advanced technologies are at the heart of our
                  approach, ensuring sustainable and customized solutions for
                  our clients.
                </p>
                <div className="hero-buttons">
                  <Link to="/services" className="btn btn-primary">
                    Our Services
                  </Link>
                  <Link to="/contact" className="btn btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Khung hiển thị items */}
              <div className="hero-items">
                {prevIndex !== null && (
                  <img
                    key={`prev-${prevIndex}`} // key để đảm bảo remount chạy animation
                    src={images[prevIndex]}
                    alt={`item-${prevIndex}`}
                    className="hero-item fading" // chạy fadeOut
                    draggable={false}
                  />
                )}
                <img
                  key={`active-${index}`} // remount mỗi lần đổi ảnh -> fadeIn
                  src={images[index]}
                  alt={`item-${index}`}
                  className="hero-item active" // chạy fadeIn
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Card Section */}
      <section className="flashcard-section">
        <div className="container">
          <div className="flashcard-heading-wrap">
            <h1 className="flashcard-heading">Core services</h1>
            <span className="flashcard-heading-bg">Core services</span>
          </div>
          <div className="flashcard-row">
            <div className="flashcard">
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <img
                    src={dataIcon}
                    alt="AI Icon"
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "12px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      background: "#fff",
                    }}
                  />
                  <h2>Data analysis services, database construction</h2>
                </div>
                <div className="flashcard-back">
                  <div className="flashcard-back-part">
                    <h2>Data analysis services, database construction</h2>
                  </div>
                  <hr className="flashcard-back-sep" />
                  <div className="flashcard-back-part">
                    <p>
                      - We provide comprehensive data analysis services and
                      database construction to help organizations transform raw
                      information into actionable insights.
                    </p>
                    <p>
                      - Our solutions ensure reliable, scalable data
                      infrastructures that support smarter decision-making and
                      sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flashcard">
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <img
                    src={aiIcon}
                    alt="AI Icon"
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "12px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <h2>Application of new technology services</h2>
                </div>
                <div className="flashcard-back">
                  <div className="flashcard-back-part">
                    <h2>Application of new technology services</h2>
                  </div>
                  <hr className="flashcard-back-sep" />
                  <div className="flashcard-back-part">
                    <p>
                      - We focus on harnessing the power of AI/ML, including
                      computer vision and large language models (LLMs), to
                      deliver intelligent, adaptive solutions.
                    </p>
                    <p>
                      - We help businesses integrate these cutting-edge
                      technologies to enhance efficiency, automation, and user
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flashcard">
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <img
                    src={htmlIcon}
                    alt="AI Icon"
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "12px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      background: "#fff",
                    }}
                  />
                  <h2>Outsourcing services, software development</h2>
                </div>
                <div className="flashcard-back">
                  <div className="flashcard-back-part">
                    <h2>Outsourcing services, software development</h2>
                  </div>
                  <hr className="flashcard-back-sep" />
                  <div className="flashcard-back-part">
                    <p>- Software development services</p>
                    <p>
                      - Implement product technology transfer, upgrade product
                      versions
                    </p>
                    <p>- R&D as per requirements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flashcard">
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <img
                    src={consultingIcon}
                    alt="Consulting Icon"
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "12px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <h2>Consulting, integrating comprehensive IT systems</h2>
                </div>
                <div className="flashcard-back">
                  <div className="flashcard-back-part">
                    <h2>Consulting, integrating comprehensive IT systems</h2>
                  </div>
                  <hr className="flashcard-back-sep" />
                  <div className="flashcard-back-part">
                    <p>
                      - We offer comprehensive IT systems, covering
                      infrastructure, applications, and data environments.
                    </p>
                    <p>
                      - Our team ensures seamless connectivity between legacy
                      and modern platforms, strengthens security, and improves
                      system performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="orbit-section">
        <div className="flashcard-heading-wrap">
          <h1 className="flashcard-heading">Why choose us?</h1>
          <span className="flashcard-heading-bg">Why choose us?</span>
        </div>

        <div className="orbit">
          {/* Vòng quay */}
          <div className="orbit-ring">
            {items.map((it, i) => (
              <div
                key={i}
                className="orbit-item"
                style={
                  {
                    // phân bố đều quanh vòng
                    "--angle": `${(360 / items.length) * i}deg`,
                  } as React.CSSProperties
                }
              >
                <div className="orbit-card">
                  <i className={it.icon}></i>
                  <span>{it.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Nội dung trung tâm */}
          <div className="orbit-center">
            <div className="center-card">
              <div className="badge">Growing Together</div>
              <p>
                Beyond providing services, we position ourselves as a strategic partner, 
                co-creating long-term success in the digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
