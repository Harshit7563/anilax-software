import { Link } from "react-router-dom";
import { HOME_HERO } from "../data/homePage";

const HERO_STATS = [
  { value: "120+", label: "Projects shipped" },
  { value: "950+", label: "B2B partners" },
  { value: "28+", label: "States served" },
];

export function Hero() {
  return (
    <section className="dw-hero" id="home">
      <div className="dw-container dw-hero__grid">
        <div className="dw-hero__content">
          <p className="dw-hero__trust">{HOME_HERO.trust}</p>
          <p className="dw-eyebrow">{HOME_HERO.eyebrow}</p>
          <h1 className="dw-hero__title">{HOME_HERO.title}</h1>
          <p className="dw-hero__sub">{HOME_HERO.subtitle}</p>
          <div className="dw-hero__actions">
            <Link to={HOME_HERO.cta.href} className="btn btn--accent">
              {HOME_HERO.cta.label} →
            </Link>
            <Link to={HOME_HERO.secondary.href} className="btn btn--outline">
              {HOME_HERO.secondary.label}
            </Link>
          </div>
        </div>

        <div className="dw-hero__visual" aria-hidden="true">
          <div className="dw-hero__panel dw-hero__panel--main">
            <div className="dw-hero__panel-head">
              <span className="dw-hero__dot dw-hero__dot--red" />
              <span className="dw-hero__dot dw-hero__dot--yellow" />
              <span className="dw-hero__dot dw-hero__dot--green" />
              <span>Anilax Platform</span>
            </div>
            <div className="dw-hero__panel-body">
              <div className="dw-hero__metric">
                <span>Live transactions</span>
                <strong>₹2.4 Cr+</strong>
              </div>
              <div className="dw-hero__bars">
                <span style={{ height: "42%" }} />
                <span style={{ height: "68%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "82%" }} />
                <span style={{ height: "74%" }} />
                <span style={{ height: "91%" }} />
              </div>
              <div className="dw-hero__chips">
                <span>AePS</span>
                <span>UPI</span>
                <span>API</span>
                <span>ERP</span>
              </div>
            </div>
          </div>
          {HERO_STATS.map((stat, i) => (
            <div key={stat.label} className={`dw-hero__float dw-hero__float--${i + 1}`}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dw-hero__marquee-wrap">
        <div className="dw-hero__marquee">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="dw-hero__marquee-track">
              <span>Fintech</span>
              <span>B2B · AePS</span>
              <span>B2C Wallets</span>
              <span>Payment APIs</span>
              <span>Custom Software</span>
              <span>Healthcare</span>
              <span>Logistics</span>
              <span>EdTech</span>
              <span>SaaS</span>
              <span>On-Demand</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
