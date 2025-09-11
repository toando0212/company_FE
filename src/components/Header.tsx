import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_aidc.png";

const Header: React.FC = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  // ----- Sticky-on-scroll: cố định main-header khi cuộn qua sentinel -----
  const [fixed, setFixed] = React.useState(false);
  const mainHeaderRef = React.useRef<HTMLElement | null>(null);
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  // Quan sát sentinel: khi sentinel rời viewport (cuộn xuống) => fixed = true
  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // e.isIntersecting = true => đang ở gần top trang (chưa cuộn qua header)
        setFixed(!e.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        // margin âm nhỏ để header “bật” sớm mượt hơn
        rootMargin: "-1px 0px 0px 0px",
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Khi fixed = true, thêm padding-top cho body/main để nội dung không giật
  React.useEffect(() => {
    const h = mainHeaderRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty("--main-header-h", `${h}px`);
  }, [fixed]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/customer", label: "Customers & Partners" },
    { path: "/career", label: "Career opportunities" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header Top (nằm trong flow, không cố định) */}
      <div className="header-top">
        <div className="container">
          <div className="header-contact-row">
            <span className="header-contact-item">
              <i className="fas fa-phone-flip" style={{ marginRight: 6 }} />
              0123456789
            </span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item">
              <i className="fas fa-envelope" style={{ marginRight: 6 }} />
              quyetdevil@gmail.com
            </span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item">
              <i className="fas fa-map" style={{ marginRight: 6 }} />
              19n7b KĐT Trung Hòa Nhân Chính, Thanh Xuân, Hà Nội
            </span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 8 }}
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 8 }}
              >
                <i className="fab fa-linkedin" />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Sentinel: đặt NGAY SAU header-top, trước main-header */}
      <div ref={sentinelRef} aria-hidden="true" />

      {/* Main Header: bình thường trong flow; khi fixed=true -> position:fixed + slide-in */}
      <header
        ref={mainHeaderRef}
        className={`main-header ${fixed ? "is-fixed" : ""}`}
      >
        <div className="logo-box">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        <div className="main-nav-block">
          <nav className="main-nav">
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="language-switcher">
            <div className="language-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <i className="fas fa-globe" style={{ marginRight: 6 }} />
                VI
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => setDropdownOpen(false)}>EN</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
