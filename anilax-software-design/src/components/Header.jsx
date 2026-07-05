import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { MobileMegaSection, NavMegaPanel, NavMegaTrigger } from "./NavMegaDropdown";
import { isMegaMenuActive, NAV_MEGA_MENUS, NAV_SIMPLE_LINKS } from "../data/navMegaMenus";

function isNavActive(item, pathname) {
  const to = typeof item.to === "string" ? item.to : item.to.pathname;
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function NavItem({ item, pathname, onNavigate, className = "" }) {
  const isActive = isNavActive(item, pathname);
  const linkClass = [className, isActive && "nav-active"].filter(Boolean).join(" ");

  return (
    <Link to={item.to} className={linkClass || undefined} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const openMenu = NAV_MEGA_MENUS.find((m) => m.id === openMenuId) ?? null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(false);
    setMenuOpen(false);
    setOpenMenuId(null);
    setMobileExpanded({});
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("body--menu-open", menuOpen);
    return () => document.body.classList.remove("body--menu-open");
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("body--mega-open", Boolean(openMenuId));
    return () => document.body.classList.remove("body--mega-open");
  }, [openMenuId]);

  useEffect(() => {
    if (!openMenuId) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpenMenuId(null);
    const onDoc = (e) => {
      if (e.target.closest?.(".header-mega-panel, .nav-mega-btn")) return;
      setOpenMenuId(null);
    };
    window.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => document.addEventListener("click", onDoc), 0);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
      document.removeEventListener("click", onDoc);
    };
  }, [openMenuId]);

  const closeMenu = () => setMenuOpen(false);
  const closeMega = () => setOpenMenuId(null);

  const openMega = (id) => {
    setOpenMenuId(id);
  };

  const toggleMega = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMenuId((current) => (current === id ? null : id));
  };

  const toggleMobileSection = (id) => {
    setMobileExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__inner">
          <Logo />

          <nav className="nav-desktop" aria-label="Main">
            {NAV_MEGA_MENUS.map((menu) => (
              <NavMegaTrigger
                key={menu.id}
                menu={menu}
                open={openMenuId === menu.id}
                active={isMegaMenuActive(menu, location.pathname)}
                onOpen={() => openMega(menu.id)}
                onToggle={(e) => toggleMega(e, menu.id)}
              />
            ))}
            {NAV_SIMPLE_LINKS.map((item) => (
              <NavItem key={item.label} item={item} pathname={location.pathname} />
            ))}
          </nav>

          <div className="nav-cta">
            <Link to="/login" className="nav-cta__link">
              Login
            </Link>
            <Link
              to={{ pathname: "/", hash: "#contact" }}
              className="btn btn--accent nav-cta__btn"
              onClick={closeMenu}
            >
              Get Started
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
        </div>
      </header>

      {openMenu && <NavMegaPanel menu={openMenu} open onClose={closeMega} />}

      <button
        type="button"
        className={`nav-mobile-backdrop ${menuOpen ? "nav-mobile-backdrop--open" : ""}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <nav
        id="mobile-nav"
        className={`nav-mobile ${menuOpen ? "nav-mobile--open" : ""}`}
        aria-label="Main mobile"
        aria-hidden={!menuOpen}
      >
        <div className="nav-mobile__top">
          <Logo />
          <button type="button" className="nav-mobile__close" aria-label="Close menu" onClick={closeMenu}>
            ×
          </button>
        </div>
        <div className="nav-mobile__links">
          {NAV_MEGA_MENUS.map((menu) => (
            <MobileMegaSection
              key={menu.id}
              menu={menu}
              pathname={location.pathname}
              expanded={Boolean(mobileExpanded[menu.id])}
              onToggle={() => toggleMobileSection(menu.id)}
              onNavigate={closeMenu}
            />
          ))}
          {NAV_SIMPLE_LINKS.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              pathname={location.pathname}
              className="nav-mobile__link"
              onNavigate={closeMenu}
            />
          ))}
        </div>
        <div className="nav-mobile__cta">
          <Link to="/login" className="btn btn--outline" onClick={closeMenu}>
            Login
          </Link>
          <Link to={{ pathname: "/", hash: "#contact" }} className="btn btn--accent" onClick={closeMenu}>
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
}
