import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero-dark" id="home">
      <div className="hero-dark__glow" aria-hidden="true" />
      <p className="hero-dark__eyebrow">Anilax Software</p>
      <h1 className="hero-dark__title">
        Building the Future of <span className="gradient">Fintech Infrastructure</span>
      </h1>
      <p className="hero-dark__sub">
        Enterprise software, payment rails, and developer APIs — built in India, shipped globally.
      </p>
      <div className="hero-dark__actions">
        <Link to="/signup" className="btn btn--gradient">
          Get sandbox access
        </Link>
        <a href="#api" className="btn btn--ghost btn--ghost-dark">
          View API docs
        </a>
      </div>
      <p className="hero-dark__hint">
        Fintech · B2B · B2C · API · Software · Technology · Company
      </p>
    </section>
  );
}
