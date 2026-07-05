import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { MegaMenuIcon, MobileMegaItemIcon } from "./icons/catalogIcons";

function getPanelTop() {
  const header = document.querySelector(".header");
  if (!header) return 72;
  return header.getBoundingClientRect().bottom + 10;
}

export function NavMegaPanel({ menu, open, onClose }) {
  const [top, setTop] = useState(72);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    if (!open) {
      setReady(false);
      return undefined;
    }

    const update = () => {
      setTop(getPanelTop());
      setReady(true);
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, menu.id]);

  if (!open) return null;

  return createPortal(
    <div className="header-mega-panel" data-menu={menu.id} role="presentation">
      <button type="button" className="header-mega-panel__backdrop" aria-label="Close menu" onClick={onClose} />
      <div
        className={`header-mega-panel__inner ${ready ? "header-mega-panel__inner--ready" : ""}`}
        style={{ top }}
        role="menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header-mega-panel__head">
          <p>{menu.label}</p>
          <Link to={menu.basePath} className="header-mega-panel__all" onClick={onClose}>
            View all →
          </Link>
        </div>
        <ul className="header-mega-panel__grid">
          {menu.items.map((item) => (
            <li key={item.id}>
              <Link to={item.href} className="header-mega-panel__item" onClick={onClose}>
                <MegaMenuIcon menuId={menu.id} item={item} />
                <span className="header-mega-panel__text">
                  <strong>{item.title}</strong>
                  <span>{item.tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
}

export function NavMegaTrigger({ menu, open, active, onOpen, onToggle }) {
  return (
    <button
      type="button"
      className={`nav-mega-btn ${open ? "nav-mega-btn--open" : ""} ${active ? "nav-active" : ""}`}
      aria-expanded={open}
      aria-haspopup="true"
      data-menu={menu.id}
      onMouseEnter={onOpen}
      onClick={onToggle}
    >
      {menu.label}
      <span className="nav-mega-btn__chevron" aria-hidden>
        ▾
      </span>
    </button>
  );
}

export function MobileMegaSection({ menu, pathname, expanded, onToggle, onNavigate }) {
  const active = pathname === menu.basePath || menu.items.some((item) => item.href === pathname);

  return (
    <div className="nav-mobile__group">
      <button
        type="button"
        className={`nav-mobile__link nav-mobile__link--expand ${active || expanded ? "nav-active" : ""}`}
        aria-expanded={expanded}
        onClick={onToggle}
      >
        {menu.label}
        <span aria-hidden>{expanded ? "−" : "+"}</span>
      </button>
      {expanded && (
        <div className="nav-mobile__services">
          <Link
            to={menu.basePath}
            className={`nav-mobile__service nav-mobile__service--all ${pathname === menu.basePath ? "nav-active" : ""}`}
            onClick={onNavigate}
          >
            View all {menu.label.toLowerCase()}
          </Link>
          {menu.items.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`nav-mobile__service ${pathname === item.href ? "nav-active" : ""}`}
              onClick={onNavigate}
            >
              <MobileMegaItemIcon menuId={menu.id} item={item} />
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
