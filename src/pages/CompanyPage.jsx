import { Link } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import {
  COMPANY_LEGAL,
  COMPANY_OFFICE,
  COMPANY_PHONE_TEL,
  COMPANY_HERO,
  COMPANY_MISSION,
  COMPANY_STATS,
  COMPANY_VALUES,
  COMPANY_OFFERINGS,
} from "../data/company";
import "../styles/company.css";

export function CompanyPage() {
  return (
    <div className="company-page">
      <section className="company-hero">
        <div className="company-hero__bg" aria-hidden="true" />
        <p className="company-hero__eyebrow">{COMPANY_HERO.eyebrow}</p>
        <h1 className="company-hero__title">
          {COMPANY_LEGAL.brand}
          <span className="gradient"> — who we are</span>
        </h1>
        <p className="company-hero__sub">{COMPANY_HERO.subtitle}</p>
        <div className="company-hero__stats">
          {COMPANY_STATS.map((s) => (
            <div key={s.label} className="company-stat">
              <span className="company-stat__value">{s.value}</span>
              <span className="company-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="company-section" id="about">
        <div className="company-section__inner">
          <div className="company-about">
            <p className="section-label">About us</p>
            <h2 className="section-title">{COMPANY_LEGAL.name}</h2>
            <p className="company-about__text">
              {COMPANY_LEGAL.brand} is a private limited company incorporated in Rajasthan,
              focused on fintech platforms, payment systems, and custom software for B2B, B2C,
              and developer ecosystems. We combine banking-grade infrastructure with
              product engineering and design — so partners can launch and scale faster.
            </p>
            <ul className="company-facts">
              <li>
                <span>Incorporated</span>
                <strong>{COMPANY_LEGAL.incorporated}</strong>
              </li>
              <li>
                <span>Registrar</span>
                <strong>{COMPANY_LEGAL.roc}</strong>
              </li>
              <li>
                <span>Status</span>
                <strong>{COMPANY_LEGAL.status}</strong>
              </li>
              <li>
                <span>Industry</span>
                <strong>{COMPANY_LEGAL.industry}</strong>
              </li>
            </ul>
          </div>
          <div className="company-offerings-card">
            <h3>What we deliver</h3>
            {COMPANY_OFFERINGS.map((o) => (
              <div key={o.title} className="company-offering-row">
                <strong>{o.title}</strong>
                <p>{o.text}</p>
              </div>
            ))}
            <div className="company-quick-links">
              <Link to="/stories">Our Stories →</Link>
              <Link to="/b2b">B2B →</Link>
              <Link to="/api">API →</Link>
              <Link to="/software">Software →</Link>
              <Link to="/technology">Technology →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section company-section--alt" id="mission">
        <div className="company-section__inner company-mission">
          <div className="company-mission-card">
            <p className="section-label">Mission</p>
            <p className="company-mission__quote">{COMPANY_MISSION.mission}</p>
          </div>
          <div className="company-mission-card">
            <p className="section-label">Vision</p>
            <p className="company-mission__quote">{COMPANY_MISSION.vision}</p>
          </div>
        </div>
      </section>

      <section className="company-section" id="values">
        <div className="company-section__inner">
          <p className="section-label">Values</p>
          <h2 className="section-title">What drives us</h2>
          <div className="company-values-grid">
            {COMPANY_VALUES.map((v) => (
              <article key={v.title} className="company-value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section company-section--dark" id="office">
        <div className="company-section__inner company-office-block">
          <div>
            <p className="section-label">Office</p>
            <h2 className="section-title">{COMPANY_OFFICE.title}</h2>
            <address className="company-address">
              {COMPANY_OFFICE.lines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <a
              href="https://maps.google.com/?q=Mall+of+Jaipur+Vaishali+Nagar+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline company-map-btn"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="company-map-card" aria-hidden="true">
            <span className="company-map-card__pin">📍</span>
            <p>Vaishali Nagar, Jaipur</p>
            <span>Rajasthan, India</span>
          </div>
        </div>
      </section>

      <section className="company-section" id="legal">
        <div className="company-section__inner">
          <p className="section-label">Legal</p>
          <h2 className="section-title">Corporate information</h2>
          <div className="company-legal-grid">
            <div className="company-legal-item">
              <span>Legal name</span>
              <strong>{COMPANY_LEGAL.name}</strong>
            </div>
            <div className="company-legal-item">
              <span>CIN</span>
              <strong>{COMPANY_LEGAL.cin}</strong>
            </div>
            <div className="company-legal-item">
              <span>GSTIN</span>
              <strong>{COMPANY_LEGAL.gstin}</strong>
            </div>
            <div className="company-legal-item">
              <span>Authorized capital</span>
              <strong>{COMPANY_LEGAL.authorizedCapital}</strong>
            </div>
          </div>
          <p className="company-disclaimer">
            {COMPANY_LEGAL.brand} is a financial technology company. Banking and payment
            services are provided through licensed partners and regulated institutions
            where applicable.
          </p>
        </div>
      </section>

      <section className="company-section company-section--alt" id="careers">
        <div className="company-section__inner company-careers">
          <div>
            <p className="section-label">Careers</p>
            <h2 className="section-title">Join our team</h2>
            <p className="section-sub">
              We hire engineers, designers, and fintech specialists in Jaipur and remote.
              Send your profile — we&apos;re always looking for builders.
            </p>
          </div>
          <ConnectButton className="btn btn--gradient" showDot={false}>
            Apply / Contact HR
          </ConnectButton>
        </div>
      </section>

      <section className="company-cta" id="contact">
        <div className="company-cta__inner">
          <h2>Let&apos;s build together</h2>
          <p>Partnerships, products, or APIs — we&apos;d love to hear from you.</p>
          <div className="company-cta__actions">
            <ConnectButton className="btn btn--gradient btn--connect" />
            <a href={`tel:${COMPANY_PHONE_TEL}`} className="btn btn--ghost btn--ghost-dark">
              Call us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
