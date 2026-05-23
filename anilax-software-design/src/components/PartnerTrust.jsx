import { Link } from "react-router-dom";
import { ConnectButton } from "./ConnectButton";
import { PARTNER_TRUST } from "../data/partnerTrust";
import { TrustIcon } from "./TrustIcon";

function TrustPointIcon() {
  return (
    <span className="partner-trust__point-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12l4 4L19 7" />
      </svg>
    </span>
  );
}

export function PartnerTrust() {
  return (
    <section className="partner-trust" id="partner-trust">
      <div className="partner-trust__inner">
        <header className="partner-trust__header">
          <p className="section-label">{PARTNER_TRUST.eyebrow}</p>
          <h2 className="section-title partner-trust__title">{PARTNER_TRUST.title}</h2>
          <p className="section-sub partner-trust__lead">{PARTNER_TRUST.lead}</p>
        </header>

        <ul className="partner-trust__points">
          {PARTNER_TRUST.points.map((point) => (
            <li key={point}>
              <TrustPointIcon />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="partner-trust__meta">
          <span className="partner-trust__badge">{PARTNER_TRUST.badge}</span>
          <div className="partner-trust__actions">
            <ConnectButton className="btn btn--gradient btn--connect" />
            <Link to="/company" className="btn btn--outline">
              About our company →
            </Link>
          </div>
        </div>

        <div className="partner-trust__grid">
          {PARTNER_TRUST.pillars.map((item) => (
            <article key={item.title} className="partner-trust__card">
              <TrustIcon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
