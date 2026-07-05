import { Link } from "react-router-dom";
import {
  CHANGELOG_ENTRIES,
  CHANGELOG_HERO,
  formatChangelogDate,
} from "../data/changelog";
import "../styles/changelog.css";

export function ChangelogPage() {
  return (
    <div className="changelog-page">
      <section className="changelog-hero">
        <p className="changelog-hero__eyebrow">{CHANGELOG_HERO.eyebrow}</p>
        <h1>{CHANGELOG_HERO.title}</h1>
        <p className="changelog-hero__sub">{CHANGELOG_HERO.subtitle}</p>
        <Link to="/status" className="changelog-hero__link">
          Platform status →
        </Link>
      </section>

      <section className="changelog-list">
        <div className="changelog-list__inner">
          {CHANGELOG_ENTRIES.map((entry) => (
            <article key={entry.version} className="changelog-entry">
              <header className="changelog-entry__head">
                <div>
                  <span className="changelog-entry__tag">{entry.tag}</span>
                  <h2>
                    v{entry.version} — {entry.title}
                  </h2>
                </div>
                <time dateTime={entry.date}>{formatChangelogDate(entry.date)}</time>
              </header>
              <ul className="changelog-entry__highlights">
                {entry.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
