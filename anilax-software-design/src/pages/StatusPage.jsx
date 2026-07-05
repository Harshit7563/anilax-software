import { Link } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import {
  STATUS_HERO,
  STATUS_INCIDENTS,
  STATUS_LABELS,
  STATUS_OVERALL,
  STATUS_SERVICES,
} from "../data/statusPage";
import "../styles/status.css";

function StatusBadge({ level }) {
  return (
    <span className={`status-badge status-badge--${level}`}>
      {STATUS_LABELS[level] ?? level}
    </span>
  );
}

export function StatusPage() {
  const updated = new Date(STATUS_HERO.lastUpdated).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="status-page">
      <section className="status-hero">
        <p className="status-hero__eyebrow">{STATUS_HERO.eyebrow}</p>
        <h1>{STATUS_HERO.title}</h1>
        <p className="status-hero__sub">{STATUS_HERO.subtitle}</p>
        <p className="status-hero__updated">Last updated {updated}</p>
      </section>

      <section className="status-overall">
        <div className="status-overall__inner">
          <StatusBadge level={STATUS_OVERALL.level} />
          <strong>{STATUS_OVERALL.label}</strong>
        </div>
      </section>

      <section className="status-services">
        <div className="status-section__inner">
          <h2>Services</h2>
          <ul className="status-service-list">
            {STATUS_SERVICES.map((svc) => (
              <li key={svc.id} className="status-service">
                <div className="status-service__head">
                  <h3>{svc.name}</h3>
                  <StatusBadge level={svc.status} />
                </div>
                <p>{svc.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="status-incidents">
        <div className="status-section__inner">
          <h2>Recent incidents</h2>
          {STATUS_INCIDENTS.length === 0 ? (
            <p className="status-empty">No incidents in the last 90 days.</p>
          ) : (
            <ul className="status-incident-list">
              {STATUS_INCIDENTS.map((inc) => (
                <li key={inc.date + inc.title} className="status-incident">
                  <div className="status-incident__meta">
                    <time dateTime={inc.date}>{inc.date}</time>
                    <StatusBadge level={inc.status} />
                  </div>
                  <h3>{inc.title}</h3>
                  <p>{inc.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="status-footer-cta">
        <div className="status-section__inner">
          <p>Need help or want incident alerts?</p>
          <div className="status-footer-cta__actions">
            <ConnectButton className="btn btn--gradient btn--connect" />
            <Link to="/changelog" className="btn btn--ghost">
              View changelog →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
