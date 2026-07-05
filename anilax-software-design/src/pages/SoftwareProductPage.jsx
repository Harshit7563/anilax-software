import { Link, Navigate, useParams } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import { SoftwareProductIcon } from "../components/icons/catalogIcons";
import { getSoftwareProduct } from "../data/softwareProductDetail";
import "../styles/software-product.css";

export function SoftwareProductPage() {
  const { productId } = useParams();
  const product = getSoftwareProduct(productId);

  if (!product) {
    return <Navigate to="/software#business" replace />;
  }

  return (
    <div className="sw-product-page">
      <section className="sw-product-hero">
        <div className="sw-product-hero__mesh" aria-hidden="true" />
        <Link to="/software#solutions" className="sw-product-back">
          ← All software solutions
        </Link>
        <SoftwareProductIcon id={product.id} size="lg" className="sw-product-hero__icon" />
        <p className="sw-product-hero__eyebrow">
          {product.category === "payment" ? "Payment solution" : "Software solution"}
        </p>
        <h1 className="sw-product-hero__title">{product.title}</h1>
        <p className="sw-product-hero__tagline">{product.tagline}</p>
        <p className="sw-product-hero__desc">{product.desc}</p>
        <div className="sw-product-hero__tags">
          {product.tags.map((t) => (
            <span key={t} className="sw-product-hero__tag">
              {t}
            </span>
          ))}
        </div>
        <span className="sw-product-hero__badge">{product.heroBadge}</span>
        <div className="sw-product-hero__actions">
          <ConnectButton className="btn btn--gradient btn--connect" />
          <Link to="/technology" className="btn btn--ghost btn--ghost-dark">
            Our technology →
          </Link>
        </div>
      </section>

      {product.highlights?.length > 0 && (
        <section className="sw-product-section sw-product-section--alt">
          <div className="sw-product-section__inner">
            <p className="section-label">Capabilities</p>
            <h2 className="section-title">What {product.title} delivers</h2>
            <ul className="sw-product-checklist">
              {product.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {product.useCases?.length > 0 && (
        <section className="sw-product-section">
          <div className="sw-product-section__inner">
            <p className="section-label">Use cases</p>
            <h2 className="section-title">Built for real operations</h2>
            <div className="sw-product-trust-grid">
              {product.useCases.map((uc) => (
                <article key={uc.title} className="sw-product-trust-card">
                  <h3>{uc.title}</h3>
                  <p>{uc.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sw-product-safe">
        <div className="sw-product-safe__inner">
          <div className="sw-product-safe__icon" aria-hidden="true">
            ✓
          </div>
          <div>
            <h2>{product.safeIntro.title}</h2>
            {product.safeIntro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-product-section">
        <div className="sw-product-section__inner">
          <p className="section-label">Our process</p>
          <h2 className="section-title">{product.howWeBuild.title}</h2>
          <p className="section-sub">{product.howWeBuild.subtitle}</p>
          <ol className="sw-product-steps">
            {product.howWeBuild.steps.map((step, i) => (
              <li key={step.title} className="sw-product-step">
                <span className="sw-product-step__num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sw-product-section sw-product-section--alt">
        <div className="sw-product-section__inner sw-product-split">
          <div>
            <p className="section-label">Deliverables</p>
            <h2 className="section-title">{product.deliverables.title}</h2>
            <ul className="sw-product-checklist">
              {product.deliverables.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sw-product-timeline-card">
            <h3>{product.timeline.title}</h3>
            {product.timeline.phases.map((ph) => (
              <div key={ph.phase} className="sw-product-phase">
                <span className="sw-product-phase__when">{ph.phase}</span>
                <span className="sw-product-phase__label">{ph.label}</span>
              </div>
            ))}
            <p className="sw-product-timeline-note">{product.timeline.note}</p>
          </div>
        </div>
      </section>

      <section className="sw-product-section">
        <div className="sw-product-section__inner">
          <p className="section-label">Trust</p>
          <h2 className="section-title">{product.trust.title}</h2>
          <div className="sw-product-trust-grid">
            {product.trust.items.map((t) => (
              <article key={t.title} className="sw-product-trust-card">
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-product-section sw-product-section--alt">
        <div className="sw-product-section__inner">
          <p className="section-label">Engineering</p>
          <h2 className="section-title">{product.stack.title}</h2>
          <ul className="sw-product-stack">
            {product.stack.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sw-product-faq">
        <div className="sw-product-section__inner">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common questions</h2>
          <div className="sw-product-faq-list">
            {product.faq.map((item) => (
              <details key={item.q} className="sw-product-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-product-cta">
        <div className="sw-product-cta__inner">
          <h2>Ready to build {product.title}?</h2>
          <p>Tell us your scope — we&apos;ll share a clear plan, timeline, and quote.</p>
          <ConnectButton className="btn btn--gradient btn--connect" />
        </div>
      </section>
    </div>
  );
}
