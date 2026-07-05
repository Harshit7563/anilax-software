import { Link } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import { IndustryIcon } from "../components/icons/catalogIcons";
import { INDUSTRIES, INDUSTRIES_HERO } from "../data/industryPages";
import "../styles/marketing-hub.css";

export function IndustriesPage() {
  return (
    <div className="hub-page">
      <section className="hub-hero">
        <div className="hub-hero__mesh" aria-hidden="true" />
        <p className="hub-hero__eyebrow">{INDUSTRIES_HERO.eyebrow}</p>
        <h1 className="hub-hero__title">{INDUSTRIES_HERO.title}</h1>
        <p className="hub-hero__sub">{INDUSTRIES_HERO.subtitle}</p>
        <div className="hub-hero__actions">
          <Link to="/#contact" className="btn btn--accent">
            Discuss your industry →
          </Link>
          <Link to="/services" className="btn btn--ghost btn--ghost-dark">
            View all services
          </Link>
        </div>
        <div className="hub-hero__stats">
          {INDUSTRIES_HERO.stats.map((s) => (
            <div key={s.label} className="hub-stat-pill">
              <span className="hub-stat-pill__value">{s.value}</span>
              <span className="hub-stat-pill__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="hub-section">
        <div className="hub-section__inner">
          <div className="hub-section__head">
            <p className="section-label">Industries</p>
            <h2 className="section-title">Specialised where it matters most</h2>
            <p className="section-sub">
              We&apos;ve shipped products across fintech, healthcare, logistics, education, retail,
              hospitality, real estate, manufacturing, and on-demand — with domain-aware teams.
            </p>
          </div>
          <div className="hub-grid hub-grid--industries">
            {INDUSTRIES.map((item) => (
              <article key={item.id} className="hub-card hub-card--industry">
                <IndustryIcon id={item.id} size="md" className="hub-card__icon" />
                <h3>{item.title}</h3>
                <p className="hub-card__tagline">{item.tagline}</p>
                <p className="hub-card__desc">{item.summary}</p>
                <Link to={`/industries/${item.id}`} className="hub-card__link">
                  Industry solutions →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hub-cta">
        <div className="hub-cta__inner">
          <h2>Don&apos;t see your industry?</h2>
          <p>We build custom software for any vertical — manufacturing, media, MLM, agriculture, and more.</p>
          <ConnectButton className="btn btn--accent btn--connect" />
        </div>
      </section>
    </div>
  );
}
