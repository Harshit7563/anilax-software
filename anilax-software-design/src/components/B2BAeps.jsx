import { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "./ConnectButton";
import { CatalogApiCard } from "./CatalogApiCard";
import { AepsFingerprintIcon } from "./AepsFingerprintIcon";
import { B2BServiceIcon } from "./B2BServiceIcon";
import { B2BSolutionIcon } from "./B2BSolutionIcon";
import {
  B2B_HERO,
  B2B_AEPS_EXPLAINER,
  B2B_CLIENT_BENEFITS,
  B2B_SERVICES,
  B2B_SOLUTIONS,
  B2B_ONBOARDING,
  B2B_COMPLIANCE,
  B2B_HOW_IT_WORKS,
  B2B_WHY,
  B2B_STATS,
  B2B_FAQ,
  B2B_CONTACT_STRIP,
  B2B_API_CATALOG,
  B2B_CATEGORIES,
} from "../data/b2bAeps";

export function B2BAeps({ showHero = true }) {
  const [howTab, setHowTab] = useState("portal");
  const how = howTab === "portal" ? B2B_HOW_IT_WORKS.portal : B2B_HOW_IT_WORKS.api;

  return (
    <section className="b2b-aeps">
      <div className="b2b-aeps__inner">
        {showHero && (
          <div className="b2b-aeps__hero">
            <AepsFingerprintIcon size={56} className="b2b-aeps__fp" />
            <p className="section-label">{B2B_HERO.eyebrow}</p>
            <h2 className="section-title">{B2B_HERO.title}</h2>
            <p className="section-sub b2b-aeps__intro">{B2B_HERO.subtitle}</p>
            <div className="b2b-aeps__actions">
              <a href={B2B_HERO.ctaPrimary.href} className="btn btn--gradient">
                {B2B_HERO.ctaPrimary.label}
              </a>
              <a href={B2B_HERO.ctaSecondary.href} className="btn btn--outline">
                {B2B_HERO.ctaSecondary.label}
              </a>
            </div>
            <p className="b2b-aeps__notice">{B2B_HERO.notice}</p>
          </div>
        )}

        <div className="b2b-aeps__banner b2b-aeps__banner--fp">
          <AepsFingerprintIcon size={72} className="b2b-aeps__banner-icon" />
          <div>
            <h3>Real-time settlement on NPCI AePS rails</h3>
            <p>
              Payment infrastructure by NPCI for banks and financial institutions — using
              Aadhaar number and <strong>biometric fingerprint authentication</strong> through
              your business correspondent network. Built for distributors who need trust,
              speed, and commission clarity.
            </p>
          </div>
        </div>

        <div className="b2b-aeps__block b2b-explainer">
          <div className="b2b-explainer__head">
            <AepsFingerprintIcon size={44} />
            <div>
              <h3 className="b2b-aeps__heading">{B2B_AEPS_EXPLAINER.title}</h3>
              <p className="b2b-explainer__lead">{B2B_AEPS_EXPLAINER.lead}</p>
            </div>
          </div>
          <div className="b2b-explainer__grid">
            {B2B_AEPS_EXPLAINER.points.map((p) => (
              <article key={p.title} className="b2b-explainer__card">
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <div className="b2b-explainer__flow" aria-label="Transaction flow">
            {B2B_AEPS_EXPLAINER.flow.map((step, i) => (
              <span key={step} className="b2b-explainer__flow-step">
                {step}
                {i < B2B_AEPS_EXPLAINER.flow.length - 1 && (
                  <span className="b2b-explainer__flow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="b2b-aeps__block">
          <h3 className="b2b-aeps__heading b2b-aeps__heading--center">
            Benefits for your business
          </h3>
          <p className="b2b-section-intro">
            Whether you are a distributor, fintech, or BC operator — AePS with Anilax is
            designed to grow revenue, reduce operational risk, and onboard retailers faster.
          </p>
          <div className="b2b-benefits__grid">
            {B2B_CLIENT_BENEFITS.map((b) => (
              <article key={b.title} className="b2b-benefit-card">
                <span className="b2b-benefit-card__metric">{b.metric}</span>
                <h4>{b.title}</h4>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="b2b-aeps__block">
          <h3 className="b2b-aeps__heading">AePS services you can offer</h3>
          <p className="b2b-section-intro">
            Full NPCI AePS service catalogue — enable one or all, with per-service commission
            and limits configured in your admin panel.
          </p>
          <div className="b2b-services__grid">
            {B2B_SERVICES.map((s) => (
              <article key={s.id} className="b2b-service-card">
                <B2BServiceIcon name={s.id} />
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <span className="b2b-service-card__limit">{s.limit}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="b2b-aeps__block">
          <h3 className="b2b-aeps__heading">Choose your integration model</h3>
          <div className="b2b-solutions__grid">
            {B2B_SOLUTIONS.map((sol) => (
              <article key={sol.id} className="b2b-solution-card">
                <div className="b2b-solution-card__head">
                  <B2BSolutionIcon name={sol.id} />
                  <div>
                    <h4>{sol.title}</h4>
                    <p className="b2b-solution-card__tag">{sol.tagline}</p>
                  </div>
                </div>
                <p className="b2b-solution-card__desc">{sol.desc}</p>
                <p className="b2b-solution-card__benefits-label">What you get</p>
                <ul>
                  {sol.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {sol.id === "api" && (
                  <Link to="/api#b2b" className="b2b-solution-card__link">
                    View B2B APIs →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="b2b-aeps__block b2b-aeps__block--dark">
          <h3 className="b2b-aeps__heading">B2B APIs we provide</h3>
          <p className="b2b-aeps__api-intro">
            AePS, MATM, DMT, BBPS, payouts, and verification — same card catalog as our API
            documentation.
          </p>
          <div className="b2b-api-categories">
            <p className="b2b-api-categories__label">Categories</p>
            <ul className="b2b-api-categories__list">
              {B2B_CATEGORIES.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="b2b-api__grid b2b-api__grid--catalog">
            {B2B_API_CATALOG.map((row) => (
              <CatalogApiCard
                key={row.type}
                apiName={row.type}
                useCase={row.useCase}
                categoryId="b2b"
                categoryTitle="B2B APIs"
              />
            ))}
          </div>
          <Link to="/api#b2b" className="btn btn--outline b2b-api__cta">
            Full API catalog →
          </Link>
        </div>

        <div className="b2b-aeps__block">
          <h3 className="b2b-aeps__heading">How it works</h3>
          <div className="b2b-how__tabs">
            <button
              type="button"
              className={`b2b-how__tab ${howTab === "portal" ? "b2b-how__tab--active" : ""}`}
              onClick={() => setHowTab("portal")}
            >
              AePS Software Portal
            </button>
            <button
              type="button"
              className={`b2b-how__tab ${howTab === "api" ? "b2b-how__tab--active" : ""}`}
              onClick={() => setHowTab("api")}
            >
              AePS API
            </button>
          </div>
          <div className="b2b-how__panels">
            <div className="b2b-how__panel">
              <h4>Benefits</h4>
              <ul className="b2b-how__list">
                {how.benefits.map((b) => (
                  <li key={b.title}>
                    <strong>{b.title}</strong>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="b2b-how__panel">
              <h4>Process</h4>
              <ul className="b2b-how__list">
                {how.process.map((p) => (
                  <li key={p.title}>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="b2b-aeps__block">
          <h3 className="b2b-aeps__heading">Partner onboarding journey</h3>
          <ol className="b2b-onboarding">
            {B2B_ONBOARDING.map((o) => (
              <li key={o.step} className="b2b-onboarding__item">
                <span className="b2b-onboarding__step">{o.step}</span>
                <div>
                  <h4>{o.title}</h4>
                  <p>{o.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="b2b-aeps__block b2b-compliance">
          <div className="b2b-compliance__head">
            <AepsFingerprintIcon size={48} />
            <div>
              <h3 className="b2b-aeps__heading">Security & compliance</h3>
              <p className="b2b-section-intro b2b-section-intro--flush">
                Biometric-first AePS demands strict controls — we implement them by default.
              </p>
            </div>
          </div>
          <ul className="b2b-compliance__list">
            {B2B_COMPLIANCE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="b2b-aeps__block">
          <h3 className="b2b-aeps__heading">Why choose Anilax for AePS B2B</h3>
          <div className="b2b-why__grid">
            {B2B_WHY.map((w) => (
              <article key={w.title} className="b2b-why-card">
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="b2b-aeps__block b2b-faq">
          <h3 className="b2b-aeps__heading b2b-aeps__heading--center">Common questions</h3>
          <div className="b2b-faq__list">
            {B2B_FAQ.map((item) => (
              <details key={item.q} className="b2b-faq__item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="b2b-aeps__stats">
          <h3 className="b2b-aeps__heading b2b-aeps__heading--center">Impact at scale</h3>
          <div className="b2b-stats__grid b2b-stats__grid--4">
            {B2B_STATS.map((s) => (
              <div key={s.label} className="b2b-stat">
                <span className="b2b-stat__value">{s.value}</span>
                <span className="b2b-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="b2b-contact-strip">
          <AepsFingerprintIcon size={56} />
          <div>
            <h3>Talk to our AePS team</h3>
            <p>Commercials, bank onboarding, or technical integration — we respond within one business day.</p>
            <div className="b2b-contact-strip__links">
              <a href={`tel:${B2B_CONTACT_STRIP.phoneTel}`}>{B2B_CONTACT_STRIP.phone}</a>
              <a href={`mailto:${B2B_CONTACT_STRIP.email}`}>{B2B_CONTACT_STRIP.email}</a>
            </div>
          </div>
        </div>

        <div className="b2b-aeps__cta">
          <div className="b2b-aeps__cta-fp-plate">
            <AepsFingerprintIcon size={64} className="b2b-aeps__cta-icon" variant="light" />
          </div>
          <h3>Let&apos;s connect to create an impact</h3>
          <p>Start your AePS network with software, API, or both — scoped to your bank and states.</p>
          <ConnectButton className="btn btn--gradient btn--connect" />
        </div>
      </div>
    </section>
  );
}
