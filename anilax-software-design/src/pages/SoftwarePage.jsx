import { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import { SoftwareProductIcon } from "../components/icons/catalogIcons";
import { useContactModal } from "../context/ContactModalContext";
import {
  SOFTWARE_HERO,
  SOFTWARE_STATS,
  PAYMENT_SOLUTIONS,
  BUSINESS_SOLUTIONS,
  CUSTOM_OFFER,
} from "../data/softwareServices";
import "../styles/software.css";

const FILTERS = [
  { id: "all", label: "All solutions" },
  { id: "payments", label: "Payment solutions" },
  { id: "business", label: "Software solutions" },
];

export function SoftwarePage() {
  const { openContact } = useContactModal();
  const [filter, setFilter] = useState("all");

  const showPayments = filter === "all" || filter === "payments";
  const showBusiness = filter === "all" || filter === "business";

  return (
    <div className="software-page">
      <section className="software-hero">
        <div className="software-hero__mesh" aria-hidden="true" />
        <div className="software-hero__grid" aria-hidden="true" />
        <p className="software-hero__eyebrow">{SOFTWARE_HERO.eyebrow}</p>
        <h1 className="software-hero__title">
          Custom software & apps,{" "}
          <span className="gradient">engineered to ship</span>
        </h1>
        <p className="software-hero__sub">{SOFTWARE_HERO.subtitle}</p>
        <div className="software-hero__actions">
          <Link to={SOFTWARE_HERO.ctaPrimary.href} className="btn btn--gradient">
            {SOFTWARE_HERO.ctaPrimary.label}
          </Link>
          <Link to={SOFTWARE_HERO.ctaSecondary.href} className="btn btn--ghost btn--ghost-dark">
            {SOFTWARE_HERO.ctaSecondary.label}
          </Link>
        </div>
        <div className="software-hero__stats">
          {SOFTWARE_STATS.map((s) => (
            <div key={s.label} className="software-stat-pill">
              <span className="software-stat-pill__value">{s.value}</span>
              <span className="software-stat-pill__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="software-filter-bar" id="solutions">
        <div className="software-filter-bar__inner">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`software-filter ${filter === f.id ? "software-filter--active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {showPayments && (
        <section className="software-section" id="payments">
          <div className="software-section__inner">
            <div className="software-section__head">
              <p className="section-label">Payment solutions</p>
              <h2 className="section-title">Rails, gateways & merchant tech</h2>
              <p className="section-sub">
                Full-stack payment products — from UPI apps to subscription billing.
              </p>
            </div>
            <div className="software-bento">
              {PAYMENT_SOLUTIONS.map((item, i) => (
                <article
                  key={item.id}
                  className={`software-card software-card--payment ${i === 0 ? "software-card--featured" : ""}`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <SoftwareProductIcon id={item.id} size="md" className="software-card__icon" />
                  <div className="software-card__tags">
                    {item.tags.map((t) => (
                      <span key={t} className="software-card__tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <p className="software-card__tagline">{item.tagline}</p>
                  <p className="software-card__desc">{item.desc}</p>
                  <div className="software-card__actions">
                    <Link to={`/software/${item.id}`} className="software-card__read-more">
                      Read more
                    </Link>
                    <Link to={`/blog/software-${item.id}`} className="software-card__blog">
                      Full guide
                    </Link>
                    <button
                      type="button"
                      className="software-card__link"
                      onClick={openContact}
                    >
                      Get a quote →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {showBusiness && (
        <section className="software-section software-section--alt" id="business">
          <div className="software-section__inner">
            <div className="software-section__head">
              <p className="section-label">Software solutions</p>
              <h2 className="section-title">Products for every industry</h2>
              <p className="section-sub">
                ERP, CRM, HRMS, healthcare, retail, logistics, hospitality, ed-tech, portals, mobile apps,
                and every major software category a full-stack company delivers — ready-made or custom.
              </p>
            </div>
            <div className="software-grid">
              {BUSINESS_SOLUTIONS.map((item, i) => (
                <article
                  key={item.id}
                  className="software-card software-card--business"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <SoftwareProductIcon id={item.id} size="md" className="software-card__icon" />
                  <h3>{item.title}</h3>
                  <p className="software-card__tagline">{item.tagline}</p>
                  <p className="software-card__desc">{item.desc}</p>
                  <div className="software-card__tags">
                    {item.tags.map((t) => (
                      <span key={t} className="software-card__tag software-card__tag--muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="software-card__actions">
                    <Link to={`/software/${item.id}`} className="software-card__read-more">
                      Read more
                    </Link>
                    <Link to={`/blog/software-${item.id}`} className="software-card__blog">
                      Full guide
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="software-custom">
        <div className="software-custom__inner">
          <div className="software-custom__glow" aria-hidden="true" />
          <div className="software-custom__content">
            <p className="section-label">Beyond the catalog</p>
            <h2 className="software-custom__title">{CUSTOM_OFFER.title}</h2>
            <p className="software-custom__desc">{CUSTOM_OFFER.desc}</p>
            <ul className="software-custom__list">
              {CUSTOM_OFFER.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <ConnectButton className="btn btn--gradient btn--connect" />
          </div>
          <div className="software-custom__visual">
            <div className="software-code-window">
              <div className="software-code-window__bar">
                <span /><span /><span />
                <span className="software-code-window__title">anilax-project</span>
              </div>
              <pre>
                <code>{`// Your idea → Our stack
const project = await anilax.build({
  type: 'custom',
  stack: ['React', 'Node.js'],
  deploy: 'cloud',
});

// Ship with confidence ✓`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="software-marquee-wrap">
        <p className="software-marquee-label">We also build</p>
        <div className="software-marquee">
          <div className="software-marquee__track">
            {[...PAYMENT_SOLUTIONS, ...BUSINESS_SOLUTIONS].map((s) => (
              <span key={s.id} className="software-marquee__item">
                {s.title}
              </span>
            ))}
            {[...PAYMENT_SOLUTIONS, ...BUSINESS_SOLUTIONS].map((s) => (
              <span key={`${s.id}-dup`} className="software-marquee__item">
                {s.title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
