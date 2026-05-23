import { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "./ConnectButton";
import { CatalogApiCard } from "./CatalogApiCard";
import { B2CFeatureIcon } from "./B2CFeatureIcon";
import {
  B2C_HERO,
  B2C_APP_FEATURES,
  B2C_APP_TYPES,
  B2C_API_CATALOG,
  B2C_CATEGORIES,
  B2C_HOW_IT_WORKS,
  B2C_WHY,
  B2C_STATS,
} from "../data/b2cApps";

export function B2CConsumer({ showHero = true }) {
  const [howTab, setHowTab] = useState("app");
  const how = howTab === "app" ? B2C_HOW_IT_WORKS.app : B2C_HOW_IT_WORKS.api;

  return (
    <section className="b2c-consumer">
      <div className="b2c-consumer__inner">
        {showHero && (
          <div className="b2c-consumer__hero">
            <p className="section-label">{B2C_HERO.eyebrow}</p>
            <h2 className="section-title">{B2C_HERO.title}</h2>
            <p className="section-sub b2c-consumer__intro">{B2C_HERO.subtitle}</p>
          </div>
        )}

        <div className="b2c-consumer__banner">
          <h3>UPI super-apps your users already understand</h3>
          <p>
            We build consumer experiences on par with leading Indian payment apps — scan & pay,
            wallet, recharge, bill pay, and rewards — and connect them to Anilax B2C APIs for
            production-grade scale.
          </p>
          <div className="b2c-consumer__brand-tags">
            <span>UPI super-app</span>
            <span>UPI-first</span>
            <span>Wallet app</span>
            <span>Your brand</span>
          </div>
        </div>

        <div className="b2c-consumer__block">
          <h3 className="b2c-consumer__heading">App features we ship</h3>
          <div className="b2c-features__grid">
            {B2C_APP_FEATURES.map((f) => (
              <article key={f.title} className="b2c-feature-card">
                <B2CFeatureIcon name={f.icon} />
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="b2c-consumer__block">
          <h3 className="b2c-consumer__heading">App models we deliver</h3>
          <div className="b2c-types__grid">
            {B2C_APP_TYPES.map((t) => (
              <article key={t.id} className="b2c-type-card">
                <h4>{t.title}</h4>
                <p className="b2c-type-card__tag">{t.tagline}</p>
                <ul>
                  {t.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="b2c-consumer__block b2c-consumer__block--dark">
          <h3 className="b2c-consumer__heading">B2C APIs we provide</h3>
          <p className="b2c-consumer__api-intro">
            Already have an app? Plug into payouts, collections, validation, and webhooks on the
            same rails we use for white-label builds.
          </p>
          <div className="b2c-api-categories">
            <p className="b2c-api-categories__label">Categories</p>
            <ul className="b2c-api-categories__list">
              {B2C_CATEGORIES.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="b2c-api__grid b2c-api__grid--catalog">
            {B2C_API_CATALOG.map((row) => (
              <CatalogApiCard
                key={row.type}
                apiName={row.type}
                useCase={row.useCase}
                categoryId="b2c"
                categoryTitle="B2C APIs"
              />
            ))}
          </div>
          <Link to="/api#b2c" className="btn btn--outline b2c-api__cta">
            Full API catalog →
          </Link>
        </div>

        <div className="b2c-consumer__block">
          <h3 className="b2c-consumer__heading b2c-consumer__heading--center">How it works</h3>
          <div className="b2c-how__tabs">
            <button
              type="button"
              className={`b2c-how__tab ${howTab === "app" ? "b2c-how__tab--active" : ""}`}
              onClick={() => setHowTab("app")}
            >
              Build new app
            </button>
            <button
              type="button"
              className={`b2c-how__tab ${howTab === "api" ? "b2c-how__tab--active" : ""}`}
              onClick={() => setHowTab("api")}
            >
              API for your app
            </button>
          </div>
          <h4 className="b2c-how__title">{how.title}</h4>
          <ol className="b2c-how__steps">
            {how.steps.map((step, i) => (
              <li key={step.title}>
                <span className="b2c-how__step-num">{i + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="b2c-consumer__block">
          <h3 className="b2c-consumer__heading">Why Anilax for B2C</h3>
          <div className="b2c-why__grid">
            {B2C_WHY.map((w) => (
              <article key={w.title} className="b2c-why-card">
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="b2c-consumer__stats">
          <h3 className="b2c-consumer__heading b2c-consumer__heading--center">Impact at scale</h3>
          <div className="b2c-stats__grid">
            {B2C_STATS.map((s) => (
              <div key={s.label} className="b2c-stat">
                <span className="b2c-stat__value">{s.value}</span>
                <span className="b2c-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="b2c-consumer__cta">
          <h3>Launch your consumer payment product</h3>
          <p>App development, API integration, or both — tell us your roadmap.</p>
          <ConnectButton className="btn btn--gradient btn--connect" />
        </div>
      </div>
    </section>
  );
}
