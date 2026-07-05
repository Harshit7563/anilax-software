import { Link } from "react-router-dom";
import { STORIES } from "../data/stories";

export function CaseStudies() {
  const featured = STORIES.slice(0, 4);

  return (
    <section className="dw-cases">
      <div className="dw-container dw-cases__header">
        <p className="dw-eyebrow">Case Studies</p>
        <h2 className="dw-heading">Real results from real projects</h2>
        <p className="dw-lead">
          Trusted by funded startups, BC networks, and enterprise teams who want reliable
          engineering and steady delivery.
        </p>
        <Link to="/stories" className="dw-link-arrow">
          View all case studies →
        </Link>
      </div>
      <div className="dw-cases__scroll">
        {featured.map((story) => (
          <article key={story.id} className="dw-case-card">
            <span className="dw-case-card__tag">{story.category}</span>
            <h3 className="dw-case-card__title">{story.title}</h3>
            <p className="dw-case-card__summary">{story.summary}</p>
            <ul className="dw-case-card__outcomes">
              {story.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <Link to="/stories" className="dw-link-arrow dw-link-arrow--sm">
              See results →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
