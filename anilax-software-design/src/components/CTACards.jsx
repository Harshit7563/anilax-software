export function CTACards() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-grid">
        <article className="cta-card">
          <p className="cta-card__badge">For developers</p>
          <p className="cta-card__label">API & SDK</p>
          <h3>Ship in days, not months</h3>
          <a href="/sdks" className="btn btn--primary" style={{ width: "100%", justifyContent: "center", marginBottom: "0.5rem" }}>
            Browse SDKs
          </a>
          <a href="/api" className="btn btn--outline" style={{ width: "100%", justifyContent: "center" }}>
            View API catalog
          </a>
        </article>
        <article className="cta-card">
          <p className="cta-card__badge">For business</p>
          <p className="cta-card__label">Software & B2B</p>
          <h3>Explore our solutions</h3>
          <a href="/software" className="btn btn--outline" style={{ width: "100%", justifyContent: "center", marginBottom: "0.5rem" }}>
            Software Development
          </a>
          <a href="/b2b" className="btn btn--outline" style={{ width: "100%", justifyContent: "center" }}>
            B2B AePS
          </a>
        </article>
      </div>
    </section>
  );
}
