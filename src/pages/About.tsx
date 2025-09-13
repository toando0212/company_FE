import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import auBg from "../assets/au_bg.png";
import "../css/about.css";

import m1 from "../assets/quyet_avatar.jpg";
import m2 from "../assets/toan_avatar.jpg";
import m3 from "../assets/dung_avatar.jpg";
import m4 from "../assets/tan_avatar.jpg";

const DATA = [
  { title1: "PRACTICE", title2: "TRUTH", sub: "is the criterion to test" },
  {
    title1: "RESPONSIBILITY",
    title2: "TO CUSTOMERS",
    sub: "is our unwavering commitment",
  },
  { title1: "CREATIVITY", title2: "BREAKTHROUGH", sub: "paves the way for" },
  { title1: "DISCIPLINE", title2: "COLLECTIVE STRENGTH", sub: "builds" },
  { title1: "QUALITY", title2: "REPUTATION", sub: "is the measure of" },
  { title1: "TRANSPARENCY", title2: "TRUST", sub: "builds" },
  { title1: "CONTINUOUS LEARNING", title2: "GO FURTHER", sub: "so we can" },
];

type Member = { name: string; role: string; bio: string; photo: string };

const MEMBERS: Member[] = [
  {
    name: "Mr. Phạm Huy Tân",
    role: "Chairman of the Board of Directors",
    bio: "With strong leadership and a forward-looking vision, Mr. Huy Tân, Chairman of the Board of Directors, plays a pivotal role in guiding Vietnam AI Technology & Digital Transformation JSC toward sustainable growth and long-term success. As the guardian of corporate governance and strategic direction, he ensures that the company operates with transparency, efficiency, and responsibility, while fostering innovation and expanding partnerships. His leadership is instrumental in positioning the company as a trusted partner and a pioneer in the field of AI and digital transformation.",
    photo: m4,
  },
  {
    name: "Mr. Trịnh Văn Quyết",
    role: "Chief Executive Officer (CEO)",
    bio: "With extensive experience in AI Technology and Digital Transformation, Mr. Quyết Trịnh plays a strategic role in shaping the company's vision and driving technological growth at Vietnam AI Technology & Digital Transformation JSC. He is the key architect of the company’s core technology values, aiming to position the company as a pioneer in delivering comprehensive and sustainable digital solutions.",
    photo: m1,
  },
  {
    name: "Mr. Đỗ Duy Toàn",
    role: "Deputy Director",
    bio: "With solid expertise in software engineering and project management, Mr. Duy Toàn, Deputy Director of the Software Development Center, plays a key role in leading product development and ensuring the quality of enterprise solutions at Vietnam AI Technology & Digital Transformation JSC. He focuses on building efficient development processes, fostering innovation within the team, and delivering high-performance software solutions that meet the evolving needs of clients.",
    photo: m2,
  },
  {
    name: "Mr. Lê Đức Dũng",
    role: "Deputy Director",
    bio: "Mr. Đức Dũng, Deputy Director of the AI Center for Green Agriculture at Vietnam AI Technology & Digital Transformation JSC, plays a central role in applying artificial intelligence to sustainable farming solutions. He leads initiatives in smart automation, environmental monitoring, and CO₂ process optimization, enabling agricultural enterprises to improve productivity, reduce costs, and achieve long-term sustainability. His leadership fosters innovation and positions the company at the forefront of green agriculture transformation.",
    photo: m3,
  },
  {
    name: "Mr. Nguyễn Tiến Công",
    role: "Deputy Director",
    bio: "Mr. Tiến Công, Deputy Director of Technology at Vietnam AI Technology & Digital Transformation JSC, plays a crucial role in shaping the company’s technological direction and driving innovation. He oversees research and development initiatives, enhances the technology infrastructure, and ensures the effective integration of advanced AI and digital solutions to strengthen the company’s market position.",
    photo: "#",
  },
];

type MVItem = { title: string; bullets: { icon: string; text: string }[] };
type MVYear = "2025" | "2030";

const About: React.FC = () => {
  // index hiện tại
  const [idx, setIdx] = useState(0);
  const atFirst = idx === 0;
  const atLast = idx === DATA.length - 1;

  const prev = () => !atFirst && setIdx((i) => i - 1);
  const next = () => !atLast && setIdx((i) => i + 1);

  // phím tắt
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [atFirst, atLast]);

  // Mission & Vision tabs
  const [mvYear, setMvYear] = useState<MVYear>("2025");
  const MV_DATA: Record<MVYear, MVItem> = {
    "2025": {
      title:
        "Become a prestigious and reliable partner of large domestic and foreign technology companies.",
      bullets: [
        {
          icon: "fa-solid fa-shield-halved",
          text: "ISO 27001 / SOC 2 Completion; AIDC Data & AI Platform Launch",
        },
        {
          icon: "fa-solid fa-face-smile",
          text: "NPS ≥ 60, 95% of customers return within 12 months.",
        },
        {
          icon: "fa-solid fa-lightbulb",
          text: "Pioneering application of new technology in service provision.",
        },
      ],
    },
    "2030": {
      title:
        "Affirming regional position, expanding AI & Data solution ecosystem for businesses",
      bullets: [
        {
          icon: "fa-solid fa-globe-asia",
          text: "40% of revenue comes from international markets; Strong presence in Southeast Asia.",
        },
        {
          icon: "fa-solid fa-cubes-stacked",
          text: "Portfolio of 30+ accelerators/SDKs & 10+ core solutions/patents.",
        },
        {
          icon: "fa-solid fa-graduation-cap",
          text: "Training 1,000+ AI/Data engineers through AIDC Academy & community.",
        },
      ],
    },
  };

  return (
    <>
      {/* About Us */}
      <section className="about-us" style={{ backgroundImage: `url(${auBg})` }}>
        <div className="about-us-content">
          <div className="about-us-intro">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-desc">
              Vietnam AI Technology and Digital Transformation Joint Stock
              Company (AIDC Corp.) was established with the mission to pioneer
              in the fields of AI, data, and digital technology. We provide
              end-to-end solutions from software development and data analytics
              to R&D in AI, AR/VR, and green agriculture automation, helping
              businesses optimize operations and embrace sustainable growth. In
              addition, we apply AI to monitor and improve CO₂ processes,
              supporting enterprises in reducing environmental impact.
              Innovation and the adoption of advanced technologies are always at
              the core of our vision, enabling us to deliver tailored and
              sustainable solutions for our customers.
            </p>

            <HashLink
              smooth
              to="/#core-services"
              className="video-link about-us-link"
            >
              <i className="fa-solid fa-arrow-right" />
              Discover Our Services
            </HashLink>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="core-value">
        <div className="heading-wrap">
          <h1 className="main-heading">Core value</h1>
          <span className="shadow-heading-bg">Core value</span>
        </div>

        <div className="core-carousel">
          <button
            className="nav-arrow left"
            onClick={prev}
            disabled={atFirst}
            aria-label="Prev"
          >
            <i className="fas fa-less-than"></i>
          </button>

          {/* viewport */}
          <div className="circles-viewport">
            {/* track trượt ngang: --idx được dùng để translateX */}
            <div
              className="circles-track"
              style={{ ["--idx" as any]: String(idx) }}
            >
              {DATA.map((d, i) => (
                <div className={`slide ${i === idx ? "active" : ""}`} key={i}>
                  <div className="circle">
                    <h2 className="t1">{d.title1}</h2>
                    <p className="sub">{d.sub}</p>
                    <strong className="t2">{d.title2}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="nav-arrow right"
            onClick={next}
            disabled={atLast}
            aria-label="Next"
          >
            <i className="fas fa-greater-than"></i>
          </button>
        </div>
      </section>

      <section className="organization">
        <div className="heading-wrap">
          <h1 className="main-heading">Board of Directors</h1>
          <span className="shadow-heading-bg">Board of Directors</span>
        </div>

        <Directors />
      </section>

      <section className="mission-vision">
        <div className="mis-vis-heading">
          <h1 className="mis-vis-title text-gradient">Mission & Vision</h1>
        </div>

        {/* Tabs */}
        <div className="mv-tabs" role="tablist" aria-label="Roadmap years">
          <button
            className={`mv-tab ${mvYear === "2025" ? "active" : ""}`}
            onClick={() => setMvYear("2025")}
            role="tab"
            aria-selected={mvYear === "2025"}
          >
            2025
          </button>
          <button
            className={`mv-tab ${mvYear === "2030" ? "active" : ""}`}
            onClick={() => setMvYear("2030")}
            role="tab"
            aria-selected={mvYear === "2030"}
          >
            2030
          </button>
        </div>

        {/* Content */}
        <div className="mv-panel">
          <h3 className="mv-heading">{MV_DATA[mvYear].title}</h3>
          <ul className="mv-list">
            {MV_DATA[mvYear].bullets.map((b, i) => (
              <li key={i} className="mv-item">
                <span className={`mv-badge mv-badge-${(i % 3) + 1}`}>
                  <i className={b.icon} />
                </span>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

/* ===== Directors component (ảnh click -> viền đôi xanh + đổi thông tin) ===== */
function Directors() {
  // 0 = Chủ tịch (ảnh lớn trái)
  const [idx, setIdx] = useState(0);

  return (
    <div className="org-wrap">
      {/* Cột trái: layout 1 lớn + 4 nhỏ như hình */}
      <div className="org-left">
        <div className="org-portrait five-dots">
          {/* Ảnh lớn (Chủ tịch) */}
          <button
            type="button"
            className={`avatar avatar-lg ${idx === 0 ? "active" : ""}`}
            onClick={() => setIdx(0)}
            aria-label={MEMBERS[0].name}
          >
            <img src={MEMBERS[0].photo} alt={MEMBERS[0].name} />
          </button>

          {/* 4 ảnh nhỏ được đặt cố định theo vị trí */}
          {/* Trên-trái */}
          <button
            type="button"
            className={`avatar avatar-sm dot tl ${idx === 1 ? "active" : ""}`}
            onClick={() => setIdx(1)}
            aria-label={MEMBERS[1].name}
            title={MEMBERS[1].name}
          >
            <img src={MEMBERS[1].photo} alt={MEMBERS[1].name} />
          </button>

          {/* Trên-phải */}
          <button
            type="button"
            className={`avatar avatar-sm dot rt ${idx === 2 ? "active" : ""}`}
            onClick={() => setIdx(2)}
            aria-label={MEMBERS[2].name}
            title={MEMBERS[2].name}
          >
            <img src={MEMBERS[2].photo} alt={MEMBERS[2].name} />
          </button>

          {/* Dưới-phải */}
          <button
            type="button"
            className={`avatar avatar-sm dot rb ${idx === 3 ? "active" : ""}`}
            onClick={() => setIdx(3)}
            aria-label={MEMBERS[3].name}
            title={MEMBERS[3].name}
          >
            <img src={MEMBERS[3].photo} alt={MEMBERS[3].name} />
          </button>

          {/* Dưới-trái */}
          <button
            type="button"
            className={`avatar avatar-sm dot bl ${idx === 4 ? "active" : ""}`}
            onClick={() => setIdx(4)}
            aria-label={MEMBERS[4].name}
            title={MEMBERS[4].name}
          >
            <img src={MEMBERS[4].photo} alt={MEMBERS[4].name} />
          </button>
        </div>
      </div>

      {/* Cột phải: text thay đổi theo ảnh chọn */}
      <div className="org-right">
        <h2 className="org-name">{MEMBERS[idx].name}</h2>
        <div className="org-role">{MEMBERS[idx].role}</div>
        <p className="org-bio">{MEMBERS[idx].bio}</p>
      </div>
    </div>
  );
}

export default About;
