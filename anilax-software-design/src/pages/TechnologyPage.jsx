import { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import {
  TECH_HERO,
  TECH_STATS,
  TECH_CATEGORIES,
  TECH_PROCESS,
} from "../data/technologyStack";
import "../styles/technology.css";

export function TechnologyPage() {
  const [activeCat, setActiveCat] = useState(TECH_CATEGORIES[0].id);

  return (
    <div className="tech-page">
      <section className="tech-hero">
        <div className="tech-hero__orb" aria-hidden="true" />
        <p className="tech-hero__eyebrow">{TECH_HERO.eyebrow}</p>
        <h1 className="tech-hero__title">
          Modern stack for{" "}
          <span className="gradient">development & design</span>
        </h1>
        <p className="tech-hero__sub">{TECH_HERO.subtitle}</p>
        <div className="tech-hero__actions">
          <Link to="/software" className="btn btn--gradient">
            Our solutions
          </Link>
          <a href="#stack" className="btn btn--ghost btn--ghost-dark">
            View tech stack
          </a>
        </div>
        <div className="tech-hero__stats">
          {TECH_STATS.map((s) => (
            <div key={s.label} className="tech-stat-pill">
              <span className="tech-stat-pill__value">{s.value}</span>
              <span className="tech-stat-pill__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tech-marquee-section" aria-hidden="true">
        <div className="tech-marquee">
          <div className="tech-marquee__track">
            {TECH_CATEGORIES.flatMap((c) => c.items)
              .concat(TECH_CATEGORIES.flatMap((c) => c.items))
              .map((item, i) => (
                <span key={`${item}-${i}`} className="tech-marquee__chip">
                  {item}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="tech-stack" id="stack">
        <div className="tech-stack__inner">
          <div className="tech-stack__sidebar">
            <p className="section-label">Tech stack</p>
            <nav className="tech-cat-nav">
              {TECH_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`tech-cat-nav__btn ${activeCat === cat.id ? "tech-cat-nav__btn--active" : ""}`}
                  onClick={() => setActiveCat(cat.id)}
                >
                  <span>{cat.icon}</span>
                  {cat.title}
                </button>
              ))}
            </nav>
          </div>

          <div className="tech-stack__main">
            {TECH_CATEGORIES.map((cat) =>
              activeCat === cat.id ? (
                <article key={cat.id} className="tech-category-panel">
                  <div className="tech-category-panel__head">
                    <span className="tech-category-panel__icon">{cat.icon}</span>
                    <div>
                      <h2>{cat.title}</h2>
                      <p>{cat.desc}</p>
                    </div>
                  </div>
                  <div className="tech-items-grid">
                    {cat.items.map((item) => (
                      <span key={item} className="tech-item-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ) : null
            )}
          </div>
        </div>
      </section>

      <section className="tech-all-grid">
        <div className="tech-all-grid__inner">
          <p className="section-label">Full overview</p>
          <h2 className="section-title">Everything we work with</h2>
          <div className="tech-all-cards">
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.id} className="tech-all-card">
                <h3>
                  <span>{cat.icon}</span> {cat.title}
                </h3>
                <div className="tech-all-card__items">
                  {cat.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-process">
        <div className="tech-process__inner">
          <p className="section-label">How we build</p>
          <h2 className="section-title">Design to deployment</h2>
          <div className="tech-process__grid">
            {TECH_PROCESS.map((p) => (
              <article key={p.step} className="tech-process-card">
                <span className="tech-process-card__num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-cta">
        <div className="tech-cta__inner">
          <h2>Need a team that speaks your stack?</h2>
          <p>Tell us your languages, frameworks, or design tools — we align with your roadmap.</p>
          <div className="tech-cta__actions">
            <ConnectButton className="btn btn--gradient btn--connect" />
            <Link to="/software" className="btn btn--outline">
              Software solutions →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
