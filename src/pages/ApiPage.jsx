import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContactModal } from "../context/ContactModalContext";
import {
  API_HERO,
  API_STATS,
  API_FEATURES,
  API_CATEGORIES,
  API_WEBHOOKS,
  API_CODE_SAMPLE,
  PAYMENT_API_CATALOG,
  SMS_API_CATALOG,
  VERIFICATION_API_CATALOG,
  BBPS_API_CATALOG,
  BBPS_CATEGORIES,
} from "../data/apiCatalog";
import { B2B_API_CATALOG, B2B_CATEGORIES } from "../data/b2bAeps";
import { B2C_API_CATALOG, B2C_CATEGORIES } from "../data/b2cApps";
import { CatalogApiCard } from "../components/CatalogApiCard";
import { LegacyEndpointCard } from "../components/LegacyEndpointCard";
import "../styles/api-page.css";

const API_CATALOG_CARDS = {
  b2b: B2B_API_CATALOG,
  b2c: B2C_API_CATALOG,
  payment: PAYMENT_API_CATALOG,
  sms: SMS_API_CATALOG,
  verification: VERIFICATION_API_CATALOG,
  bbps: BBPS_API_CATALOG,
};

const API_CATALOG_CATEGORIES = {
  b2b: B2B_CATEGORIES,
  b2c: B2C_CATEGORIES,
  bbps: BBPS_CATEGORIES,
};

const FILTERS = [
  { id: "all", label: "All APIs" },
  ...API_CATEGORIES.map((c) => ({ id: c.id, label: c.title.replace(" APIs", "") })),
];

function categoryFromHash(hash) {
  const id = hash.replace("#", "");
  return API_CATEGORIES.some((c) => c.id === id) ? id : null;
}

export function ApiPage() {
  const { openContact } = useContactModal();
  const location = useLocation();
  const [filter, setFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState(
    () => categoryFromHash(window.location.hash) ?? API_CATEGORIES[0].id,
  );

  useEffect(() => {
    const id = categoryFromHash(location.hash);
    if (id) {
      setActiveCategory(id);
      setFilter("all");
    }
  }, [location.hash]);

  const selectCategory = (id) => {
    setActiveCategory(id);
    setFilter("all");
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", `${location.pathname}${nextHash}`);
    }
  };

  const selectFilter = (id) => {
    setFilter(id);
    if (id === "all") {
      window.history.replaceState(null, "", `${location.pathname}#catalog`);
      return;
    }
    setActiveCategory(id);
    window.history.replaceState(null, "", `${location.pathname}#${id}`);
  };

  const visibleCategories =
    filter === "all"
      ? API_CATEGORIES
      : API_CATEGORIES.filter((c) => c.id === filter);

  return (
    <div className="api-page">
      <section className="api-page-hero">
        <div className="api-page-hero__circuit" aria-hidden="true" />
        <p className="api-page-hero__eyebrow">{API_HERO.eyebrow}</p>
        <h1 className="api-page-hero__title">
          Every fintech API{" "}
          <span className="gradient">your product needs</span>
        </h1>
        <p className="api-page-hero__sub">{API_HERO.subtitle}</p>
        <div className="api-page-hero__actions">
          <Link to="/signup" className="btn btn--gradient">
            Get API keys
          </Link>
          <Link to="/sdks" className="btn btn--ghost btn--ghost-dark">
            SDKs
          </Link>
          <Link to="/docs" className="btn btn--ghost btn--ghost-dark">
            API documentation
          </Link>
        </div>
        <div className="api-page-hero__stats">
          {API_STATS.map((s) => (
            <div key={s.label} className="api-stat-pill">
              <span className="api-stat-pill__value">{s.value}</span>
              <span className="api-stat-pill__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="api-features-strip">
        <div className="api-features-strip__inner">
          {API_FEATURES.map((f) => (
            <div key={f.title} className="api-feature-chip">
              <strong>{f.title}</strong>
              <span>{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="api-filter-bar" id="catalog">
        <div className="api-filter-bar__inner">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`api-filter ${filter === f.id ? "api-filter--active" : ""}`}
              onClick={() => selectFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="api-catalog">
        <div className="api-catalog__inner">
          <div className="api-catalog__sidebar">
            <p className="section-label">API catalog</p>
            <nav className="api-cat-nav">
              {visibleCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`api-cat-nav__item ${activeCategory === cat.id ? "api-cat-nav__item--active" : ""}`}
                  onClick={() => selectCategory(cat.id)}
                >
                  <span className="api-cat-nav__icon">{cat.icon}</span>
                  {cat.title}
                </button>
              ))}
            </nav>
          </div>

          <div className="api-catalog__main">
            {visibleCategories
              .filter((cat) => (filter === "all" ? cat.id === activeCategory : true))
              .map((cat) => (
                <article
                  key={cat.id}
                  id={cat.id}
                  className="api-category-block api-category-block--active"
                >
                  <div className="api-category-block__head">
                    <span className="api-category-block__icon">{cat.icon}</span>
                    <div>
                      <h2>{cat.title}</h2>
                      <p className="api-category-block__tagline">{cat.tagline}</p>
                      <p className="api-category-block__desc">{cat.desc}</p>
                    </div>
                  </div>
                  {API_CATALOG_CARDS[cat.id] ? (
                    <>
                      {API_CATALOG_CATEGORIES[cat.id] && (
                        <div className="api-catalog-categories">
                          <p className="api-catalog-categories__label">Categories</p>
                          <ul className="api-catalog-categories__list">
                            {API_CATALOG_CATEGORIES[cat.id].map((name) => (
                              <li key={name}>{name}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="api-endpoint-grid">
                        {API_CATALOG_CARDS[cat.id].map((row) => (
                          <CatalogApiCard
                            key={row.type}
                            apiName={row.type}
                            useCase={row.useCase}
                            categoryId={cat.id}
                            categoryTitle={cat.title}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="api-endpoint-grid">
                      {cat.apis.map((api) => (
                        <LegacyEndpointCard
                          key={api.path}
                          api={api}
                          categoryId={cat.id}
                          categoryTitle={cat.title}
                        />
                      ))}
                    </div>
                  )}
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="api-playground" id="keys">
        <div className="api-playground__inner">
          <div className="api-playground__content">
            <p className="section-label">Quick start</p>
            <h2 className="section-title">Ship your first call in minutes</h2>
            <p className="section-sub">
              Sandbox keys are free. Use test mode endpoints and webhooks before going live.
            </p>
            <ul className="api-playground__list">
              <li>Register at dashboard.anilax.com</li>
              <li>Copy <code>sk_test_</code> or <code>sk_live_</code> keys</li>
              <li>Point webhooks to your HTTPS endpoint</li>
            </ul>
            <Link to="/login" className="btn btn--gradient">
              Sign in for API access
            </Link>
          </div>
          <pre className="api-panel api-panel--large">
            <code>{API_CODE_SAMPLE}</code>
          </pre>
        </div>
      </section>

      <section className="api-webhooks">
        <div className="api-webhooks__inner">
          <p className="section-label">Webhooks</p>
          <h2 className="section-title">Real-time event delivery</h2>
          <p className="section-sub">
            Subscribe once — receive signed payloads for payments, payouts, KYC, BBPS, and settlements.
          </p>
          <div className="api-webhook-tags">
            {API_WEBHOOKS.map((ev) => (
              <span key={ev} className="api-webhook-tag">
                {ev}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="api-cta-block">
        <div className="api-cta-block__inner">
          <h2>Need a custom endpoint or private rail?</h2>
          <p>We build bespoke APIs for enterprises — white-label, dedicated infra, and SLA-backed support.</p>
          <div className="api-cta-block__actions">
            <button type="button" className="btn btn--gradient btn--connect" onClick={openContact}>
              Connect With Us
              <span className="connect-dot" aria-hidden="true" />
            </button>
            <Link to="/software" className="btn btn--outline">
              Software Development →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
