import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import { TechCategoryIcon } from "../components/icons/catalogIcons";
import {
  TECH_HERO,
  TECH_STATS,
  TECH_PHILOSOPHY,
  TECH_CATEGORIES,
  TECH_PRESETS,
  TECH_SECURITY,
  TECH_ENGINEERING,
  TECH_PROCESS,
  TECH_FAQ,
  getTechItemName,
  getAllTechNames,
} from "../data/technologyStack";
import "../styles/technology.css";

export function TechnologyPage() {
  const { hash } = useLocation();
  const [activeCat, setActiveCat] = useState(TECH_CATEGORIES[0].id);

  useEffect(() => {
    const id = hash.replace("#", "");
    if (id && TECH_CATEGORIES.some((c) => c.id === id)) {
      setActiveCat(id);
    }
  }, [hash]);

  const marqueeItems = getAllTechNames();

  const scrollToCategory = (id) => {
    setActiveCat(id);
    window.history.replaceState(null, "", `/technology#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
            Explore stack
          </a>
          <a href="#presets" className="btn btn--ghost btn--ghost-dark">
            Stack presets
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
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={`${item}-${i}`} className="tech-marquee__chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-philosophy">
        <div className="tech-philosophy__inner">
          <p className="section-label">Our approach</p>
          <h2 className="section-title">How we choose technology</h2>
          <p className="section-sub tech-philosophy__lead">
            Every project starts with your business flow, compliance needs, and team — then we
            architect a stack that ships reliably and scales with you.
          </p>
          <div className="tech-philosophy__grid">
            {TECH_PHILOSOPHY.map((item) => (
              <article key={item.title} className="tech-philosophy-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack" id="stack">
        <div className="tech-stack__inner">
          <div className="tech-stack__sidebar">
            <p className="section-label">Tech stack</p>
            <h2 className="tech-stack__sidebar-title">8 categories</h2>
            <nav className="tech-cat-nav" aria-label="Technology categories">
              {TECH_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`tech-cat-nav__btn ${activeCat === cat.id ? "tech-cat-nav__btn--active" : ""}`}
                  onClick={() => scrollToCategory(cat.id)}
                >
                  <TechCategoryIcon id={cat.id} size="sm" />
                  {cat.title}
                </button>
              ))}
            </nav>
          </div>

          <div className="tech-stack__main">
            {TECH_CATEGORIES.map((cat) => (
              <article key={cat.id} id={cat.id} className="tech-category-panel">
                <div className="tech-category-panel__head">
                  <TechCategoryIcon id={cat.id} size="md" className="tech-category-panel__icon" />
                  <div>
                    <h2>{cat.title}</h2>
                    <p>{cat.desc}</p>
                  </div>
                </div>

                <p className="tech-category-panel__summary">{cat.summary}</p>

                <div className="tech-category-panel__meta">
                  <div className="tech-category-panel__block">
                    <h3>Why we use it</h3>
                    <ul>
                      {cat.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tech-category-panel__block">
                    <h3>Common use cases</h3>
                    <div className="tech-use-tags">
                      {cat.useCases.map((u) => (
                        <span key={u}>{u}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="tech-category-panel__tools-title">Tools & technologies</h3>
                <div className="tech-tools-grid">
                  {cat.items.map((item) => (
                    <div key={getTechItemName(item)} className="tech-tool-card">
                      <strong>{getTechItemName(item)}</strong>
                      {typeof item === "object" && item.desc && <p>{item.desc}</p>}
                      {typeof item === "object" && item.tags && (
                        <div className="tech-tool-card__tags">
                          {item.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-presets" id="presets">
        <div className="tech-presets__inner">
          <p className="section-label">Recommended stacks</p>
          <h2 className="section-title">Presets for common project types</h2>
          <p className="section-sub">
            Starting points we customize after discovery — not rigid templates, but proven
            architectures we&apos;ve shipped for fintech, ERP, mobile, and SaaS clients.
          </p>
          <div className="tech-presets__grid">
            {TECH_PRESETS.map((preset) => (
              <article key={preset.id} className="tech-preset-card">
                <h3>{preset.title}</h3>
                <p className="tech-preset-card__desc">{preset.desc}</p>
                <div className="tech-preset-card__layers">
                  {preset.layers.map((layer) => (
                    <div key={layer.label} className="tech-preset-layer">
                      <span className="tech-preset-layer__label">{layer.label}</span>
                      <div className="tech-preset-layer__items">
                        {layer.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-security" id="security">
        <div className="tech-security__inner">
          <div className="tech-security__head">
            <p className="section-label">Security & compliance</p>
            <h2 className="section-title">Built for regulated workloads</h2>
            <p className="section-sub">
              Fintech, healthcare, and enterprise clients need more than features — they need
              audit trails, encryption, and architecture that respects partner-bank requirements.
            </p>
          </div>
          <div className="tech-security__grid">
            {TECH_SECURITY.map((item) => (
              <article key={item.title} className="tech-security-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-engineering" id="engineering">
        <div className="tech-engineering__inner">
          <p className="section-label">Engineering lifecycle</p>
          <h2 className="section-title">From discovery to long-term support</h2>
          <div className="tech-engineering__grid">
            {TECH_ENGINEERING.map((step) => (
              <article key={step.step} className="tech-engineering-card">
                <span className="tech-engineering-card__num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-all-grid">
        <div className="tech-all-grid__inner">
          <p className="section-label">Quick reference</p>
          <h2 className="section-title">Everything at a glance</h2>
          <div className="tech-all-cards">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className="tech-all-card"
                onClick={() => scrollToCategory(cat.id)}
              >
                <h3>
                  <TechCategoryIcon id={cat.id} size="sm" /> {cat.title}
                </h3>
                <div className="tech-all-card__items">
                  {cat.items.map((item) => (
                    <span key={getTechItemName(item)}>{getTechItemName(item)}</span>
                  ))}
                </div>
                <span className="tech-all-card__link">View details →</span>
              </button>
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

      <section className="tech-faq" id="faq">
        <div className="tech-faq__inner">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common technology questions</h2>
          <div className="tech-faq__list">
            {TECH_FAQ.map((item) => (
              <details key={item.q} className="tech-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-cta">
        <div className="tech-cta__inner">
          <h2>Need a team that speaks your stack?</h2>
          <p>
            Share your languages, frameworks, compliance needs, or a greenfield idea — we&apos;ll
            propose architecture, timeline, and a team that fits.
          </p>
          <div className="tech-cta__actions">
            <ConnectButton className="btn btn--gradient btn--connect" />
            <Link to="/software" className="btn btn--outline">
              Software solutions →
            </Link>
            <Link to="/services" className="btn btn--outline">
              Our services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
