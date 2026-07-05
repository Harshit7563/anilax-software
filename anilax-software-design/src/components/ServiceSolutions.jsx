import { Link } from "react-router-dom";
import { HOME_SERVICES } from "../data/homePage";

function serviceHref(href) {
  return href?.startsWith("/services/") ? href : "/services";
}

export function ServiceSolutions() {
  return (
    <section className="dw-services" id="services">
      <div className="dw-container">
        <div className="dw-services__intro">
          <p className="dw-eyebrow">We Solve Problems</p>
          <h2 className="dw-heading">Four ways we transform your business</h2>
          <p className="dw-lead">
            One partner. Four powerful ways to transform your business. Each card links to a full
            service page with scope, process, and FAQs.
          </p>
        </div>
        <div className="dw-services__list">
          {HOME_SERVICES.map((item) => (
            <article key={item.num} className="dw-service-card">
              <div className="dw-service-card__top">
                <div className="dw-service-card__meta">
                  <span className="dw-service-card__num">{item.num}</span>
                  <span className="dw-service-card__pain-label">THE PAIN</span>
                </div>
                <p className="dw-service-card__pain">{item.pain}</p>
              </div>
              <div className="dw-service-card__bottom">
                <h3 className="dw-service-card__title">{item.headline}</h3>
                <p className="dw-service-card__sub">{item.subhead}</p>
                <span className="dw-service-card__outcome-label">THE OUTCOME</span>
                <ul className="dw-service-card__outcomes">
                  {item.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <p className="dw-service-card__tag">{item.tag}</p>
                <Link to={serviceHref(item.href)} className="dw-link-arrow">
                  {item.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="dw-services__banner">
          <p>Automate. Build. Scale. Modernize. That&apos;s the Anilax difference.</p>
          <Link to="/services" className="btn btn--accent">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
