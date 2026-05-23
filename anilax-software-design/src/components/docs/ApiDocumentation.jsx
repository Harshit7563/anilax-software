import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  DOCS_META,
  DOCS_NAV,
  DOCS_PAGES,
  findDocItem,
  buildCurl,
  buildNodeSample,
} from "../../data/apiDocs";
import { redirectToAnilaxAuth, ANILAX_AUTH_URL } from "../../lib/anilaxAuth";
import "../../styles/docs.css";

const CODE_TABS = ["curl", "node", "response"];

function MethodBadge({ method }) {
  return <span className={`docs-method docs-method--${method.toLowerCase()}`}>{method}</span>;
}

function ParamTable({ title, params }) {
  if (!params?.length) return null;
  return (
    <div className="docs-params">
      <h4>{title}</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>In</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p) => (
            <tr key={`${p.in}-${p.name}`}>
              <td>
                <code>{p.name}</code>
              </td>
              <td>{p.in}</td>
              <td>{p.type}</td>
              <td>{p.required ? "Yes" : "No"}</td>
              <td>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EditorLine({ line }) {
  return (
    <div className="docs-editor__line">
      <span className="docs-editor__gutter">{line.num}</span>
      <span className="docs-editor__code">
        {line.parts.map((part, i) => (
          <span key={i} className={`docs-editor__tok docs-editor__tok--${part.t}`}>
            {part.v}
          </span>
        ))}
      </span>
    </div>
  );
}

function OverviewConsole({ page }) {
  const { editor } = page;
  if (!editor) return null;

  return (
    <article className="docs-article docs-article--overview">
      <h1>{page.title}</h1>
      <p className="docs-lead docs-lead--overview">
        Quick reference in an editor-style view — base URLs in the terminal below.
      </p>

      <div className="docs-console-window">
        <div className="docs-console-window__chrome">
          <div className="docs-console-window__dots" aria-hidden="true">
            <span /><span /><span />
          </div>
          <span className="docs-console-window__title">{editor.filename}</span>
          <span className="docs-console-window__badge">Read-only</span>
        </div>
        <div className="docs-editor">
          {editor.lines.map((line) =>
            line.parts.length === 0 ? (
              <div key={line.num} className="docs-editor__line docs-editor__line--empty">
                <span className="docs-editor__gutter">{line.num}</span>
              </div>
            ) : (
              <EditorLine key={line.num} line={line} />
            )
          )}
        </div>
        <div className="docs-terminal">
          <div className="docs-terminal__bar">
            <span className="docs-terminal__icon" aria-hidden="true">
              ◆
            </span>
            Console — base URLs
          </div>
          <div className="docs-terminal__body">
            {editor.terminal.map((row, i) => (
              <div key={i} className="docs-terminal__row">
                <span className="docs-terminal__prompt">{row.prompt}</span>
                <span className="docs-terminal__cmd">{row.cmd}</span>
                {row.output && (
                  <div className="docs-terminal__output">
                    <span className="docs-terminal__caret" aria-hidden="true">
                      →
                    </span>
                    <code>{row.output}</code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function PageContent({ pageId }) {
  const page = DOCS_PAGES[pageId];
  if (!page) return null;

  if (pageId === "overview" && page.editor) {
    return <OverviewConsole page={page} />;
  }

  return (
    <article className="docs-article">
      <h1>{page.title}</h1>
      {page.content?.map((p) => (
        <p key={p} className="docs-lead">
          {p}
        </p>
      ))}

      {page.example && (
        <pre className="docs-code-block">
          <code>{page.example}</code>
        </pre>
      )}

      {page.codes && (
        <div className="docs-params">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {page.codes.map((c) => (
                <tr key={c.code}>
                  <td>{c.status}</td>
                  <td>
                    <code>{c.code}</code>
                  </td>
                  <td>{c.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {page.events && (
        <ul className="docs-event-list">
          {page.events.map((ev) => (
            <li key={ev}>
              <code>{ev}</code>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function OperationContent({ op }) {
  const allParams = [
    ...(op.pathParams || []),
    ...(op.query || []),
    ...(op.headers || []),
  ];

  return (
    <article className="docs-article">
      <div className="docs-article__breadcrumb">
        <span>{op.tag}</span>
      </div>
      <div className="docs-article__title-row">
        <MethodBadge method={op.method} />
        <code className="docs-path">{op.path}</code>
      </div>
      <h1>{op.title}</h1>
      <p className="docs-lead">{op.desc}</p>

      {allParams.length > 0 && (
        <ParamTable title="Parameters" params={allParams} />
      )}

      {op.requestBody && (
        <div className="docs-request-body">
          <h4>Request body</h4>
          <p className="docs-muted">application/json · required</p>
          <pre className="docs-code-block docs-code-block--inline">
            <code>{JSON.stringify(op.requestBody.schema, null, 2)}</code>
          </pre>
        </div>
      )}

      <div className="docs-responses">
        <h4>Responses</h4>
        {op.responses.map((r) => (
          <div key={r.status} className="docs-response">
            <div className="docs-response__head">
              <span className={`docs-status docs-status--${Math.floor(r.status / 100)}`}>
                {r.status}
              </span>
              <span>{r.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function ApiDocumentation() {
  const [activeId, setActiveId] = useState("overview");
  const [search, setSearch] = useState("");
  const [codeTab, setCodeTab] = useState("curl");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const active = findDocItem(activeId);
  const isPage = active?.item?.type === "page";
  const op = active?.item?.type === "operation" ? active.item : null;

  const filteredNav = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return DOCS_NAV;
    return DOCS_NAV.map((group) => ({
      ...group,
      items: group.items.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          (i.path && i.path.toLowerCase().includes(q)) ||
          (i.method && i.method.toLowerCase().includes(q))
      ),
    })).filter((g) => g.items.length > 0);
  }, [search]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (hash && findDocItem(hash)) setActiveId(hash);
  }, []);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      if (hash && findDocItem(hash)) setActiveId(hash);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const select = (id) => {
    setActiveId(id);
    window.location.hash = id;
    setSidebarOpen(false);
  };

  const rightCode = useMemo(() => {
    if (!op) return null;
    if (codeTab === "curl") return buildCurl(op);
    if (codeTab === "node") return buildNodeSample(op);
    return JSON.stringify(op.responses[0]?.example ?? {}, null, 2);
  }, [op, codeTab]);

  return (
    <div className="docs-shell">
      <header className="docs-topbar">
        <div className="docs-topbar__left">
          <Link to="/" className="docs-topbar__logo">
            Anilax Software
          </Link>
          <span className="docs-topbar__divider" />
          <span className="docs-topbar__title">{DOCS_META.title}</span>
          <span className="docs-topbar__version">v{DOCS_META.version}</span>
        </div>
        <div className="docs-topbar__right">
          <a
            href={ANILAX_AUTH_URL}
            className="docs-topbar__auth"
            onClick={(e) => {
              e.preventDefault();
              redirectToAnilaxAuth({ source: "docs-topbar" });
            }}
          >
            Sign in
          </a>
          <Link to="/api" className="docs-topbar__link">
            API catalog
          </Link>
          <button
            type="button"
            className="docs-sidebar-toggle"
            aria-label="Toggle navigation"
            onClick={() => setSidebarOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className="docs-auth-banner">
        <p>
          API requests are only allowed after authentication. Any Try it, fetch, or direct API hit
          from this page goes to{" "}
          <a
            href={ANILAX_AUTH_URL}
            onClick={(e) => {
              e.preventDefault();
              redirectToAnilaxAuth({ source: "docs-banner" });
            }}
          >
            anilaxpayments.com/auth
          </a>
          .
        </p>
      </div>

      <div className={`docs-layout ${sidebarOpen ? "docs-layout--sidebar-open" : ""}`}>
        <aside className="docs-sidebar">
          <div className="docs-sidebar__search">
            <input
              type="search"
              placeholder="Search endpoints…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search documentation"
            />
          </div>
          <nav className="docs-sidebar__nav" aria-label="API documentation">
            {filteredNav.map((group) => (
              <div key={group.id} className="docs-nav-group">
                <p className="docs-nav-group__title">{group.title}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`docs-nav-item ${activeId === item.id ? "docs-nav-item--active" : ""}`}
                        onClick={() => select(item.id)}
                      >
                        {item.type === "operation" && (
                          <MethodBadge method={item.method} />
                        )}
                        <span className="docs-nav-item__label">{item.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="docs-main">
          {isPage ? <PageContent pageId={activeId} /> : op ? <OperationContent op={op} /> : null}
        </main>

        <aside className="docs-panel">
          {op ? (
            <>
              <div className="docs-panel__tabs">
                {CODE_TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`docs-panel__tab ${codeTab === tab ? "docs-panel__tab--active" : ""}`}
                    onClick={() => setCodeTab(tab)}
                  >
                    {tab === "curl" ? "cURL" : tab === "node" ? "Node.js" : "Response"}
                  </button>
                ))}
              </div>
              <div className="docs-panel__try">
                <span className="docs-panel__badge">Auth required</span>
                <button
                  type="button"
                  className="docs-try-btn"
                  onClick={() =>
                    redirectToAnilaxAuth({
                      source: "docs-try-it",
                      endpoint: op.path,
                      method: op.method,
                    })
                  }
                >
                  Try it → Auth
                </button>
              </div>
              <pre className="docs-code-block docs-code-block--panel">
                <code>{rightCode}</code>
              </pre>
            </>
          ) : (
            <div className="docs-panel__intro">
              <p className="docs-panel__label">Authenticate first</p>
              <a
                href={ANILAX_AUTH_URL}
                className="docs-panel__auth-link"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToAnilaxAuth({ source: "docs-panel" });
                }}
              >
                {DOCS_META.authUrl}
              </a>
              <p className="docs-panel__label">Sandbox base URL</p>
              <code>{DOCS_META.sandboxUrl}</code>
              <p className="docs-panel__hint">
                Select an endpoint from the sidebar. Try it and in-browser API calls redirect to
                auth.
              </p>
            </div>
          )}
        </aside>
      </div>

      {sidebarOpen && (
        <button
          type="button"
          className="docs-backdrop"
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
