import { Link } from "react-router-dom";
import { HOME_TESTIMONIALS } from "../data/homePage";

export function Testimonials() {
  return (
    <section className="dw-testimonials">
      <div className="dw-container">
        <div className="dw-testimonials__header">
        <p className="dw-eyebrow">Client Feedback</p>
        <h2 className="dw-heading">Here&apos;s what our business partners say about us</h2>
      </div>
      <div className="dw-testimonials__featured">
        <div className="dw-testimonials__featured-copy">
          <span className="dw-testimonials__badge">Client Story</span>
          <h3>We reduced manual workload by 60% in 2 months</h3>
          <p>
            See how Anilax automated complex AePS workflows for a regional BC network — helping
            their team save 20+ hours every week and focus on growth.
          </p>
        </div>
        <Link to="/stories" className="dw-link-arrow">
          Watch how it works →
        </Link>
      </div>
      <div className="dw-testimonials__grid">
        {HOME_TESTIMONIALS.map((item) => (
          <blockquote key={item.name + item.role} className="dw-testimonial-card">
            <p>&ldquo;{item.quote}&rdquo;</p>
            <footer>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
              <em>{item.highlight}</em>
            </footer>
          </blockquote>
        ))}
      </div>
      <Link to="/stories" className="dw-link-arrow dw-testimonials__more">
        Explore more client success stories →
      </Link>
      </div>
    </section>
  );
}
