import { useState } from "react";
import { Link } from "react-router-dom";
import { SdkLangIcon } from "../components/SdkLangIcon";
import {
  SDK_HERO,
  SDK_STATS,
  SDK_FEATURES,
  SDK_PACKAGES,
  SDK_CODE_SAMPLES,
  SDK_WEBHOOK_SAMPLE,
  SDK_COMPAT,
  SDK_RESOURCES,
} from "../data/sdks";
import "../styles/sdks-page.css";

const QUICK_LANGS = ["node", "python", "go", "php"];

export function SdksPage() {
  const [activePkg, setActivePkg] = useState("node");
  const [quickLang, setQuickLang] = useState("node");
  const [copied, setCopied] = useState("");

  const selected = SDK_PACKAGES.find((p) => p.id === activePkg) ?? SDK_PACKAGES[0];
  const quickSample = SDK_CODE_SAMPLES[quickLang] ?? SDK_CODE_SAMPLES.node;

  const copyText = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(""), 2000);
    } catch {
      setCopied("");
    }
  };

  return (
    <div className="sdks-page">
      <section className="sdks-hero">
        <div className="sdks-hero__grid" aria-hidden="true" />
        <p className="sdks-hero__eyebrow">{SDK_HERO.eyebrow}</p>
        <h1 className="sdks-hero__title">
          Ship faster with <span className="gradient">official SDKs</span>
        </h1>
        <p className="sdks-hero__sub">{SDK_HERO.subtitle}</p>
        <div className="sdks-hero__endpoints">
          <span>
            <em>Production</em> {SDK_HERO.baseUrl}
          </span>
          <span>
            <em>Sandbox</em> {SDK_HERO.sandboxUrl}
          </span>
        </div>
        <div className="sdks-hero__actions">
          <Link to="/signup" className="btn btn--gradient">
            Get sandbox keys
          </Link>
          <Link to="/docs" className="btn btn--ghost btn--ghost-dark">
            API reference →
          </Link>
        </div>
        <div className="sdks-hero__stats">
          {SDK_STATS.map((s) => (
            <div key={s.label} className="sdks-stat-pill">
              <span className="sdks-stat-pill__value">{s.value}</span>
              <span className="sdks-stat-pill__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sdks-quick">
        <div className="sdks-quick__inner">
          <div className="sdks-quick__head">
            <h2>Quick start</h2>
            <div className="sdks-quick__tabs" role="tablist">
              {QUICK_LANGS.map((id) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={quickLang === id}
                  className={`sdks-quick__tab ${quickLang === id ? "sdks-quick__tab--active" : ""}`}
                  onClick={() => setQuickLang(id)}
                >
                  {SDK_PACKAGES.find((p) => p.id === id)?.name ?? id}
                </button>
              ))}
            </div>
          </div>
          <div className="sdks-install-bar">
            <code>{SDK_PACKAGES.find((p) => p.id === quickLang)?.install}</code>
            <button
              type="button"
              className="sdks-install-bar__copy"
              onClick={() =>
                copyText(SDK_PACKAGES.find((p) => p.id === quickLang)?.install ?? "", "install")
              }
            >
              {copied === "install" ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="sdks-code-panel">
            <code>{quickSample}</code>
          </pre>
        </div>
      </section>

      <section className="sdks-features">
        <div className="sdks-features__inner">
          {SDK_FEATURES.map((f) => (
            <article key={f.title} className="sdks-feature-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sdks-catalog" id="packages">
        <div className="sdks-catalog__inner">
          <header className="sdks-catalog__header">
            <h2>All packages</h2>
            <p>Pin a version in production. We ship semver — breaking changes only on major bumps.</p>
          </header>
          <div className="sdks-catalog__grid">
            {SDK_PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className={`sdks-pkg-card ${activePkg === pkg.id ? "sdks-pkg-card--active" : ""}`}
                onMouseEnter={() => setActivePkg(pkg.id)}
                onFocus={() => setActivePkg(pkg.id)}
                tabIndex={0}
              >
                <div className="sdks-pkg-card__top">
                  <SdkLangIcon name={pkg.icon} />
                  <div>
                    <h3>{pkg.name}</h3>
                    <span className="sdks-pkg-card__pkg">{pkg.package}</span>
                  </div>
                  <span className={`sdks-pkg-card__status sdks-pkg-card__status--${pkg.status}`}>
                    {pkg.status}
                  </span>
                </div>
                <div className="sdks-pkg-card__meta">
                  <span>
                    <strong>v{pkg.version}</strong> · {pkg.registry}
                  </span>
                  <span>{pkg.minRuntime}</span>
                  <span>Released {pkg.released}</span>
                </div>
                <ul className="sdks-pkg-card__tags">
                  {pkg.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="sdks-pkg-card__install">
                  <code>{pkg.install.split("\n")[0]}</code>
                  <button
                    type="button"
                    className="sdks-pkg-card__copy"
                    onClick={() => copyText(pkg.install, pkg.id)}
                  >
                    {copied === pkg.id ? "✓" : "Copy"}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="sdks-pkg-detail">
            <p className="sdks-pkg-detail__label">Selected</p>
            <h3>{selected.name}</h3>
            <p className="sdks-pkg-detail__ver">
              Latest <strong>v{selected.version}</strong> on {selected.registry}
            </p>
            <pre className="sdks-pkg-detail__code">
              <code>{SDK_CODE_SAMPLES[selected.id] ?? "// See API docs for this SDK"}</code>
            </pre>
            <Link to="/docs" className="btn btn--outline sdks-pkg-detail__docs">
              View {selected.name} docs →
            </Link>
          </aside>
        </div>
      </section>

      <section className="sdks-webhook">
        <div className="sdks-webhook__inner">
          <div className="sdks-webhook__copy">
            <h2>Webhook verification built in</h2>
            <p>
              Every server SDK includes helpers to validate{" "}
              <code>anilax-signature</code> headers and deserialize events — so you only write
              business logic for <code>payment.succeeded</code>, <code>payout.failed</code>, and
              more.
            </p>
            <ul>
              <li>Clock-skew tolerant HMAC-SHA256</li>
              <li>Raw body parsing for Express, FastAPI, Laravel</li>
              <li>Typed event payloads per API version</li>
            </ul>
          </div>
          <pre className="sdks-code-panel sdks-code-panel--dark">
            <code>{SDK_WEBHOOK_SAMPLE}</code>
          </pre>
        </div>
      </section>

      <section className="sdks-compat">
        <div className="sdks-compat__inner">
          <h2>Capability matrix</h2>
          <div className="sdks-compat__table-wrap">
            <table className="sdks-compat__table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Node</th>
                  <th>Python</th>
                  <th>Go</th>
                  <th>PHP</th>
                  <th>Java</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {SDK_COMPAT.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{cellMark(row.node)}</td>
                    <td>{cellMark(row.python)}</td>
                    <td>{cellMark(row.go)}</td>
                    <td>{cellMark(row.php)}</td>
                    <td>{cellMark(row.java)}</td>
                    <td>{cellMark(row.mobile)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sdks-resources">
        <div className="sdks-resources__inner">
          <h2>Resources</h2>
          <div className="sdks-resources__grid">
            {SDK_RESOURCES.map((r) => (
              <Link key={r.label} to={r.href} className="sdks-resource-card">
                <h3>{r.label}</h3>
                <p>{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sdks-cta">
        <div className="sdks-cta__inner">
          <h2>Start in sandbox — go live when you&apos;re ready</h2>
          <p>Free test keys, realistic webhooks, and the same SDK surface as production.</p>
          <div className="sdks-cta__actions">
            <Link to="/signup" className="btn btn--gradient btn--connect">
              Get API keys
            </Link>
            <Link to="/api" className="btn btn--outline">
              Explore APIs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function cellMark(val) {
  if (val === true) return <span className="sdks-yes">✓</span>;
  if (val === "beta") return <span className="sdks-beta">beta</span>;
  return <span className="sdks-no">—</span>;
}
