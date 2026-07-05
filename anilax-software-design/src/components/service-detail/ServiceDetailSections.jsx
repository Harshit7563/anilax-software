import { Link } from "react-router-dom";
import { ConnectButton } from "../ConnectButton";
import { SoftwareProductIcon } from "../icons/catalogIcons";
import { ServiceLineIcon } from "../ServiceLineIcon";

export function ServiceDetailHero({ service, page }) {
  const variant = page.hero;

  if (variant === "split") {
    return (
      <section className={`svc-hero svc-hero--split svc-theme--${page.theme}`}>
        <div className="svc-hero__bg" aria-hidden="true" />
        <div className="svc-hero__inner svc-hero__inner--split">
          <div className="svc-hero__copy">
            <Link to="/services" className="hub-back svc-hero__back">← All services</Link>
            <ServiceLineIcon id={service.id} size="lg" className="hub-hero__icon" />
            <h1>
              {page.heroHeadline} <span>{page.heroAccent}</span>
            </h1>
            <p>{service.summary}</p>
            <div className="hub-hero__actions svc-hero__actions--left">
              <ConnectButton className="btn btn--accent btn--connect" />
              <Link to="/software" className="btn btn--ghost btn--ghost-dark">Products</Link>
            </div>
          </div>
          <div className="svc-hero__panel">
            {service.metrics?.map((m) => (
              <div key={m.label} className="svc-stat-block">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
            <ul className="svc-hero__tags">
              {service.stack.slice(0, 4).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "terminal") {
    return (
      <section className={`svc-hero svc-hero--terminal svc-theme--${page.theme}`}>
        <div className="svc-hero__inner">
          <Link to="/services" className="hub-back svc-hero__back">← All services</Link>
          <div className="svc-terminal">
            <div className="svc-terminal__bar"><span /><span /><span /></div>
            <pre>{`$ anilax deploy --env production
✓ CI/CD pipeline ready
✓ Docker containers built
✓ SSL & monitoring active
→ ${page.heroHeadline} ${page.heroAccent}`}</pre>
          </div>
          <h1 className="svc-hero__title-below">{service.title}</h1>
          <p className="svc-hero__sub-below">{service.tagline}</p>
        </div>
      </section>
    );
  }

  if (variant === "compare") {
    return (
      <section className={`svc-hero svc-hero--compare svc-theme--${page.theme}`}>
        <div className="svc-hero__inner">
          <Link to="/services" className="hub-back svc-hero__back">← All services</Link>
          <h1>{page.heroHeadline} <span>{page.heroAccent}</span></h1>
          <div className="svc-compare-row">
            <div className="svc-compare-col svc-compare-col--old">
              <span>Legacy</span>
              <ul>{page.beforeAfter?.before.slice(0, 3).map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
            <div className="svc-compare-arrow">→</div>
            <div className="svc-compare-col svc-compare-col--new">
              <span>Modern</span>
              <ul>{page.beforeAfter?.after.slice(0, 3).map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "ecosystem" || variant === "triple") {
    return (
      <section className={`svc-hero svc-hero--ecosystem svc-theme--${page.theme}`}>
        <div className="svc-hero__inner">
          <Link to="/services" className="hub-back svc-hero__back">← All services</Link>
          <h1>{page.heroHeadline} <span>{page.heroAccent}</span></h1>
          <p>{service.summary}</p>
          <div className="svc-eco-cards">
            {(page.specialty?.items ?? []).slice(0, 3).map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "secure" || variant === "gradient" || variant === "showcase") {
    return (
      <section className={`svc-hero svc-hero--gradient svc-theme--${page.theme}`}>
        <div className="svc-hero__orb" aria-hidden="true" />
        <div className="svc-hero__inner svc-hero__inner--center">
          <Link to="/services" className="hub-back svc-hero__back">← All services</Link>
          <ServiceLineIcon id={service.id} size="lg" className="hub-hero__icon" />
          <h1>{page.heroHeadline} <span className="gradient">{page.heroAccent}</span></h1>
          <p>{service.tagline}</p>
          {service.metrics && (
            <div className="svc-hero__metrics-row">
              {service.metrics.map((m) => (
                <div key={m.label} className="svc-metric-pill">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          )}
          <ConnectButton className="btn btn--gradient btn--connect" />
        </div>
      </section>
    );
  }

  if (variant === "team" || variant === "gallery" || variant === "connect" || variant === "tracking" || variant === "path" || variant === "funnel" || variant === "dashboard" || variant === "clean") {
    return (
      <section className={`svc-hero svc-hero--${variant} svc-theme--${page.theme}`}>
        <div className="svc-hero__inner">
          <Link to="/services" className="hub-back svc-hero__back">← All services</Link>
          <p className="svc-hero__eyebrow">{service.title}</p>
          <h1>{page.heroHeadline} <span>{page.heroAccent}</span></h1>
          <p className="svc-hero__lead">{service.summary}</p>
          <div className="hub-hero__actions svc-hero__actions--left">
            <ConnectButton className="btn btn--accent btn--connect" />
            <Link to="/technology" className="btn btn--ghost btn--ghost-dark">Tech stack</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`svc-hero svc-theme--${page.theme}`}>
      <div className="hub-hero__mesh" aria-hidden="true" />
      <div className="hub-hero hub-hero--compact">
        <Link to="/services" className="hub-back">← All services</Link>
        <ServiceLineIcon id={service.id} size="lg" className="hub-hero__icon" />
        <h1 className="hub-hero__title">{service.title}</h1>
        <p className="hub-hero__tagline">{service.tagline}</p>
      </div>
    </section>
  );
}

export function ServiceQuoteBlock({ quote }) {
  if (!quote) return null;
  return (
    <section className="svc-quote">
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
    </section>
  );
}

export function ServiceBeforeAfterBlock({ data }) {
  if (!data) return null;
  return (
    <section className="hub-section hub-section--alt">
      <div className="hub-section__inner">
        <div className="svc-before-after">
          <div className="svc-before-after__col svc-before-after__col--before">
            <h3>Before</h3>
            <ul>{data.before.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
          <div className="svc-before-after__col svc-before-after__col--after">
            <h3>After Anilax</h3>
            <ul>{data.after.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceSpecialtyBlock({ specialty }) {
  if (!specialty) return null;
  const typeClass = specialty.type ? `svc-specialty--${specialty.type}` : "";
  return (
    <section className="hub-section">
      <div className="hub-section__inner">
        <p className="section-label">Deep dive</p>
        <h2 className="section-title">{specialty.title}</h2>
        <div className={`svc-specialty ${typeClass}`}>
          {specialty.items.map((item, i) => (
            <article key={item.title} className="svc-specialty__item">
              <span className="svc-specialty__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceProblemsBlock({ service, style }) {
  const items = service.problems ?? [];
  if (style === "cards") {
    return (
      <section className="hub-section hub-section--alt">
        <div className="hub-section__inner">
          <p className="section-label">Challenges</p>
          <h2 className="section-title">What holds teams back</h2>
          <div className="svc-pain-cards">
            {items.map((p) => (
              <article key={p} className="svc-pain-card">{p}</article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (style === "numbered") {
    return (
      <section className="hub-section hub-section--alt">
        <div className="hub-section__inner">
          <p className="section-label">Challenges</p>
          <h2 className="section-title">Problems we solve</h2>
          <ol className="svc-numbered-list">
            {items.map((p) => <li key={p}>{p}</li>)}
          </ol>
        </div>
      </section>
    );
  }
  return (
    <section className="hub-section hub-section--alt">
      <div className="hub-section__inner hub-detail-grid">
        <div>
          <p className="section-label">Challenges</p>
          <h2 className="section-title">Problems we solve</h2>
          <ul className="hub-checklist">{items.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div>
          <p className="section-label">Our approach</p>
          <h2 className="section-title">How Anilax delivers</h2>
          <ul className="hub-checklist hub-checklist--accent">
            {service.approach?.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ServiceApproachBlock({ service }) {
  return (
    <section className="hub-section">
      <div className="hub-section__inner">
        <p className="section-label">Approach</p>
        <h2 className="section-title">How we deliver</h2>
        <div className="svc-approach-steps">
          {service.approach?.map((a, i) => (
            <article key={a}>
              <span>{i + 1}</span>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCapabilitiesBlock({ service, style }) {
  const features = service.features ?? [];
  if (style === "bento") {
    return (
      <section className="hub-section">
        <div className="hub-section__inner">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What we build</h2>
          <div className="svc-bento">
            {features.map((f, i) => (
              <article key={f} className={i === 0 ? "svc-bento__wide" : ""}>{f}</article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (style === "grid") {
    return (
      <section className="hub-section">
        <div className="hub-section__inner">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What we deliver</h2>
          <div className="svc-feature-grid">
            {features.map((f) => (
              <article key={f} className="svc-feature-grid__item">{f}</article>
            ))}
          </div>
          {service.deliverables && (
            <div className="svc-deliverables-row">
              <h3>Deliverables</h3>
              <ul>{service.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          )}
        </div>
      </section>
    );
  }
  return (
    <section className="hub-section">
      <div className="hub-section__inner hub-detail-grid">
        <div>
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What we deliver</h2>
          <ul className="hub-checklist">{features.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
        <div className="hub-side-card">
          <p className="section-label">Deliverables</p>
          <ul className="hub-simple-list service-detail__deliverables">
            {service.deliverables?.map((d) => <li key={d}>{d}</li>)}
          </ul>
          <p className="section-label" style={{ marginTop: "1.5rem" }}>Use cases</p>
          <ul className="hub-simple-list">{service.useCases?.map((u) => <li key={u}>{u}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export function ServiceStackBlock({ service }) {
  return (
    <section className="hub-section hub-section--alt svc-stack-section">
      <div className="hub-section__inner">
        <p className="section-label">Technology</p>
        <h2 className="section-title">Stack we use</h2>
        <div className="svc-stack-marquee">
          {service.stack.map((t) => <span key={t}>{t}</span>)}
        </div>
        <p className="service-detail__lead">{service.overview}</p>
      </div>
    </section>
  );
}

export function ServiceOverviewBlock({ service }) {
  return (
    <section className="hub-section">
      <div className="hub-section__inner service-detail__overview">
        <p className="section-label">Overview</p>
        <h2 className="section-title">In depth</h2>
        <p className="service-detail__lead">{service.overview}</p>
      </div>
    </section>
  );
}

export function ServiceProcessBlock({ service, style }) {
  const steps = service.process ?? [];
  if (style === "timeline") {
    return (
      <section className="hub-section hub-section--alt">
        <div className="hub-section__inner">
          <p className="section-label">Process</p>
          <h2 className="section-title">How we work</h2>
          <div className="svc-timeline">
            {steps.map((s) => (
              <article key={s.step} className="svc-timeline__item">
                <span>{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (style === "horizontal") {
    return (
      <section className="hub-section hub-section--alt">
        <div className="hub-section__inner">
          <p className="section-label">Process</p>
          <h2 className="section-title">End to end</h2>
          <div className="svc-process-h">
            {steps.map((s) => (
              <article key={s.step}>
                <strong>{s.step}</strong>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (style === "steps") {
    return (
      <section className="hub-section hub-section--alt">
        <div className="hub-section__inner">
          <p className="section-label">Process</p>
          <h2 className="section-title">Four steps</h2>
          <div className="svc-approach-steps svc-approach-steps--large">
            {steps.map((s, i) => (
              <article key={s.step}>
                <span>{s.step || i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="hub-section hub-section--alt">
      <div className="hub-section__inner">
        <p className="section-label">Process</p>
        <h2 className="section-title">How we work with you</h2>
        <div className="hub-process service-detail__process">
          {steps.map((s) => (
            <article key={s.step} className="hub-process-step">
              <span>{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceIndustriesBlock({ service }) {
  if (!service.industries?.length) return null;
  return (
    <section className="hub-section">
      <div className="hub-section__inner">
        <p className="section-label">Industries</p>
        <h2 className="section-title">Who we build for</h2>
        <div className="svc-industry-grid">
          {service.industries.map((ind) => (
            <span key={ind} className="svc-industry-tile">{ind}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceEngagementBlock({ service }) {
  if (!service.engagement?.length) return null;
  return (
    <section className="hub-section svc-engagement-section">
      <div className="hub-section__inner">
        <p className="section-label">Engagement</p>
        <h2 className="section-title">Ways to work together</h2>
        <div className="svc-engagement-cards">
          {service.engagement.map((e, i) => (
            <article key={e} className="svc-engagement-cards__item">
              <span>Option {i + 1}</span>
              <h3>{e}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceFaqBlock({ service }) {
  if (!service.faq?.length) return null;
  return (
    <section className="hub-section hub-section--alt" id="faq">
      <div className="hub-section__inner service-detail__faq-wrap">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Questions answered</h2>
        <div className="service-detail__faq">
          {service.faq.map((item) => (
            <details key={item.q} className="service-detail__faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceProductsBlock({ service, related }) {
  if (!related.length) return null;
  return (
    <section className="hub-section">
      <div className="hub-section__inner">
        <p className="section-label">Products</p>
        <h2 className="section-title">Modules we customize</h2>
        <div className="hub-related">
          {related.map((p) => (
            <Link key={p.id} to={`/software/${p.id}`} className="hub-related-card">
              <SoftwareProductIcon id={p.id} size="sm" />
              <strong>{p.title}</strong>
              <p>{p.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceNavBlock({ prev, next }) {
  return (
    <nav className="service-detail__nav" aria-label="Other services">
      {prev ? (
        <Link to={`/services/${prev.id}`} className="service-detail__nav-link service-detail__nav-link--prev">
          <span>Previous</span>
          <strong>{prev.title}</strong>
        </Link>
      ) : <span />}
      {next ? (
        <Link to={`/services/${next.id}`} className="service-detail__nav-link service-detail__nav-link--next">
          <span>Next</span>
          <strong>{next.title}</strong>
        </Link>
      ) : <span />}
    </nav>
  );
}

export function ServiceCtaBlock({ service }) {
  return (
    <section className="hub-cta svc-cta">
      <div className="hub-cta__inner">
        <h2>Start your {service.title.toLowerCase()} project</h2>
        <p>Free discovery call — proposal within 48 hours.</p>
        <ConnectButton className="btn btn--accent btn--connect" />
      </div>
    </section>
  );
}

export function renderServiceSection(key, props) {
  const { service, page, related, prev, next } = props;
  switch (key) {
    case "quote":
      return <ServiceQuoteBlock key={key} quote={page.pullQuote} />;
    case "beforeAfter":
      return <ServiceBeforeAfterBlock key={key} data={page.beforeAfter} />;
    case "specialty":
      return <ServiceSpecialtyBlock key={key} specialty={page.specialty} />;
    case "overview":
      return <ServiceOverviewBlock key={key} service={service} />;
    case "problems":
      return <ServiceProblemsBlock key={key} service={service} style={page.problemsStyle} />;
    case "approach":
      return <ServiceApproachBlock key={key} service={service} />;
    case "capabilities":
      return <ServiceCapabilitiesBlock key={key} service={service} style={page.capabilitiesStyle} />;
    case "stack":
      return <ServiceStackBlock key={key} service={service} />;
    case "process":
      return <ServiceProcessBlock key={key} service={service} style={page.processStyle} />;
    case "industries":
      return <ServiceIndustriesBlock key={key} service={service} />;
    case "engagement":
      return <ServiceEngagementBlock key={key} service={service} />;
    case "faq":
      return <ServiceFaqBlock key={key} service={service} />;
    case "products":
      return <ServiceProductsBlock key={key} service={service} related={related} />;
    case "nav":
      return <ServiceNavBlock key={key} prev={prev} next={next} />;
    case "cta":
      return <ServiceCtaBlock key={key} service={service} />;
    default:
      return null;
  }
}
