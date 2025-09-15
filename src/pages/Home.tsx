import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    icon: "fas fa-network-wired",
    text: "Modern Management & Cutting-Edge Technology",
  },
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
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
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

  const flashcardsData = [
    {
      id: 0,
      frontImage: dataIcon,
      frontAlt: "Data Icon",
      frontTitle: "Data analysis services, database construction",
      backTitle: "Data analysis services, database construction",
      backDetails: [
        "- We provide comprehensive data analysis services and database construction to help organizations transform raw information into actionable insights.",
        "- Our solutions ensure reliable, scalable data infrastructures that support smarter decision-making and sustainable growth.",
      ],
    },
    {
      id: 1,
      frontImage: aiIcon,
      frontAlt: "AI Icon",
      frontTitle: "Application of new technology services",
      backTitle: "Application of new technology services",
      backDetails: [
        "- We focus on harnessing the power of AI/ML, including computer vision and large language models (LLMs), to deliver intelligent, adaptive solutions.",
        "- We help businesses integrate these cutting-edge technologies to enhance efficiency, automation, and user experiences.",
      ],
    },
    {
      id: 2,
      frontImage: htmlIcon,
      frontAlt: "HTML Icon",
      frontTitle: "Outsourcing services, software development",
      backTitle: "Outsourcing services, software development",
      backDetails: [
        "- Software development services",
        "- Implement product technology transfer, upgrade product versions",
        "- R&D as per requirements",
      ],
    },
    {
      id: 3,
      frontImage: consultingIcon,
      frontAlt: "Consulting Icon",
      frontTitle: "Consulting, integrating comprehensive IT systems",
      backTitle: "Consulting, integrating comprehensive IT systems",
      backDetails: [
        "- We offer comprehensive IT systems, covering infrastructure, applications, and data environments.",
        "- Our team ensures seamless connectivity between legacy and modern platforms, strengthens security, and improves system performance.",
      ],
    },
  ];

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
                  <HashLink
                    smooth
                    to="/#core-services"
                    className="video-link about-us-link"
                  >
                    Our Services
                  </HashLink>
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
      <section id="core-services" className="flashcard-section">
        <div className="container">
          <div className="heading-wrap">
            <h1 className="main-heading">Core services</h1>
            <span className="shadow-heading-bg">Core services</span>
          </div>
          <div className="flashcard-row">
            {flashcardsData.map((card) => (
              <motion.div
                className="flashcard"
                key={card.id}
                layoutId={`card-${card.id}`}
                onClick={() => setSelectedCardIndex(card.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="flashcard-inner">
                  <div className="flashcard-front">
                    <img
                      src={card.frontImage}
                      alt={card.frontAlt}
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "12px",
                        borderRadius: "8px",
                        objectFit: "cover",
                        background:
                          card.id === 0 || card.id === 2 ? "#fff" : "none",
                      }}
                    />
                    <h2>{card.frontTitle}</h2>
                  </div>
                  <div className="flashcard-back">
                    <div className="flashcard-back-part">
                      <h2>{card.backTitle}</h2>
                    </div>
                    <hr className="flashcard-back-sep" />
                    <div className="flashcard-back-part">
                      {card.backDetails.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="orbit-section">
        <div className="heading-wrap">
          <h1 className="main-heading">Why choose us?</h1>
          <span className="shadow-heading-bg">Why choose us?</span>
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
                Beyond providing services, we position ourselves as a strategic
                partner, co-creating long-term success in the digital
                transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add modal popup for card details */}
      <AnimatePresence>
        {selectedCardIndex !== null &&
          (() => {
            const selectedCard = flashcardsData.find(
              (card) => card.id === selectedCardIndex
            );
            return (
              <motion.div
                className="modal-overlay"
                onClick={() => setSelectedCardIndex(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ zIndex: 1000 }}
              >
                <motion.div
                  className="modal-content card-vertical"
                  layoutId={`card-${selectedCardIndex}`}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ borderRadius: 16 }}
                  animate={{ borderRadius: 16 }}
                  exit={{ borderRadius: 16 }}
                >
                  <div className="modal-body flashcard-front">
                    <img
                      src={selectedCard?.frontImage}
                      alt={selectedCard?.frontAlt}
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "12px",
                        borderRadius: "8px",
                        objectFit: "cover",
                        background:
                          selectedCardIndex === 0 || selectedCardIndex === 2
                            ? "#fff"
                            : "none",
                      }}
                    />
                    <h2>{selectedCard?.frontTitle}</h2>
                    <div className="modal-details">
                      {selectedCard?.backDetails.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </div>
  );
};

export default Home;
