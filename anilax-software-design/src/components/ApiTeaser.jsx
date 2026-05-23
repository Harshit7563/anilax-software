import { Link } from "react-router-dom";

export function ApiTeaser() {
  return (
    <section className="api-teaser" id="api">
      <div className="api-teaser__inner">
        <p className="section-label">Developer APIs</p>
        <h2 className="section-title">50+ fintech APIs, one platform</h2>
        <p className="section-sub">
          B2B, B2C, payments, SMS, verification, BBPS, and custom rails — explore the full catalog.
        </p>
        <Link to="/api" className="btn btn--gradient">
          View all APIs →
        </Link>
      </div>
    </section>
  );
}
