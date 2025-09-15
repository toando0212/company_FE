import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_aidc.png";

const Header: React.FC = () => {
  // State để kiểm soát ẩn hoàn toàn sidebar sau khi transition đóng xong
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // Thêm state để kiểm soát class 'open' cho hiệu ứng mở
  const [sidebarShouldOpen, setSidebarShouldOpen] = React.useState(false);

  React.useEffect(() => {
    if (mobileOpen) {
      setSidebarVisible(true);
      // Đợi 1 tick để thêm class 'open' (kích hoạt transition)
      setTimeout(() => setSidebarShouldOpen(true), 10);
    } else {
      setSidebarShouldOpen(false);
    }
  }, [mobileOpen]);
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = React.useState(false);


  // ===== Mobile: hamburger + drawer

  // ===== Sticky-on-scroll
  const [fixed, setFixed] = React.useState(false);
  const mainHeaderRef = React.useRef<HTMLElement | null>(null);
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        setFixed(!e.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    const h = mainHeaderRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty("--main-header-h", `${h}px`);
  }, [fixed]);

  // ===== Mobile: hamburger + drawer
  React.useEffect(() => {
    // khóa scroll khi mở menu
    document.documentElement.classList.toggle("no-scroll", mobileOpen);
    return () => document.documentElement.classList.remove("no-scroll");
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/field", label: "Field" },
    { path: "/customer", label: "Customers & Partners" },
    { path: "/career", label: "Career opportunities" },
    { path: "/contact", label: "Contact" },
  ];

  // Xử lý animation end để ẩn hoàn toàn khi đóng
  const handleSidebarTransitionEnd = () => {
    if (!mobileOpen) setSidebarVisible(false);
  };

  return (
    <>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="header-contact-row">
            <span className="header-contact-item">
              <i className="fas fa-phone-flip" style={{ marginRight: 6 }} />
              0865903798
            </span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item">
              <i className="fas fa-envelope" style={{ marginRight: 6 }} />
              aidcinnovation@gmail.com
            </span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item">
              <i className="fas fa-map" style={{ marginRight: 6 }} />
              19n7b KĐT Trung Hòa Nhân Chính, Thanh Xuân, Hà Nội
            </span>
            <span className="header-contact-sep">|</span>
            <span className="header-contact-item">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
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

      {/* Sentinel: ngay sau header-top */}
      <div ref={sentinelRef} aria-hidden="true" />

      {/* Main Header */}
      <header
        ref={mainHeaderRef}
        className={`main-header ${fixed ? "is-fixed" : ""} ${mobileOpen ? "overlay" : ""}`}
      >
        <div className="logo-box">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        {/* Desktop nav block */}
        <div className="main-nav-block">
          <nav className="main-nav" aria-label="Primary">
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

          <div className="language-switcher hide-on-mobile">
            <div className="language-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <i className="fas fa-globe" style={{ marginRight: 6 }} />
                VI
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu" role="menu">
                  <button
                    onClick={() => setDropdownOpen(false)}
                    role="menuitem"
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-controls="mobile-drawer"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>

      {/* Mobile Sidebar (tách khỏi header, luôn render để transition mượt) */}
      {sidebarVisible && (
        <>
          <aside
            id="mobile-drawer"
            className={`mobile-drawer${sidebarShouldOpen ? " open" : ""}`}
            aria-hidden={!mobileOpen}
            onTransitionEnd={handleSidebarTransitionEnd}
            style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
          >
            <nav className="mobile-nav" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobile}
                  className={location.pathname === item.path ? "is-active" : ""}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-lang">
              <button className="mobile-lang-btn" onClick={closeMobile}>
                VI
              </button>
              <button className="mobile-lang-btn" onClick={closeMobile}>
                EN
              </button>
            </div>
          </aside>
          <button
            className="drawer-backdrop"
            aria-label="Close menu"
            onClick={closeMobile}
            style={{ pointerEvents: mobileOpen ? 'auto' : 'none', opacity: mobileOpen ? 1 : 0, transition: 'opacity 0.28s' }}
          />
        </>
      )}
    </>
  );
};

export default Header;
