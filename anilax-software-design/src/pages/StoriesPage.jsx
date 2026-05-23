import { Link } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import {
  STORIES_HERO,
  STORIES_STATS,
  STORIES_TIMELINE,
  STORIES,
  STORIES_VALUES,
} from "../data/stories";
import "../styles/stories.css";

export function StoriesPage() {
  return (
    <div className="stories-page">
      <section className="stories-hero">
        <div className="stories-hero__bg" aria-hidden="true" />
        <p className="stories-hero__eyebrow">{STORIES_HERO.eyebrow}</p>
        <h1 className="stories-hero__title">
          {STORIES_HERO.title}{" "}
          <span className="gradient">{STORIES_HERO.titleHighlight}</span>
        </h1>
        <p className="stories-hero__sub">{STORIES_HERO.subtitle}</p>
        <div className="stories-hero__stats">
          {STORIES_STATS.map((s) => (
            <div key={s.label} className="stories-hero__stat">
              <span className="stories-hero__stat-value">{s.value}</span>
              <span className="stories-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="stories-hero__actions">
          <ConnectButton className="btn btn--gradient btn--connect" />
          <Link to="/#fintech" className="btn btn--ghost btn--ghost-dark">
            ← Platform overview
          </Link>
        </div>
      </section>

      <section className="stories-timeline">
        <div className="stories-section__inner">
          <p className="section-label">Our journey</p>
          <h2 className="section-title">Building since 2021</h2>
          <div className="stories-timeline__track">
            {STORIES_TIMELINE.map((item) => (
              <div key={item.year} className="stories-timeline__item">
                <span className="stories-timeline__year">{item.year}</span>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-list">
        <div className="stories-section__inner">
          <p className="section-label">Case studies</p>
          <h2 className="section-title">Stories from the field</h2>
          <p className="section-sub">
            Names anonymized where partners prefer — outcomes and approach are real.
          </p>
          <div className="stories-grid">
            {STORIES.map((story) => (
              <article key={story.id} className="story-card">
                <span className="story-card__category">{story.category}</span>
                <h3>{story.title}</h3>
                <blockquote>{story.quote}</blockquote>
                <p className="story-card__summary">{story.summary}</p>
                <ul className="story-card__outcomes">
                  {story.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-values">
        <div className="stories-section__inner">
          <p className="section-label">How we work</p>
          <h2 className="section-title">What every story has in common</h2>
          <div className="stories-values__grid">
            {STORIES_VALUES.map((v) => (
              <article key={v.title} className="story-value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-cta">
        <div className="stories-cta__inner">
          <h2>Write the next story with us</h2>
          <p>Share your goal — AePS, API, wallet, or custom software. We respond within 1–2 business days.</p>
          <div className="stories-cta__actions">
            <ConnectButton className="btn btn--gradient btn--connect" />
            <Link to="/company" className="btn btn--outline stories-cta__outline">
              About Anilax →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
