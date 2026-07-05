import { Link, Navigate, useParams } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import { IndustryIcon, SoftwareProductIcon } from "../components/icons/catalogIcons";
import { ServiceLineIcon } from "../components/ServiceLineIcon";
import { getIndustry } from "../data/industryPages";
import { SERVICE_LINES } from "../data/serviceLines";
import { BUSINESS_SOLUTIONS, PAYMENT_SOLUTIONS } from "../data/softwareServices";
import "../styles/marketing-hub.css";

const ALL_PRODUCTS = [...PAYMENT_SOLUTIONS, ...BUSINESS_SOLUTIONS];

export function IndustryDetailPage() {
  const { industryId } = useParams();
  const industry = getIndustry(industryId);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const services = SERVICE_LINES.filter((s) => industry.relatedServices?.includes(s.id));
  const products = ALL_PRODUCTS.filter((p) => industry.relatedProducts?.includes(p.id)).slice(0, 8);

  return (
    <div className="hub-page">
      <section className="hub-hero hub-hero--compact">
        <div className="hub-hero__mesh" aria-hidden="true" />
        <Link to="/industries" className="hub-back">← All industries</Link>
        <IndustryIcon id={industry.id} size="lg" className="hub-hero__icon" />
        <h1 className="hub-hero__title">{industry.title}</h1>
        <p className="hub-hero__tagline">{industry.tagline}</p>
        <p className="hub-hero__sub">{industry.summary}</p>
        <div className="hub-hero__actions">
          <Link to="/#contact" className="btn btn--accent">
            Start a project →
          </Link>
          <Link to="/software" className="btn btn--ghost btn--ghost-dark">
            View products
          </Link>
        </div>
      </section>

      <section className="hub-section">
        <div className="hub-section__inner hub-detail-grid">
          <div>
            <p className="section-label">Challenges</p>
            <h2 className="section-title">Problems we solve</h2>
            <ul className="hub-checklist">
              {industry.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label">Solutions</p>
            <h2 className="section-title">What we build</h2>
            <ul className="hub-checklist hub-checklist--accent">
              {industry.solutions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {services.length > 0 && (
        <section className="hub-section hub-section--alt">
          <div className="hub-section__inner">
            <p className="section-label">Services</p>
            <h2 className="section-title">Relevant service lines</h2>
            <div className="hub-related">
              {services.map((s) => (
                <Link key={s.id} to={`/services/${s.id}`} className="hub-related-card">
                  <ServiceLineIcon id={s.id} size="sm" />
                  <strong>{s.title}</strong>
                  <p>{s.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {products.length > 0 && (
        <section className="hub-section">
          <div className="hub-section__inner">
            <p className="section-label">Products</p>
            <h2 className="section-title">Software we customize for {industry.title}</h2>
            <div className="hub-related">
              {products.map((p) => (
                <Link key={p.id} to={`/software/${p.id}`} className="hub-related-card">
                  <SoftwareProductIcon id={p.id} size="sm" />
                  <strong>{p.title}</strong>
                  <p>{p.tagline}</p>
                </Link>
              ))}
            </div>
            <Link to="/software" className="hub-card__link" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
              View full catalog →
            </Link>
          </div>
        </section>
      )}

      <section className="hub-cta">
        <div className="hub-cta__inner">
          <h2>Build for {industry.title.toLowerCase()} with Anilax</h2>
          <p>From MVP to enterprise rollout — discovery call within 24 hours.</p>
          <ConnectButton className="btn btn--accent btn--connect" />
        </div>
      </section>
    </div>
  );
}
