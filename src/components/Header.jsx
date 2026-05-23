import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { SITE_PAGE_SLUGS } from "../data/sitePages";

const NAV = [
  { label: "Fintech", to: { pathname: "/", hash: "#fintech" } },
  { label: "B2B", to: "/b2b" },
  { label: "B2C", to: "/b2c" },
  { label: "API", to: "/api" },
  { label: "Software", to: "/software" },
  { label: "Technology", to: "/technology" },
  { label: "Company", to: "/company" },
  { label: "Stories", to: "/stories" },
  { label: "Blog", to: "/blog" },
];

function NavItem({ item, isHome, pathname, onNavigate, className = "" }) {
  const isHashLink = typeof item.to === "object" && item.to.hash;
  const pathOnly = typeof item.to === "string" ? item.to : item.to.pathname;
  const isActive = !isHashLink && pathname === pathOnly;
  const linkClass = [className, isActive && "nav-active"].filter(Boolean).join(" ");

  if (isHashLink) {
    return (
      <Link to={item.to} className={linkClass || undefined} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  if (typeof item.to === "string" && item.to.startsWith("/#")) {
    return (
      <Link to={{ pathname: "/", hash: item.to.slice(1) }} className={linkClass || undefined} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <Link to={item.to} className={linkClass || undefined} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const location = useLocation();
  const isB2BPage = location.pathname === "/b2b";
  const isB2CPage = location.pathname === "/b2c";
  const isSoftwarePage =
    location.pathname === "/software" || location.pathname.startsWith("/software/");
  const isApiPage = location.pathname === "/api";
  const isSdksPage = location.pathname === "/sdks";
  const isTechPage = location.pathname === "/technology";
  const isCompanyPage = location.pathname === "/company";
  const isStoriesPage = location.pathname === "/stories";
  const isBlogPage = location.pathname === "/blog" || location.pathname.startsWith("/blog/");
  const slug = location.pathname.replace(/^\//, "");
  const isSitePage = SITE_PAGE_SLUGS.includes(slug);
  const isDarkHeroPage =
    isB2BPage ||
    isB2CPage ||
    isSoftwarePage ||
    isApiPage ||
    isSdksPage ||
    isTechPage ||
    isCompanyPage ||
    isStoriesPage ||
    isBlogPage ||
    isSitePage;
  const isHome = location.pathname === "/";
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (isDarkHeroPage) {
        setTheme(y > 320 ? "light" : "dark");
      } else if (isHome) {
        setTheme(y > window.innerHeight * 0.85 ? "light" : "dark");
      } else {
        setTheme("light");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDarkHeroPage, isHome]);

  useEffect(() => {
    setTheme(isDarkHeroPage ? "dark" : "dark");
    setScrolled(false);
    setMenuOpen(false);
  }, [location.pathname, isDarkHeroPage]);

  useEffect(() => {
    document.body.classList.toggle("body--menu-open", menuOpen);
    return () => document.body.classList.remove("body--menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`header header--${theme} ${scrolled ? "header--scrolled" : ""}`}
      >
        <Logo />
        <nav className="nav-desktop" aria-label="Main">
          {NAV.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isHome={isHome}
              pathname={location.pathname}
            />
          ))}
        </nav>
        <div className="nav-cta">
          <Link
            to="/login"
            className={`btn nav-cta__keys ${theme === "dark" ? "btn--ghost btn--ghost-dark" : "btn--outline"}`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`btn nav-cta__signup ${theme === "dark" ? "btn--ghost btn--ghost-dark" : "btn--outline"}`}
          >
            Sign up
          </Link>
          <Link
            to={{ pathname: "/", hash: "#contact" }}
            className={`btn ${theme === "dark" ? "btn--primary-light" : "btn--primary"}`}
            onClick={closeMenu}
          >
            Get started
          </Link>
          <button
            type="button"
            className={`menu-btn ${menuOpen ? "menu-btn--open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`nav-mobile-backdrop ${menuOpen ? "nav-mobile-backdrop--open" : ""}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <nav
        id="mobile-nav"
        className={`nav-mobile nav-mobile--${theme} ${menuOpen ? "nav-mobile--open" : ""}`}
        aria-label="Main mobile"
        aria-hidden={!menuOpen}
      >
        <div className="nav-mobile__links">
          {NAV.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isHome={isHome}
              pathname={location.pathname}
              className="nav-mobile__link"
              onNavigate={closeMenu}
            />
          ))}
        </div>
        <div className="nav-mobile__cta">
          <Link
            to="/login"
            className={`btn ${theme === "dark" ? "btn--ghost btn--ghost-dark" : "btn--outline"}`}
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`btn ${theme === "dark" ? "btn--primary-light" : "btn--primary"}`}
            onClick={closeMenu}
          >
            Sign up
          </Link>
          <Link
            to={{ pathname: "/", hash: "#contact" }}
            className={`btn ${theme === "dark" ? "btn--primary-light" : "btn--primary"}`}
            onClick={closeMenu}
          >
            Get started
          </Link>
        </div>
      </nav>
    </>
  );
}
