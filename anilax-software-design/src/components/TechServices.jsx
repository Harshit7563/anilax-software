import { Link } from "react-router-dom";
import { HOME_TECH } from "../data/homePage";

export function TechServices() {
  return (
    <section className="dw-tech">
      <div className="dw-container">
        <div className="dw-tech__header">
        <p className="dw-eyebrow">Technology</p>
        <h2 className="dw-heading">Technology that works as hard as your business does</h2>
        <p className="dw-lead">
          We choose technology based on your business flow — not trends.
        </p>
      </div>
      <div className="dw-tech__grid">
        {HOME_TECH.map((item) => (
          <article key={item.title} className="dw-tech-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <p className="dw-tech-card__stack-label">TECH STACK</p>
            <div className="dw-tech-card__pills">
              {item.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="dw-tech__footer">
        <p>
          From first idea to full deployment, we bring structure, expertise, and long-term
          ownership to every project we take on.
        </p>
        <div className="dw-tech__footer-actions">
          <Link to="/services" className="btn btn--accent">
            All Services →
          </Link>
          <Link to="/technology" className="btn btn--outline btn--outline-dark">
            Tech stack
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
