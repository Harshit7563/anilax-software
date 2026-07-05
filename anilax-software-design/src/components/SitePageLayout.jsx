import { Link } from "react-router-dom";
import { ConnectButton } from "./ConnectButton";

function ProseBlock({ block }) {
  return (
    <section className="site-block">
      {block.heading && <h2 className="site-block__title">{block.heading}</h2>}
      {block.paragraphs?.map((p) => (
        <p key={p} className="site-block__text">
          {p}
        </p>
      ))}
    </section>
  );
}

function ListBlock({ block }) {
  return (
    <section className="site-block">
      <h2 className="site-block__title">{block.heading}</h2>
      <ul className="site-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function CardsBlock({ block }) {
  return (
    <section className="site-block">
      <h2 className="site-block__title">{block.heading}</h2>
      <div className="site-cards">
        {block.items.map((item) => (
          <article key={item.title} className="site-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function StatsBlock({ block }) {
  return (
    <section className="site-block site-block--stats">
      <div className="site-stats">
        {block.items.map((s) => (
          <div key={s.label} className="site-stat">
            <span className="site-stat__value">{s.value}</span>
            <span className="site-stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FactsBlock({ block }) {
  return (
    <section className="site-block">
      <h2 className="site-block__title">{block.heading}</h2>
      <dl className="site-facts">
        {block.rows.map((row) => (
          <div key={row.label} className="site-facts__row">
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function TableBlock({ block }) {
  return (
    <section className="site-block">
      <h2 className="site-block__title">{block.heading}</h2>
      <div className="site-table-wrap">
        <table className="site-table">
          <thead>
            <tr>
              {block.columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function LegalSummaryBlock({ block }) {
  return (
    <section className="site-block site-block--legal-summary">
      <div className="legal-summary">
        {block.items.map((item) => (
          <div key={item.label} className="legal-summary__item">
            <span className="legal-summary__label">{item.label}</span>
            <span className="legal-summary__value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function JobsBlock({ block }) {
  return (
    <section className="site-block">
      <h2 className="site-block__title">{block.heading}</h2>
      <div className="site-jobs">
        {block.jobs.map((job) => (
          <article key={job.title} className="site-job">
            <div className="site-job__head">
              <h3>{job.title}</h3>
              <span className="site-job__meta">
                {job.location} · {job.type}
              </span>
            </div>
            <p>{job.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactBlock({ block }) {
  return (
    <section className="site-block">
      <div className="site-contact-grid">
        {block.channels.map((ch) => (
          <article key={ch.title} className="site-contact-card">
            <h3>{ch.title}</h3>
            <p>{ch.text}</p>
            <a href={`mailto:${ch.email}`}>{ch.email}</a>
            {ch.phone && (
              <a
                href={`tel:${ch.phone.replace(/[\s-]/g, "")}`}
                className="site-contact-card__phone"
              >
                {ch.phone}
              </a>
            )}
          </article>
        ))}
      </div>
      <div className="site-office">
        <h3>{block.office.title}</h3>
        <address>
          {block.office.lines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </address>
        {block.office.phone && (
          <a
            href={`tel:${block.office.phone.replace(/[\s-]/g, "")}`}
            className="site-office__phone"
          >
            {block.office.phone}
          </a>
        )}
        <p className="site-office__hours">{block.hours}</p>
        <a
          href="https://maps.google.com/?q=Mall+of+Jaipur+Vaishali+Nagar+Jaipur"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline site-office__map"
        >
          Open in Google Maps →
        </a>
      </div>
    </section>
  );
}

function LegalSectionContent({ section }) {
  return (
    <>
      {section.body && <p>{section.body}</p>}
      {section.paragraphs?.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {section.list && (
        <ul className="site-legal-list">
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.subsections?.map((sub) => (
        <div key={sub.title} className="site-legal-sub">
          <h3>{sub.title}</h3>
          <p>{sub.text}</p>
        </div>
      ))}
    </>
  );
}

function LegalBlock({ block }) {
  return (
    <section className="site-block site-block--legal">
      {block.sections.map((sec) => (
        <article key={sec.id || sec.title} id={sec.id} className="site-legal-section">
          <h2>{sec.title}</h2>
          <LegalSectionContent section={sec} />
        </article>
      ))}
    </section>
  );
}

function PageBlock({ block }) {
  switch (block.type) {
    case "prose":
      return <ProseBlock block={block} />;
    case "list":
      return <ListBlock block={block} />;
    case "cards":
      return <CardsBlock block={block} />;
    case "stats":
      return <StatsBlock block={block} />;
    case "facts":
      return <FactsBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "legal-summary":
      return <LegalSummaryBlock block={block} />;
    case "jobs":
      return <JobsBlock block={block} />;
    case "contact":
      return <ContactBlock block={block} />;
    case "legal":
      return <LegalBlock block={block} />;
    default:
      return null;
  }
}

function collectLegalToc(blocks) {
  const items = [];
  blocks.forEach((block) => {
    if (block.type !== "legal") return;
    block.sections.forEach((sec) => {
      if (sec.id) {
        items.push({ id: sec.id, label: sec.title });
      }
    });
  });
  return items;
}

export function SitePageLayout({ page }) {
  const isLegal = page.layout === "legal";
  const toc = isLegal ? collectLegalToc(page.blocks) : [];

  return (
    <div className={`site-page ${isLegal ? "site-page--legal" : ""}`}>
      <section className={`site-hero ${isLegal ? "site-hero--legal" : ""}`}>
        <div className="site-hero__bg" aria-hidden="true" />
        <p className="site-hero__eyebrow">{page.eyebrow}</p>
        <h1 className="site-hero__title">{page.title}</h1>
        <p className="site-hero__sub">{page.subtitle}</p>
        {isLegal && page.effectiveDate && (
          <p className="site-hero__meta">
            Effective date: {page.effectiveDate} · {page.slug && `/${page.slug}`}
          </p>
        )}
      </section>

      {isLegal && page.relatedLinks?.length > 0 && (
        <nav className="legal-nav" aria-label="Legal documents">
          <div className="legal-nav__inner">
            {page.relatedLinks.map((link) => (
              <Link key={link.to} to={link.to} className="legal-nav__link">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div className={`site-content ${isLegal ? "site-content--legal" : ""}`}>
        {isLegal && toc.length > 0 && (
          <aside className="legal-toc" aria-label="Table of contents">
            <p className="legal-toc__title">On this page</p>
            <ol className="legal-toc__list">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </aside>
        )}

        <div className="site-content__main">
          {page.blocks.map((block, i) => (
            <PageBlock key={`${block.type}-${i}`} block={block} />
          ))}
        </div>
      </div>

      {page.cta && (
        <section className="site-cta">
          <div className="site-cta__inner">
            <h2>{page.cta.title}</h2>
            <p>{page.cta.text}</p>
            <div className="site-cta__actions">
              {page.cta.connect && <ConnectButton className="btn btn--gradient btn--connect" />}
              {page.cta.link && (
                <Link to={page.cta.link.to} className="btn btn--outline">
                  {page.cta.link.label}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
