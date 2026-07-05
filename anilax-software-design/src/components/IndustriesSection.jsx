import { useState } from "react";
import { Link } from "react-router-dom";
import { HOME_INDUSTRIES } from "../data/homePage";

export function IndustriesSection() {
  const [active, setActive] = useState(HOME_INDUSTRIES[0].id);
  const current = HOME_INDUSTRIES.find((i) => i.id === active) ?? HOME_INDUSTRIES[0];

  return (
    <section className="dw-industries" id="industries">
      <div className="dw-container">
        <div className="dw-industries__header">
        <p className="dw-eyebrow">Industries</p>
        <h2 className="dw-heading">Built across industries, specialised where it matters</h2>
        <p className="dw-lead">
          We&apos;ve delivered software across 10+ industries with deep expertise in sectors where
          technology makes the biggest difference.
        </p>
      </div>
      <div className="dw-industries__layout">
        <div className="dw-industries__tabs" role="tablist" aria-label="Industries">
          {HOME_INDUSTRIES.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === item.id}
              className={`dw-industries__tab ${active === item.id ? "dw-industries__tab--active" : ""}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <article className="dw-industries__panel" role="tabpanel">
          <h3>{current.title}</h3>
          <p>{current.desc}</p>
          <ul>
            {current.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link to={`/industries/${current.id}`} className="dw-link-arrow">
            View industry solutions →
          </Link>
        </article>
      </div>
      </div>
    </section>
  );
}
