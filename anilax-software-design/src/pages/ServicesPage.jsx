import { Link } from "react-router-dom";
import { ServiceLineIcon } from "../components/ServiceLineIcon";
import { SERVICE_LINES, SERVICES_HERO } from "../data/serviceLines";
import { useContactModal } from "../context/ContactModalContext";
import "../styles/marketing-hub.css";
import "../styles/service-detail.css";

export function ServicesPage() {
  const { openContact } = useContactModal();

  return (
    <div className="hub-page">
      <section className="hub-hero">
        <div className="hub-hero__mesh" aria-hidden="true" />
        <p className="hub-hero__eyebrow">{SERVICES_HERO.eyebrow}</p>
        <h1 className="hub-hero__title">{SERVICES_HERO.title}</h1>
        <p className="hub-hero__sub">{SERVICES_HERO.subtitle}</p>
        <div className="hub-hero__actions">
          <button type="button" className="btn btn--accent" onClick={() => openContact()}>
            Book a consultation →
          </button>
          <Link to="/software" className="btn btn--ghost btn--ghost-dark">
            Product catalog
          </Link>
        </div>
        <div className="hub-hero__stats">
          {SERVICES_HERO.stats.map((s) => (
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
            <p className="section-label">Services</p>
            <h2 className="section-title">All service lines</h2>
            <p className="section-sub">
              Each service has a dedicated page with scope, process, deliverables, and FAQs — browse
              all {SERVICE_LINES.length} offerings.
            </p>
          </div>
          <div className="hub-grid hub-grid--services">
            {SERVICE_LINES.map((item) => (
              <Link key={item.id} to={`/services/${item.id}`} className="hub-card hub-card--link">
                <ServiceLineIcon id={item.id} size="md" className="hub-card__icon" />
                <h3>{item.title}</h3>
                <p className="hub-card__tagline">{item.tagline}</p>
                <p className="hub-card__desc">{item.summary}</p>
                <span className="hub-card__link">View full service page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hub-cta">
        <div className="hub-cta__inner">
          <h2>Not sure which service fits?</h2>
          <p>Tell us your goal — we will recommend the right stack and team model.</p>
          <button type="button" className="btn btn--accent" onClick={() => openContact()}>
            Book a free consultation
          </button>
        </div>
      </section>
    </div>
  );
}
